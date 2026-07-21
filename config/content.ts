import type { BaseContent, TopicContent } from "@/lib/types";

/**
 * ============================================================================
 *  CONTENT  -  the authored WORDS (all optional)
 * ============================================================================
 *  `DEFAULT_CONTENT` is generic copy that works for ANY topic, so a new subject
 *  renders with ZERO edits here - you only touch config/subjects.ts.
 *
 *  `CONTENT` holds per-topic OVERRIDES, and every field is optional: supply just
 *  the bits worth customizing (a sharper headline, hand-written playbooks) and
 *  the rest falls back to DEFAULT_CONTENT. A topic with nothing to customize
 *  needs no entry at all. `npm run pull` regenerates data/<topic>.json but never
 *  touches this file, so your copy survives a refresh.
 *
 *  Tokens filled in at render time from the active dataset:
 *    {brand}      -> your product name (config/brand.ts)
 *    {subjects}   -> the subject names, e.g. "Rolex, Patek Philippe and Omega"
 *    {platforms}  -> the platforms present, e.g. "TikTok, Instagram and X"
 *
 *  Playbooks are keyed by subject id (a slug of the name, e.g. "patek-philippe").
 *  Leave a subject out of `playbooks` (or omit playbooks entirely) and the page
 *  renders a plain, no-LLM summary built from that subject's own numbers.
 * ============================================================================
 */

/**
 * Generic copy used for any topic that doesn't override it in `CONTENT` below.
 * Neutral wording ("brand", "the field") so it reads fine for any subject -
 * watches, beers, anything.
 */
export const DEFAULT_CONTENT: BaseContent = {
  masthead: {
    eyebrow: "{brand} · Competitive Social Intelligence · Trailing 30 Days",
    headline: {
      lead: "The full field, one view.",
      emphasis: "Who's actually winning the room -",
      trail: "and why.",
    },
    description:
      "A cross-platform read on {subjects} - built from live {platforms} activity. Pick your brand to see who's pulling ahead, what they're doing differently, and the counter-move worth running this week.",
  },
  sections: {
    shareOfVoice: {
      num: "01",
      kicker: "Share of Voice",
      title: "Where the engagement is sitting right now",
      note: "Share of total measured engagement (views + weighted likes/comments/shares) across the full brand-relevant sample.",
    },
    position: {
      num: "02",
      kicker: "Your Position",
      title: "Tell us who you are",
      note: "Selecting a brand benchmarks it against the others and surfaces a counter-move for each rival.",
    },
    weeklyPulse: {
      num: "03",
      kicker: "Weekly Pulse",
      title: "Engagement trajectory, by week",
      note: "Dated posts only (a subset of the full sample - see note below). Undated evergreen content is excluded from this trend line but counted in Share of Voice.",
    },
    playbook: {
      num: "04",
      kicker: "The Playbook",
      title: "What each brand is doing - and the counter",
      note: "Built from each brand's own top-performing content and white-space tags over the last 30 days.",
    },
    summaryMetrics: {
      num: "05",
      kicker: "Summary Metrics",
      title: "The numbers behind the read",
      note: "Comments-per-post is the strongest proxy we have for real conversation vs. passive scrolling.",
    },
    narratives: {
      num: "06",
      kicker: "Content Narratives",
      title: "What each brand's audience is actually talking about",
      note: "Auto-clustered content themes, top performing posts and the highest-premium, still-uncrowded tags for each brand.",
    },
  },
  footer:
    "This page is fed by KINETK pulls, one per brand. Engagement metrics (Share of Voice, weekly trend, summary stats, top posts) are aggregated from the sampled posts across {platforms}, trailing 30 days, filtered to the on-topic set by keyword relevance. Off-topic viral bleed-through is down-weighted before scoring. Engagement score weights views x1, likes x3, comments x5, shares x8. Narratives and white-space tags (section 06) come from KINETK's insights and can be refreshed live via the button above. The weekly trend chart uses only posts with a recoverable publish date; Share of Voice and summary metrics use the full filtered sample. This is a directional read on a fixed sample, not a certified brand-tracking metric.",
};

/**
 * Per-topic overrides. Each entry is a Partial - include only what you want to
 * change; everything else comes from DEFAULT_CONTENT above.
 */
export const CONTENT: Record<string, Partial<TopicContent>> = {
  watches: {
    masthead: {
      eyebrow: "{brand} · Competitive Social Intelligence · Trailing 30 Days",
      headline: {
        lead: "Five houses, one dial.",
        emphasis: "Who's actually winning the room -",
        trail: "and why.",
      },
      description:
        "A cross-platform read on {subjects} - built from live {platforms} activity. Pick your house to see who's pulling ahead, what they're doing differently, and the counter-move worth running this week.",
    },
    sections: {
      shareOfVoice: {
        num: "01",
        kicker: "Share of Voice",
        title: "Where the engagement is sitting right now",
        note: "Share of total measured engagement (views + weighted likes/comments/shares) across the full brand-relevant sample.",
      },
      position: {
        num: "02",
        kicker: "Your Position",
        title: "Tell us who you are",
        note: "Selecting a house benchmarks it against the others and surfaces a counter-move for each rival.",
      },
      weeklyPulse: {
        num: "03",
        kicker: "Weekly Pulse",
        title: "Engagement trajectory, by week",
        note: "Dated posts only (a subset of the full sample - see note below). Undated evergreen and collector content is excluded from this trend line but counted in Share of Voice.",
      },
      playbook: {
        num: "04",
        kicker: "The Playbook",
        title: "What each house is doing - and the counter",
        note: "Grounded in the actual top-performing content from each house's last 30 days, not category assumptions.",
      },
      summaryMetrics: {
        num: "05",
        kicker: "Summary Metrics",
        title: "The numbers behind the read",
        note: "Comments-per-post is the strongest proxy we have for real conversation vs. passive scrolling.",
      },
      narratives: {
        num: "06",
        kicker: "Content Narratives",
        title: "What each house's audience is actually talking about",
        note: "Auto-clustered content themes, top performing posts and the highest-premium, still-uncrowded tags for each house.",
      },
    },
    footer:
      "This page is fed by KINETK pulls, one per house. Engagement metrics (Share of Voice, weekly trend, summary stats, top posts) are aggregated from the sampled posts across {platforms}, trailing 30 days, filtered to the on-topic set by keyword relevance. Off-topic viral bleed-through common in broad social pulls (meme audio, unrelated trending clips) is down-weighted before scoring. Engagement score weights views x1, likes x3, comments x5, shares x8. Narratives and white-space tags (section 06) come from KINETK's insights and can be refreshed live via the button above. The weekly trend chart uses only posts with a recoverable publish date (a minority of the sample); Share of Voice and summary metrics use the full filtered sample. This is a directional read on a fixed sample, not a certified brand-tracking metric.",
    playbooks: {
      rolex: {
        headline:
          `#2 at 27.0% and the only house that actually gets shared - 5,711 shares against 1,486 for the other four combined.`,
        drivers: [
          `27.0% share of voice on 75.3M views, second only to Richard Mille. Distribution is the moat: 75.8 shares per million views against Patek's 34.0, RM's 4.3, Omega's 2.1 and AP's 1.3. Shares carry the heaviest weight in the score (x8), and Rolex is the only house earning them at any meaningful rate.`,
          `It also has the widest content base - 1,404 sampled records, the most of the five, spread evenly across five clusters (198/192/180/128/125 posts) rather than concentrated in one. No rival's narrative set is this balanced.`,
          `The "his and hers" pairing is its best-converting owned format: the top post is a couples Day-Date/Datejust set at 8.6M views, the #1 cluster is Day-Date and Datejust pairs (198 posts), and a chocolate-dial couples clip converts at 7.4% likes - nearly triple the 2.6% on its biggest post.`,
        ],
        counters: [
          `Don't fight Rolex on distribution - out-converting it is the cheaper path. Its 3.61% like rate is the second-lowest here, so its reach is broad but shallow per impression.`,
          `Its content is jeweler-supplied, not brand-owned - Trotters Jewellers and Bucherer1888 drive two of its five clusters. That dealer layer is reachable: #trottersjewellers (+89.1%) is an open tag, as are #hongkong (+101.1%) and #dubai (+74.9%).`,
          `Vintage and pre-owned is a live 192-post lane for Rolex and effectively vacant for everyone else - the easiest structural gap in this pull to claim.`,
        ],
        caveat:
          `Rolex's weekly line falls from 2.01M to 68.6K across the five buckets - a 97% drop, far steeper than any rival's. That final bucket (Jul 15-20) is almost certainly recency lag in the dated subset rather than a real collapse; treat the trend's right-hand edge as incomplete, and read Share of Voice (full sample) as the reliable number.`,
      },
      "patek-philippe": {
        headline:
          `Last at 10.1% and the smallest reach of the five - but the most conversation per view of anyone (145 comments/M).`,
        drivers: [
          `10.1% share of voice, fifth of five, on 28.3M views and 901.9K likes - the lowest on both counts. The volume story is genuinely bad.`,
          `The efficiency story is not. At 145.3 comments per million views it leads the set (AP 134.9, Rolex 74.4, Omega 73.3, RM 45.3), and its 34.0 shares per million is second only to Rolex - 8x Richard Mille's. Small audience, unusually responsive.`,
          `Its top-converting post is the best in the whole dataset: "shes stunninggg" at 1.31M views and 150.6K likes - an 11.5% like rate, against 3-6% for every other house's best. Short reaction-format content, not brand film.`,
        ],
        counters: [
          `Patek is narrow by design and exposed because of it - 625 of its 747 clustered posts (84%) are Nautilus or Aquanaut. One design language, four ways. Any house with a second icon can out-cover it structurally.`,
          `Its whitespace is dealer- and community-coded: #timelessdesign (+97.1%), #melbourne (+96.3%), #marcgebauer (+94.7%) - reachable through named dealers and creators rather than paid distribution.`,
          `Unboxing is its repeatable mechanic (165 posts on the 5712/1R alone) and needs no production budget to copy.`,
        ],
        caveat:
          `Two items inflate Patek's sample. Its fifth cluster is "Blancpain Watches and Luxury Lifestyle" (122 posts) - a different maker entirely - and its #2 top post, "Jewelry Boxes Love Up to 25% Off" (1.7M views, 246 likes, 0.01%), is a shopping ad that also appears verbatim in Omega's top three. Discount both: roughly 6% of Patek's sampled views are commerce bleed-through with no engagement attached.`,
      },
      "audemars-piguet": {
        headline:
          `#3 at 14.5% with the best comments-per-post in the set (4.42) - and essentially zero sharing: 50 shares across 1,218 posts.`,
        drivers: [
          `14.5% share of voice on 39.9M views, third. It converts well on the surfaces that matter for conversation: 4.42 comments per post (joint-best with RM) and 134.9 comments per million views, second only to Patek.`,
          `Its 4.10% like rate is third of five, ahead of Rolex (3.61%) and Patek (3.18%) - AP is competitive on every interaction axis except one.`,
          `That exception is severe. 50 total shares, 1.25 per million views, is 60x behind Rolex and the weakest number any house posts anywhere in this pull. Its content gets liked and discussed in place; it never travels.`,
        ],
        counters: [
          `Sharing is AP's structural hole and the cheapest place to beat it - it forfeits the x8-weighted term of the score almost entirely.`,
          `Model breadth is the other opening: 698 of its 894 clustered posts (78%) are Royal Oak variants - Skeleton, Black Dial 15400ST, Offshore, Chronograph. No second line surfaces at all.`,
          `Its whitespace is geographic and marketplace-coded - #toronto (+95.1%), #chrono24 (+83.4%), #watchnerd (+66.5%). Regional dealer content is where its audience is most underserved.`,
        ],
        caveat:
          `Two things overstate AP here. Its three "top posts" are one Royal Oak Chronograph 41mm unboxing uploaded three times (2,748,189 / 2,748,186 / 2,748,185 views, identical 102,658 likes) - read that slot as a single video. And its second-largest cluster, "Rolex Daytona & Vacheron Constantin Overseas" (196 posts), is competitor content the query swept in, not AP product.`,
      },
      "richard-mille": {
        headline:
          `#1 at 36.1% and the highest like rate in the set (6.12%) - but 38% of its reach is Jacob & Co. and Bulgari content, not RM.`,
        drivers: [
          `36.1% share of voice, a third more than #2 Rolex (27.0%), on 94.1M views - and it does it on the fewest sampled records of any house (965 vs Rolex's 1,404). Extraordinary reach per post.`,
          `The reach converts, unlike the last pull: 6.12% likes on views is the best of the five (AP 4.10%, Omega 3.81%, Rolex 3.61%, Patek 3.18%), and its top three posts run 4.2-6.3% like rates.`,
          `Where it fails is conversation. 45.3 comments per million views is the lowest here by a wide margin - a third of Patek's 145.3. RM content is watched and liked, then scrolled past.`,
        ],
        counters: [
          `Read RM's #1 with the attribution caveat below applied - a meaningful share of that lead belongs to adjacent haute-horlogerie brands, so the gap to Rolex is narrower than 36.1% vs 27.0% suggests.`,
          `Craft-process storytelling is its genuine engine and it is not brand-locked: its two biggest posts are both "how this is made" films (gem-setting, sapphire-case coloring) pulling 20.4M and 15.7M views. Any house with a workshop can run that format.`,
          `Its usable whitespace is celebrity- and cross-luxury-coded - #bubbawatson (+74.2%), #superwatchman (+74.6%), #bulgari (+63.3%). The generic #fy (+68.8%) is a platform tag, not a lane.`,
        ],
        caveat:
          `Richard Mille's sample is the least brand-pure in this pull. Its largest cluster is explicitly shared - "Richard Mille and Jacob & Co." (449 posts) - its second is "Bulgari Octo Finissimo" (181 posts) with no RM content at all, and its two biggest posts (20.4M and 15.7M views, 38% of its total reach) are Jacob & Co. Bugatti Chiron pieces. Only the 92-post celebrity cluster is unambiguously RM. It also returned three clusters where every rival returned five. The 36.1% is correct arithmetic on what the query matched; it is not 36.1% of attention on Richard Mille.`,
      },
      omega: {
        headline:
          `#4 at 12.3% with the most diversified catalog coverage of the five - and the quietest audience: 2.18 comments per post.`,
        drivers: [
          `12.3% share of voice on 34.2M views and 1.30M likes, fourth. Its 3.81% like rate sits mid-pack, ahead of Rolex and Patek.`,
          `Breadth is its real asset. Four distinct model families surface in five clusters - Seamaster Dive/GMT and 007 (194 posts), Speedmaster Snoopy and Moonshine Gold (170), Speedmaster Professional photography (110), Constellation ladies (97) and vintage collectors (96) - against AP's single Royal Oak and Patek's single Nautilus.`,
          `Story-led product travels best for it: the 007 "On Her Majesty's Secret Service" 50th-anniversary box set ran 2.65M views at a 6.64% like rate, its strongest conversion. Omega is also the most Reddit-weighted house here (426 of 1,151 records, 37%).`,
        ],
        counters: [
          `Omega is the easiest house to out-talk. 2,506 total comments and 2.18 per post are the lowest in the set - roughly half AP's 4.42 - so conversation-led formats take share off it cheaply.`,
          `It barely gets shared either (2.11 per million views, second-worst). Between comments and shares it forfeits both high-weight terms of the score, which is why breadth isn't translating into rank.`,
          `Its whitespace is regional and format-coded - #goldwatch (+81.3%), #notts / #nottingham (both +74.5%), #watchesoftiktok (+57.4%). The Nottingham dealer geography is a specific, claimable opening.`,
        ],
        caveat:
          `Omega's third "top post" is the same "Jewelry Boxes Love Up to 25% Off" shopping ad that appears in Patek's list - 1.7M views on 246 likes (0.01%), about 5% of Omega's total sampled views contributing essentially no engagement. Its genuine top-content picture is the two posts above it.`,
      },
    },
  },

  // A topic with nothing to customize needs no entry here - it renders entirely
  // from DEFAULT_CONTENT with auto-generated playbooks. To hand-write just the
  // playbooks (the one genuinely per-subject bit), override only that key:
  //
  //   "my-topic": {
  //     playbooks: {
  //       "subject-id": { headline: "...", drivers: ["..."], counters: ["..."], caveat: null },
  //     },
  //   },
};
