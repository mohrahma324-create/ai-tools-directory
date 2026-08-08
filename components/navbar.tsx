"use client"

import { useState } from "react"
import { Hexagon, Languages, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { dictionary as d } from "@/lib/i18n"

export function Navbar() {
  const { t, lang, toggle } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { label: t(d.nav.discover), href: "#featured" },
    { label: t(d.nav.categories), href: "#video" },
    { label: t(d.nav.submit), href: "#" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground neon-glow">
            <Hexagon className="size-5" />
          </span>
          <span className="font-mono text-base font-semibold tracking-tight">
            {t(d.brand)}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1.5 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            <Languages className="size-3.5" />
            <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
            <span className="text-border">/</span>
            <span className={lang === "ar" ? "text-primary" : "text-muted-foreground"}>AR</span>
          </button>

          <Button size="sm" className="hidden font-semibold neon-glow sm:inline-flex">
            {t(d.nav.signIn)}
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-9 place-items-center rounded-md border border-border md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 font-semibold">
              {t(d.nav.signIn)}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
