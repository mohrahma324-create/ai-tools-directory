import {
  boolean,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
} from "drizzle-orm/pg-core"

export const tools = pgTable("tools", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  url: text("url").notNull().default("#"),
  taglineEn: text("tagline_en").notNull(),
  taglineAr: text("tagline_ar").notNull(),
  categoryEn: text("category_en").notNull(),
  categoryAr: text("category_ar").notNull(),
  icon: text("icon").notNull().default("Sparkles"),
  section: text("section").notNull().default("productivity"),
  votes: integer("votes").notNull().default(0),
  rating: numeric("rating", { precision: 2, scale: 1 }).notNull().default("4.5"),
  featured: boolean("featured").notNull().default(false),
  tagEn: text("tag_en"),
  tagAr: text("tag_ar"),
  status: text("status").notNull().default("approved"),
  submitterEmail: text("submitter_email"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})

export const toolVotes = pgTable(
  "tool_votes",
  {
    id: serial("id").primaryKey(),
    toolId: text("tool_id").notNull(),
    voterId: text("voter_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    uniqueVote: unique().on(t.toolId, t.voterId),
  }),
)

export type ToolRow = typeof tools.$inferSelect
