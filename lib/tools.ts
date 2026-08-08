import { and, desc, eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { tools, toolVotes, type ToolRow } from "@/lib/db/schema"
import type { Tool } from "@/lib/i18n"

export function rowToTool(row: ToolRow): Tool {
  return {
    id: row.id,
    name: row.name,
    url: row.url,
    tagline: { en: row.taglineEn, ar: row.taglineAr },
    category: { en: row.categoryEn, ar: row.categoryAr },
    icon: row.icon,
    votes: row.votes,
    rating: Number(row.rating),
    featured: row.featured,
    tag: row.tagEn && row.tagAr ? { en: row.tagEn, ar: row.tagAr } : undefined,
  }
}

export async function getToolsBySection(section: string): Promise<Tool[]> {
  const rows = await db
    .select()
    .from(tools)
    .where(and(eq(tools.section, section), eq(tools.status, "approved")))
    .orderBy(desc(tools.votes))
  return rows.map(rowToTool)
}

export async function getVotedToolIds(voterId: string | undefined): Promise<string[]> {
  if (!voterId) return []
  const rows = await db
    .select({ toolId: toolVotes.toolId })
    .from(toolVotes)
    .where(eq(toolVotes.voterId, voterId))
  return rows.map((r) => r.toolId)
}

export async function getPendingTools(): Promise<Tool[]> {
  const rows = await db
    .select()
    .from(tools)
    .where(eq(tools.status, "pending"))
    .orderBy(desc(tools.createdAt))
  return rows.map(rowToTool)
}
