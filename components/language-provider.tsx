"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import type { Lang, Localized } from "@/lib/i18n"

type LanguageContextValue = {
  lang: Lang
  dir: "ltr" | "rtl"
  toggle: () => void
  setLang: (lang: Lang) => void
  /** Resolve a localized value to the current language. */
  t: (value: Localized) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  const dir = lang === "ar" ? "rtl" : "ltr"

  useEffect(() => {
    const el = document.documentElement
    el.lang = lang
    el.dir = dir
  }, [lang, dir])

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"))
  }, [])

  const t = useCallback((value: Localized) => value[lang], [lang])

  return (
    <LanguageContext.Provider value={{ lang, dir, toggle, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
