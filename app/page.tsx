"use client"

import { LanguageProvider } from "@/components/language-provider"
import { VotesProvider } from "@/components/votes-provider"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedSection } from "@/components/featured-section"
import { ToolSection } from "@/components/tool-section"
import { Footer } from "@/components/footer"
import {
  businessTools,
  dictionary as d,
  productivityTools,
  videoTools,
} from "@/lib/i18n"

export default function Page() {
  return (
    <LanguageProvider>
      <VotesProvider initialVotedIds={[]}>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <FeaturedSection />
            <ToolSection
              id="video"
              title={d.sections.video}
              subtitle={d.sections.videoSub}
              tools={videoTools}
            />
            <ToolSection
              id="productivity"
              title={d.sections.productivity}
              subtitle={d.sections.productivitySub}
              tools={productivityTools}
            />
            <ToolSection
              id="business"
              title={d.sections.business}
              subtitle={d.sections.businessSub}
              tools={businessTools}
            />
          </main>
          <Footer />
        </div>
      </VotesProvider>
    </LanguageProvider>
  )
}
