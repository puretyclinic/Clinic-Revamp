import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

const ADMIN_KEY = process.env.ADMIN_KEY || "purety2026admin";

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const key = (req.headers["x-admin-key"] as string) || (req.query.key as string);
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
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
