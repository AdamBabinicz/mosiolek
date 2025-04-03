import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = insertContactMessageSchema.parse({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        hasConsent: req.body.privacyPolicy,
      });

      // Store contact message
      const message = await storage.createContactMessage(contactData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Contact message submitted successfully",
        data: message,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details,
        });
      } else {
        console.error("Error submitting contact message:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while submitting your message",
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
