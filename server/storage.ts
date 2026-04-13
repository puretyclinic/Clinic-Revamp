import { type User, type InsertUser, type ContactSubmission, type InsertContact, type Rating, type InsertRating, users, contactSubmissions, ratings } from "@shared/schema";
import { db } from "./db";
import { eq, desc, sql } from "drizzle-orm";

export interface RatingSummary {
  pageId: string;
  pageType: string;
  pageTitle: string;
  totalRatings: number;
  averageStars: number;
  distribution: Record<number, number>;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<ContactSubmission>;
  getContacts(): Promise<ContactSubmission[]>;
  markContactRead(id: string): Promise<void>;
  createRating(rating: InsertRating): Promise<Rating>;
  getRatingSummary(pageId: string): Promise<RatingSummary | null>;
  getAllRatingSummaries(): Promise<RatingSummary[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContact(contact: InsertContact): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values(contact).returning();
    return submission;
  }

  async getContacts(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  async markContactRead(id: string): Promise<void> {
    await db.update(contactSubmissions).set({ read: true }).where(eq(contactSubmissions.id, id));
  }
}

export const storage = new DatabaseStorage();
