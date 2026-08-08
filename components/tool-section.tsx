"use client"

import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { dictionary as d, type Localized, type Tool } from "@/lib/i18n"
import { ToolCard } from "@/components/tool-card"

export function ToolSection({
  id,
  title,
  subtitle,
  tools,
  ranked,
}: {
  id: string
  title: Localized
  subtitle: Localized
  tools: Tool[]
  ranked?: boolean
}) {
  const { t } = useLanguage()

  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t(title)}</h2>
          <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">{t(subtitle)}</p>
        </div>
        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80"
        >
          {t(d.sections.viewAll)}
          <ArrowRight className="size-4 rtl:rotate-180" />
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool, i) => (
          <ToolCard key={tool.id} tool={tool} rank={ranked ? i + 1 : undefined} />
        ))}
      </div>
    </section>
  )
}
