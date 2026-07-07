import { Section } from "@/components/ui/section";
import { SelectionProvider } from "@/components/providers/selection-provider";
import { BrandSelector } from "@/components/sections/brand-selector/brand-selector";
import { SiteFooter } from "@/components/sections/footer/site-footer";
import { Masthead } from "@/components/sections/masthead/masthead";
import { Narratives } from "@/components/sections/narratives/narratives";
import { Playbook } from "@/components/sections/playbook/playbook";
import { ShareOfVoice } from "@/components/sections/share-of-voice/share-of-voice";
import { SummaryMetrics } from "@/components/sections/summary-metrics/summary-metrics";
import { Ticker } from "@/components/sections/ticker/ticker";
import { TrendChart } from "@/components/sections/weekly-pulse/trend-chart";

export default function Home() {
  return (
    <>
      <Ticker />
      <main className="mx-auto max-w-295 px-8 max-[700px]:px-4.5">
        <Masthead />

        <SelectionProvider>
          <Section
            meta={{
              num: "01",
              kicker: "Share of Voice",
              title: "Where the engagement is sitting right now",
              note: "Share of total measured engagement (views + weighted likes/comments/shares) across 1,940 brand-relevant posts, June 1 - July 1.",
            }}
          >
            <ShareOfVoice />
          </Section>
          <Section
            meta={{
              num: "02",
              kicker: "Your Position",
              title: "Tell us who you are",
              note: "Selecting a house benchmarks it against the other four and surfaces a counter-move for each rival.",
            }}
            divider
          >
            <BrandSelector />
          </Section>
          <Section
            meta={{
              num: "03",
              kicker: "Weekly Pulse",
              title: "Engagement trajectory, by week",
              note: "Dated posts only (a subset of the full sample - see note below). Undated evergreen and collector content is excluded from this trend line but counted in Share of Voice.",
            }}
            divider
          >
            <TrendChart />
          </Section>
          <Playbook />
        </SelectionProvider>

        <Section
          meta={{
            num: "05",
            kicker: "Summary Metrics",
            title: "The numbers behind the read",
            note: "Comments-per-post is the strongest proxy we have for real conversation vs. passive scrolling.",
          }}
          divider
        >
          <SummaryMetrics />
        </Section>
        <Section
          meta={{
            num: "06",
            kicker: "Content Narratives",
            title: "What each house's audience is actually talking about",
            note: "Auto-clustered content themes, top performing posts and the highest-premium, still-uncrowded tags for each house.",
          }}
          divider
        >
          <Narratives />
        </Section>

        <SiteFooter />
      </main>
    </>
  );
}
