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

  async createRating(rating: InsertRating): Promise<Rating> {
    const [created] = await db.insert(ratings).values(rating).returning();
    return created;
  }

  async getRatingSummary(pageId: string): Promise<RatingSummary | null> {
    const rows = await db.select().from(ratings).where(eq(ratings.pageId, pageId));
    if (rows.length === 0) return null;
    const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let total = 0;
    for (const r of rows) {
      distribution[r.stars] = (distribution[r.stars] || 0) + 1;
      total += r.stars;
    }
    return {
      pageId,
      pageType: rows[0].pageType,
      pageTitle: rows[0].pageTitle,
      totalRatings: rows.length,
      averageStars: Math.round((total / rows.length) * 10) / 10,
      distribution,
    };
  }

  async getAllRatingSummaries(): Promise<RatingSummary[]> {
    const rows = await db.select().from(ratings).orderBy(desc(ratings.createdAt));
    const map = new Map<string, { rows: Rating[] }>();
    for (const r of rows) {
      if (!map.has(r.pageId)) map.set(r.pageId, { rows: [] });
      map.get(r.pageId)!.rows.push(r);
    }
    return Array.from(map.entries()).map(([pageId, { rows }]) => {
      const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      let total = 0;
      for (const r of rows) {
        distribution[r.stars] = (distribution[r.stars] || 0) + 1;
        total += r.stars;
      }
      return {
        pageId,
        pageType: rows[0].pageType,
        pageTitle: rows[0].pageTitle,
        totalRatings: rows.length,
        averageStars: Math.round((total / rows.length) * 10) / 10,
        distribution,
      };
    }).sort((a, b) => b.totalRatings - a.totalRatings);
  }
}

export const storage = new DatabaseStorage();
