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
          `The period's biggest faller - now dead last at 10.1% share, and #5 on every single metric.`,
        drivers: [
          `Last across the board: 10.1% share of voice, and rock-bottom on views (267.8M), likes (36.1M), comments (415K), shares (2.1M) and conversation (138.5 comments/post). Omega (34.3%) now outweighs Rolex more than three to one.`,
          `Its content skews gifting and acquisition over product: "Rolex Gifts And Collections" (86 posts), "First Rolex Purchases" (86, often tied to crypto profits), "Watch Sales And Giveaways" (70), "Yacht-Master auction & invitations" (62) and "Vintage & Gold styles" (61 - Pepsi, Explorer, Batman, GMT).`,
          `Unusually its single biggest post is on-topic - an influencer gifting Rolexes to Mexico players after a bet (19.6M views) - but the rest is bleed-through. Whitespace hands it the strongest open lane in the whole dataset: #insaneluxury (+78.7%), plus timely #wimbledon (+36.9%) and cross-shopping #seiko (+33.1%).`,
        ],
        counters: [
          `Rolex is beatable everywhere this period - last on reach AND conversation - so the opening is category-wide, not a single soft spot.`,
          `Its one genuinely open, high-premium tag, #insaneluxury (+78.7%), is the highest-premium tag in the entire dataset and cheap to test first.`,
          `The timely #wimbledon premium (+36.9%) shows event-tied content lands for its audience - a calendar/event hook is a low-cost way to contest the space Rolex is vacating.`,
        ],
        caveat:
          `Part of Rolex's counted sample isn't Rolex: its "Watch Sales And Giveaways" cluster (70 posts) folds in G-Shock, Fossil and AP, and its #2 post is the same "NOOOOO" clip that also tops AP's and Richard Mille's lists. The last-place finish is real, but a slice of the base is off-brand bleed-through.`,
      },
      "patek-philippe": {
        headline:
          `Fourth on engagement (15.3%) but first on identity - the only house with a genuinely model-rich, on-brand narrative set.`,
        drivers: [
          `15.3% share of voice, #4 - 2.5 points behind AP and 5.2 clear of last-place Rolex. Bottom-half on reach (398.1M views) and conversation (176.5 comments/post, #4). On the raw numbers, a quiet performer.`,
          `But it has the most on-brand, model-specific narrative set of the five, where rivals recycle one icon: "Perpetual Calendar" (41 posts, incl. Zuckerberg's vintage Ref. 1526J), "Patek vs. Audemars comparisons" (37), "Vintage Calatrava" (36), "Aquanaut as investment" (30) and "Grand Complications" (28).`,
          `No viral is carrying it - its top posts are all off-topic (an "Outfit check" clip at 15.7M, a Japanese-actress dress clip at 13.4M) - which makes the steady mid-pack showing more organic than flattered. Whitespace is thin, though: only #davidoffbrothers (+27.5%) and #audemarspiguet (+19%) pay real premium, while its own #pateknautilus (+8.7%) and #vintagepatek (+0.1%) are nearly flat.`,
        ],
        counters: [
          `Patek is the most exposed house on raw reach - no viral props it up - so it closes ground simply by making its already-rich model lanes (Perpetual Calendar, Calatrava, Aquanaut) more breakout-friendly.`,
          `Its strongest owned tag, #pateknautilus, pays almost nothing (+8.7%) - the demand lives in the model content, not the hashtag, so lead with the reference, not the tag.`,
          `The "Patek vs. Audemars" comparison format (37 posts) is a proven, cheap-to-replicate lane - run your own catalog against a named rival.`,
        ],
        caveat: null,
      },
      "audemars-piguet": {
        headline:
          `A steady #3 (17.8%) that quietly ranks #2 on shares - but its own Royal Oak tags are running negative premium.`,
        drivers: [
          `17.8% share of voice, a clear #3 - 4.6 points behind Richard Mille and 2.5 ahead of Patek. Middle of the pack on views (450.4M) and conversation (245.4 comments/post, #3), but #2 of five on shares (4.3M) - a more spread-friendly profile than its rank suggests.`,
          `Content is Royal-Oak-concentrated with a viral hook: "Royal Oak Frosted Gold" (39 posts) and "Rare Royal Oak Editions" (21), plus the "WatchDotFun Tool" cluster (44) - a watch-alter-ego tool doing the rounds and its single biggest theme, barely about AP at all.`,
          `Its whitespace is a warning, not an opportunity: four of five tags carry NEGATIVE engagement premium - #royaloak (-26.5%), #royaloakchronograph (-19.8%), #audemarspiguet (-9.6%) and #vintagewatch (-3.3%). Only #audemarspiguetroyaloak (+25.1%) still pays. AP's core tags are saturated.`,
        ],
        counters: [
          `AP leans on one icon and four of its five core tags are negative-premium, so out-covering it is a matter of range - show model breadth it structurally can't.`,
          `Its single biggest theme (the WatchDotFun tool, 44 posts) is a borrowed viral, not AP content - an owned interactive/tool format is cheap to build and claims that engagement directly.`,
          `The only tag still paying AP a premium is the narrow #audemarspiguetroyaloak (+25.1%); its broad tags are crowded, so a differentiated lane beats competing on #royaloak head-on.`,
        ],
        caveat:
          `AP's biggest post by far - an off-topic "🥹🇦🇷" clip at 43.5M views, the single largest post in the entire dataset - is viral bleed-through, not AP content. Its mid-pack reach is propped up by one unrelated viral; the Royal Oak base underneath is narrower than the raw views suggest.`,
      },
      "richard-mille": {
        headline:
          `Slips to #2 on share of voice (22.4%) but owns the conversation outright - 625.5 comments/post, more than double any other house.`,
        drivers: [
          `22.4% share of voice, a clear #2 behind Omega (34.3%) and 4.6 points ahead of #3 AP. But it runs away with conversation: 1.88M comments (most of any house) and 625.5 comments-per-post - more than double #2 Omega's 278.7 and roughly 4.5x last-place Rolex.`,
          `A celebrity-driven base: "Celebrity Richard Mille Sightings" (40 posts - Kylian Mbappé, Omar Sy), "Luxury Watch Brand Appreciation" (30 - Franck Muller, Hublot) and "Showcasing Richard Mille Watches" (23 - #rm3001, #watchcollector). Its pull runs on famous wrists, not catalog content.`,
          `It converses but doesn't spread - just 2.8M shares (#4, second-lowest) despite the huge comment volume. Its top posts are off-topic bleed-through (a Cristiano Ronaldo retirement rumor at 14.6M, the cross-house "NOOOOO" clip at 12.3M), and its whitespace is cross-brand: #reverso, #jaegerlecoultre and #omarsy all at +57%, pointing at JLC cross-shopping and the Omar Sy association rather than RM-owned tags.`,
        ],
        counters: [
          `RM's engine is celebrity/athlete sightings seeded through third parties - reachable via relationships and gifting, not a media buy. A house with its own celebrity relationships can contest the same lane.`,
          `It converses but doesn't spread (most comments, #4 on shares) - share-optimized formats (clippable, ranking/list content) are exactly where RM structurally underperforms.`,
          `Its highest-premium open tags are competitors' (#jaegerlecoultre, #reverso at +57%) and a celebrity name (#omarsy +57%) - the "luxury watch on a famous wrist" format is unclaimed territory any house can produce.`,
        ],
        caveat:
          `RM's conversation lead is real - 1.88M comments is no artifact - but its share-of-voice reach is padded by off-brand virals: its three biggest posts are a football-retirement rumor and cross-house meme clips, none of them Richard Mille content.`,
      },
      omega: {
        headline:
          `The new runaway #1 - 34.3% share of voice, ~12 points clear, and the only house leading views, likes and shares at once.`,
        drivers: [
          `Dominant on raw engagement: 34.3% share of voice, roughly 12 points clear of #2 Richard Mille (22.4%). It leads views (838.4M, far more than any other house), likes (121.8M) and shares (15.8M - nearly four times the next house). No rival tops more than one of those.`,
          `Its narrative base is genuinely Omega-specific and model-rich - five distinct heritage lanes: "Omega Speedmaster Enthusiasts" (55 posts), "Vintage Omega Constellation" (45) and "Seamaster Aqua Terra" (44), plus broader "Luxury Watch Status Symbol" (63) and "Luxury Watch Collections" (50).`,
          `But its three biggest posts are off-topic viral bleed-through, not Omega content - a Japanese food creator (19.9M views), a "dad effect" family clip (18.2M) and a Messi football clip (17.4M). Its whitespace is entirely Seiko-Presage-coded (#presage, #seikopresage, #6r51 all +66.4%) - an affordable-automatic cross-shopping audience Omega doesn't own.`,
        ],
        counters: [
          `Omega's lead is reach-driven but its flagship posts are bleed-through - study the model content, not the number. It wins on Speedmaster/Seamaster/Constellation depth, so pick a heritage lane it doesn't own and go as deep as it goes.`,
          `It's #1 on reach but only #2 on conversation (278.7 comments/post vs Richard Mille's 625.5) - a reply-bait/debate format is where even the leader is soft.`,
          `The high-premium open tags around its audience are Seiko Presage (#presage, #seikopresage at +66.4%) - an affordable-automatic lane wide open and cheap to test, and one Omega itself isn't claiming.`,
        ],
        caveat:
          `Omega's #1 is genuine on aggregate engagement, but all three of its biggest posts are off-topic virals (a food creator, a family clip, a football clip), so the 838M view count is flattered by bleed-through. The Seiko-Presage whitespace reflects cross-shopping, not Omega-owned demand.`,
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
