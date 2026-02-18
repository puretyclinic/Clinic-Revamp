import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { Resend } from "resend";

const ADMIN_KEY = process.env.ADMIN_KEY || "purety2026admin";

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const key = (req.headers["x-admin-key"] as string) || (req.query.key as string);
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

async function sendEmailNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  source: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("No RESEND_API_KEY set, skipping email notification");
    return;
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Purety Clinic Website <website@puretyclinic.com>",
      to: "drjonathan@puretyclinic.com",
      subject: `New ${data.source} Submission: ${data.firstName} ${data.lastName}`,
      html: `
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
      `,
    });
    console.log("Email notification sent successfully");
  } catch (error) {
    console.error("Failed to send email notification:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ success: false, message: "Please fill in all required fields." });
      }

      const submission = await storage.createContact(parsed.data);

      sendEmailNotification(parsed.data).catch(() => {});

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
      await storage.markContactRead(req.params.id);
      return res.json({ success: true });
    } catch (error) {
      console.error("Error marking contact read:", error);
      return res.status(500).json({ message: "Failed to update." });
    }
  });

  return httpServer;
}
