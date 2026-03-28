import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { google } from "googleapis";

const ADMIN_KEY = process.env.ADMIN_KEY || "purety2026admin";

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const key = (req.headers["x-admin-key"] as string) || (req.query.key as string);
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

// Gmail integration via Replit connector
let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Gmail not connected');
  }
  return accessToken;
}

async function getGmailClient() {
  const accessToken = await getAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.gmail({ version: 'v1', auth: oauth2Client });
}

async function sendEmailNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  source: string;
}) {
  try {
    const gmail = await getGmailClient();

    const subject = `New ${data.source} Submission: ${data.firstName} ${data.lastName}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #5A8085; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0;">New Contact Form Submission</h2>
          <p style="margin: 5px 0 0; opacity: 0.8;">From: ${data.source}</p>
        </div>
        <div style="border: 1px solid #e5e5e5; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Name:</td>
              <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${data.message}</td>
            </tr>
          </table>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 15px;">Sent from Purety Clinic Website</p>
      </div>
    `;

    const to = "drjonathan@puretyclinic.com";
    const rawMessage = [
      `To: ${to}`,
      `Reply-To: ${data.firstName} ${data.lastName} <${data.email}>`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=UTF-8`,
      ``,
      htmlBody,
    ].join("\r\n");

    const encodedMessage = Buffer.from(rawMessage)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    const result = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log("Gmail notification sent successfully, message ID:", result.data.id);
  } catch (error: any) {
    console.error("Failed to send Gmail notification:", error?.message || error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  function isSpam(body: any): boolean {
    // Honeypot: if the hidden field has any value, it's a bot
    if (body._honey && body._honey.trim().length > 0) return true;

    const message = (body.message || "") as string;
    const firstName = (body.firstName || "") as string;
    const lastName = (body.lastName || "") as string;
    const email = (body.email || "") as string;

    // Block messages containing URLs — real patients never paste links
    if (/https?:\/\//i.test(message)) return true;
    if (/www\.[a-z0-9-]+\.[a-z]{2,}/i.test(message)) return true;

    // Keyword blocklist for common marketing/spam patterns
    const spamKeywords = [
      "turbojot", "cold email", "paid ads", "roi", "per submission",
      "automate", "contact form submission", "sign up for free",
      "beats cold", "stealth browser", "rotating ip", "captcha solving",
      "invite you to try", "founded the company", "costs just $",
    ];
    const msgLower = message.toLowerCase();
    if (spamKeywords.some((kw) => msgLower.includes(kw))) return true;

    // Detect random-string spam: no spaces and long runs of mixed-case chars
    const randomStringPattern = /^[A-Za-z]{12,}$/;
    if (randomStringPattern.test(firstName.replace(/\s/g, ""))) return true;
    if (randomStringPattern.test(lastName.replace(/\s/g, ""))) return true;
    if (randomStringPattern.test(message.replace(/\s/g, ""))) return true;

    // Detect messages with no vowels (another bot tell)
    const vowelPattern = /[aeiouAEIOU]/;
    const msgNoSpaces = message.replace(/\s/g, "");
    if (msgNoSpaces.length > 10 && !vowelPattern.test(msgNoSpaces)) return true;

    // Block known spam email domains
    const spamDomains = ["turbojot.com"];
    if (spamDomains.some((d) => email.toLowerCase().endsWith(`@${d}`))) return true;

    return false;
  }

  app.post("/api/contact", async (req, res) => {
    try {
      // Silently reject spam — return success so bots don't retry
      if (isSpam(req.body)) {
        console.log("Spam submission blocked:", req.body.firstName, req.body.email);
        return res.json({ success: true });
      }

      const parsed = insertContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ success: false, message: "Please fill in all required fields." });
      }

      const submission = await storage.createContact(parsed.data);

      sendEmailNotification({
        ...parsed.data,
        source: parsed.data.source || "Website",
      }).catch(() => {});

      return res.json({ success: true, id: submission.id });
    } catch (error) {
      console.error("Contact submission error:", error);
      return res.status(500).json({ success: false, message: "Failed to save your message. Please call us at (805) 500-8300." });
    }
  });

  app.get("/api/contact", requireAdmin, async (_req, res) => {
    try {
      const submissions = await storage.getContacts();
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return res.status(500).json({ message: "Failed to fetch submissions." });
    }
  });

  app.patch("/api/contact/:id/read", requireAdmin, async (req, res) => {
    try {
      await storage.markContactRead(req.params.id as string);
      return res.json({ success: true });
    } catch (error) {
      console.error("Error marking contact read:", error);
      return res.status(500).json({ message: "Failed to update." });
    }
  });

  return httpServer;
}
