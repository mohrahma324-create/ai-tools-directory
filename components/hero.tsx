"use client"

import { ArrowRight, Search, Sparkles } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { dictionary as d } from "@/lib/i18n"

const stats = [
  { value: "320+", key: "statTools" as const },
  { value: "12", key: "statCategories" as const },
  { value: "85K", key: "statUsers" as const },
]

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient neon glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 max-w-3xl rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            {t(d.hero.badge)}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {t(d.hero.title)}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t(d.hero.subtitle)}
          </p>

          {/* search */}
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-xl border border-border bg-card p-2 focus-within:border-primary/60">
            <Search className="ms-2 size-5 shrink-0 text-muted-foreground" />
            <input
              type="text"
              placeholder={t(d.hero.search)}
              className="w-full bg-transparent px-1 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <Button size="sm" className="shrink-0 font-semibold">
              {t(d.hero.ctaPrimary)}
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#featured"
              className={cn(buttonVariants({ size: "lg" }), "font-semibold neon-glow")}
            >
              {t(d.hero.ctaPrimary)}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </a>
            <Button size="lg" variant="outline" className="font-semibold">
              {t(d.hero.ctaSecondary)}
            </Button>
          </div>
        </div>

        {/* stats */}
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.key}
              className="rounded-xl border border-border bg-card/50 p-4 text-center"
            >
              <div className="font-mono text-2xl font-bold text-primary neon-text sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {t(d.hero[s.key])}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
