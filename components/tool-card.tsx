"use client"

import {
  ArrowUpRight,
  AudioLines,
  CalendarCheck,
  Calculator,
  Clapperboard,
  ChevronUp,
  Film,
  Headset,
  Lightbulb,
  Mail,
  NotebookPen,
  Presentation,
  Scissors,
  Sparkles,
  Star,
  TrendingUp,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { useTransition } from "react"
import { useLanguage } from "@/components/language-provider"
import { useVotes } from "@/components/votes-provider"
import { toggleUpvote } from "@/app/actions/tools"
import { dictionary as d, type Tool } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const icons: Record<string, LucideIcon> = {
  Sparkles,
  Clapperboard,
  TrendingUp,
  Video,
  AudioLines,
  Scissors,
  Film,
  CalendarCheck,
  NotebookPen,
  Mail,
  Workflow,
  Calculator,
  Presentation,
  Headset,
  Lightbulb,
}

export function ToolCard({ tool, rank }: { tool: Tool; rank?: number }) {
  const { t } = useLanguage()
  const { isVoted, markVoted } = useVotes()
  const [isPending, startTransition] = useTransition()
  const Icon = icons[tool.icon] ?? Sparkles
  const voted = isVoted(tool.id)

  const handleVote = () => {
    const nextVoted = !voted
    markVoted(tool.id, nextVoted)
    startTransition(() => {
      toggleUpvote(tool.id, nextVoted)
    })
  }

  return (
    <article className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:bg-card/80">
      <div className="flex items-start gap-4">
        <div className="relative">
          <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:neon-glow">
            <Icon className="size-6" />
          </span>
          {typeof rank === "number" && (
            <span className="absolute -start-2 -top-2 grid size-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {rank}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-semibold">{tool.name}</h3>
            {tool.tag && (
              <span className="shrink-0 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                {t(tool.tag)}
              </span>
            )}
          </div>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {t(tool.tagline)}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/60 pt-3">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-md bg-secondary px-2 py-1 font-medium text-secondary-foreground">
            {t(tool.category)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Star className="size-3.5 fill-primary text-primary" />
            {tool.rating.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            aria-label={t(d.card.visit)}
            className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUpRight className="size-4 rtl:-scale-x-100" />
          </a>
          <button
            type="button"
            disabled={isPending}
            onClick={handleVote}
            aria-pressed={voted}
            className={cn(
              "inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold transition-colors