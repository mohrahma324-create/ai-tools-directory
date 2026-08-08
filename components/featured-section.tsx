"use client"

import { Flame } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { dictionary as d, featuredTools } from "@/lib/i18n"
import { ToolCard } from "@/components/tool-card"

export function FeaturedSection() {
  const { t } = useLanguage()

  return (
    <section id="featured" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
          <Flame className="size-5" />
        </span>
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t(d.sections.featured)}
          </h2>
          <p className="text-sm text-muted-foreground">{t(d.sections.featuredSub)}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {featuredTools.map((tool, i) => (
          <ToolCard key={tool.id} tool={tool} rank={i + 1} />
        ))}
      </div>
    </section>
  )
}
