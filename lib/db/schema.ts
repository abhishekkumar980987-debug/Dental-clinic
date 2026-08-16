import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  preferredDate: text("preferred_date"),
  preferredTime: text("preferred_time"),
  treatment: text("treatment"),
  message: text("message"),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})

export type Booking = typeof bookings.$inferSelect
export type NewBooking = typeof bookings.$inferInsert
