"use server"

import { and, eq, sql } from "drizzle-orm"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { tools, toolVotes } from "@/lib/db/schema"

const VOTER_COOKIE = "aae_voter"

async function getVoterId(): Promise<string> {
  const store = await cookies()
  let id = store.get(VOTER_COOKIE)?.value
  if (!id) {
    id = crypto.randomUUID()
    store.set(VOTER_COOKIE, id, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    })
  }
  return id
}

export async function toggleUpvote(toolId: string): Promise<{
  voted: boolean
  votes: number
}> {
  const voterId = await getVoterId()

  const existing = await db
    .select()
    .from(toolVotes)
    .where(and(eq(toolVotes.toolId, toolId), eq(toolVotes.voterId, voterId)))
    .limit(1)

  let voted: boolean
  if (existing.length > 0) {
    await db
      .delete(toolVotes)
      .where(and(eq(toolVotes.toolId, toolId), eq(toolVotes.voterId, voterId)))
    await db
      .update(tools)
      .set({ votes: sql`GREATEST(${tools.votes} - 1, 0)` })
      .where(eq(tools.id, toolId))
    voted = false
  } else {
    await db.insert(toolVotes).values({ toolId, voterId })
    await db
      .update(tools)
      .set({ votes: sql`${tools.votes} + 1` })
      .where(eq(tools.id, toolId))
    voted = true
  }

  const [row] = await db
    .select({ votes: tools.votes })
    .from(tools)
    .where(eq(tools.id, toolId))
    .limit(1)

  revalidatePath("/")
  return { voted, votes: row?.votes ?? 0 }
}

export type SubmitState = { status: "idle" | "success" | "error"; message?: string }

function slugify(name: string): string {
  return (
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 40) || "tool"
  )
}

export async function submitTool(
  _prev: SubmitState,
  formData: FormData,
): Promise<SubmitState> {
  const name = String(formData.get("name") ?? "").trim()
  const url = String(formData.get("url") ?? "").trim()
  const taglineEn = String(formData.get("taglineEn") ?? "").trim()
  const taglineAr = String(formData.get("taglineAr") ?? "").trim()
  const categoryEn = String(formData.get("categoryEn") ?? "").trim()
  const categoryAr = String(formData.get("categoryAr") ?? "").trim()
  const section = String(formData.get("section") ?? "productivity").trim()
  const email = String(formData.get("email") ?? "").trim()

  if (!name || !url || !taglineEn || !taglineAr || !categoryEn || !categoryAr) {
    return { status: "error", message: "missing" }
  }

  const validSections = ["featured", "video", "productivity", "business"]
  const safeSection = validSections.includes(section) ? section : "productivity"
  const normalizedUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`

  const id = `${slugify(name)}-${crypto.randomUUID().slice(0, 6)}`

  try {
    await db.insert(tools).values({
      id,
      name,
      url: normalizedUrl,
      taglineEn,
      taglineAr,
      categoryEn,
      categoryAr,
      section: safeSection === "featured" ? "productivity" : safeSection,
      icon: "Sparkles",
      status: "pending",
      submitterEmail: email || null,
    })
  } catch {
    return { status: "error", message: "db" }
  }

  return { status: "success" }
}
