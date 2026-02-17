import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  subject: z.string().optional(),
  message: z.string().min(1),
  formSource: z.string().optional(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);

      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      if (!smtpUser || !smtpPass) {
        console.error("SMTP credentials not configured");
        return res.status(500).json({ error: "Email service not configured. Please contact us at (805) 500-8300." });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const formLabel = data.formSource === "FMT" ? "FMT Inquiry" : "General Contact";

      const emailHtml = `
        <h2>New ${formLabel} from Purety Clinic Website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${data.firstName} ${data.lastName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
          ${data.subject ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Subject</td><td style="padding: 8px; border: 1px solid #ddd;">${data.subject}</td></tr>` : ""}
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${data.message.replace(/\n/g, "<br/>")}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Source</td><td style="padding: 8px; border: 1px solid #ddd;">${formLabel}</td></tr>
        </table>
      `;

      const mailOptions = {
        from: smtpUser,
        to: "rebootbase@icloud.com, dr@puretyclinic.com",
        replyTo: data.email,
        subject: `New ${formLabel}: ${data.firstName} ${data.lastName}`,
        html: emailHtml,
      };

      await transporter.sendMail(mailOptions);

      console.log(`Email sent successfully for ${formLabel} from ${data.email}`);
      return res.json({ success: true, message: "Your message has been sent successfully." });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Please fill in all required fields correctly.", details: error.errors });
      }
      console.error("Email send error:", error);
      return res.status(500).json({ error: "Failed to send message. Please try again or call us at (805) 500-8300." });
    }
  });

  return httpServer;
}
