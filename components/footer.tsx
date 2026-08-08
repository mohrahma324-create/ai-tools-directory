"use client"

import { Hexagon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { dictionary as d } from "@/lib/i18n"
import { TikTokIcon, XIcon } from "@/components/brand-icons"

export function Footer() {
  const { t } = useLanguage()

  const columns = [
    {
      heading: d.footer.product,
      links: [d.footer.links.browse, d.footer.links.submit, d.footer.links.pricing],
    },
    {
      heading: d.footer.company,
      links: [d.footer.links.about, d.footer.links.blog, d.footer.links.contact],
    },
    {
      heading: d.footer.resources,
      links: [d.footer.links.privacy, d.footer.links.terms],
    },
  ]

  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Hexagon className="size-5" />
              </span>
              <span className="font-mono text-base font-semibold">{t(d.brand)}</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t(d.footer.tagline)}
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t(d.footer.follow)}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <XIcon className="size-4" />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <TikTokIcon className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {columns.map((col, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold">{t(col.heading)}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t(link)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          {"\u00A9"} {new Date().getFullYear()} {t(d.brand)}. {t(d.footer.rights)}
        </div>
      </div>
    </footer>
  )
}
