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
    eyebrow: "{brand} · Social Intelligence · Trailing 30 Days",
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
      eyebrow: "{brand} · Social Intelligence · Trailing 30 Days",
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
          "New #1 by volume - but a single 8.6M-view video is over a quarter of that number.",
        drivers: [
          `A single TikTok clip - a "his & hers" couples Datejust set, styling content with no dealer pitch - has 8.6M views and is 26% of Rolex's entire engagement score on its own. That's the highest single-post concentration of any of the five houses.`,
          `Strip that post out and the base underneath is genuinely broad: heritage/sizing content (225 posts), professional dive/GMT watches (195), vintage Datejust content (180) - real distribution, not a one-post fluke.`,
          `Whitespace signals point to authentication and trading content - #auth and #deals each carry a +147% engagement premium, an appetite Rolex isn't feeding directly yet.`,
        ],
        counters: [
          `Don't treat Rolex's #1 ranking as untouchable - remove that one video and AP and Richard Mille are both within range.`,
          `The #auth / #deals whitespace is real and open: a "real vs. fake" or price-transparency series is cheap to produce and currently unclaimed by any of the five.`,
          `The "couples set" styling format is copyable and clearly resonated - worth testing a version against your own catalog.`,
        ],
        caveat:
          `26% of Rolex's entire 30-day score sits in one video - the single highest one-post concentration measured here. A useful reminder that winning the pull and having broad brand momentum aren't always the same thing.`,
      },
      "patek-philippe": {
        headline:
          "Still the smallest footprint of the five - and its own audience is openly comparing it to Hublot.",
        drivers: [
          `Lowest post volume (348) and lowest total score of the five - though the most evenly distributed base (14% top-1, 26% top-3 concentration), meaning small but broad, not fragile.`,
          `Its two biggest clusters are both value-driven: "steel vs. gold Nautilus" pricing debate (438 posts) and "elitist complications for the ultra-wealthy" (373 posts).`,
          `The tag "hublot" carries a +81% engagement premium inside Patek content - its own audience is actively cross-shopping and comparing it against a rival brand in the comments.`,
        ],
        counters: [
          `Patek is the most exposed house here on raw volume - simply publishing more, in its existing formats, can close real ground.`,
          `The Hublot cross-mention is a live comparison already happening in Patek's own comments - a direct "why collectors choose X" piece would meet that conversation where it lives.`,
          `Its "5711/1R vs. 5712R"-style direct comparison format is cheap to replicate against your own references.`,
        ],
        caveat: null,
      },
      "audemars-piguet": {
        headline:
          "The broadest, most evenly distributed engagement of the five - and still the only house owning the skeleton/openwork format.",
        drivers: [
          `Highest post volume of the four traditional houses (482) with the lowest single-post concentration measured (10% top-1) - this is real, distributed momentum, not a viral fluke.`,
          `A 2.7M-view Royal Oak Chronograph unboxing is AP's single biggest post, but its content spans skeleton/openwork craftsmanship (339 posts), high-complication showcases (249) and heritage/anniversary content (202) simultaneously.`,
          `Supercar-crossover tags - #lamborghini, #mclaren, #luxurycar - carry a +150% premium inside AP's audience but are almost entirely absent from AP's actual output; regional tags like #toronto run even higher (+161%).`,
        ],
        counters: [
          `AP's breadth is the hardest thing to copy quickly - it's not one format working, it's four running at once. Pick the most feasible one for you (skeleton/openwork carries the highest premium and is the least contested) and go deep rather than trying to match all four.`,
          `The supercar-lifestyle crossover is a wide-open lane - no house here produces that content natively yet, and AP's own audience data shows the appetite already exists.`,
          `Match its unboxing format specifically - it's AP's single biggest post and cheap for any house to produce.`,
        ],
        caveat: null,
      },
      "richard-mille": {
        headline:
          "Still near the top by raw volume - but the mechanism is now clear: three separate celebrity moments, not two recycled clips.",
        drivers: [
          `A deeper pull surfaces three independent celebrity posts: J Balvin wearing a one-of-one Sapphire Blue Tourbillon (6.2M views, 22% of RM's entire score alone), the Stallone RM 52-01 auction story (2.6M views, 8.7%), and someone's RM UP-01 Ferrari (2.5M views, 8.5%). Add a Drake collection feature and a dealer's repeat-posted "Bubba Watson" piece and six posts alone account for roughly 45% of RM's entire 30-day number.`,
          `None of these are RM-owned content - they're third-party creators, a UK dealer, and an auction story. RM's apparent lead is earned/borrowed media, not a repeatable campaign.`,
          `Its comment-to-post rate (0.42) is still below Rolex, Omega and AP - high reach, comparatively little real discussion attached to it.`,
        ],
        counters: [
          `Don't chase the raw number - study the mechanism instead. RM is winning because high-net-worth individuals and celebrities are organically showing off pieces on their own accounts. That's seedable through relationships and gifting, but it isn't buyable at scale the way a media plan is.`,
          `London dealer-district tags (#kinzylondon, #hattongarden, #londonwatches) carry a +161% premium and are TikTok-native - a real regional-dealer content playbook worth studying regardless of which house you run.`,
          `If you're RM: this is fragile. Four different people's personal choices are doing your brand's heavy lifting this period. A quiet month without a celebrity moment would look very different.`,
        ],
        caveat:
          `Roughly 45% of Richard Mille's entire 30-day score sits in just 6 of 330 posts, all third-party or dealer-driven, not RM-owned content. Treat its position near the top as a description of a lucky period, not a strategy to copy directly.`,
      },
      omega: {
        headline:
          "Still the conversation leader - and two new posts confirm pop-culture reveals and colorway drops both reliably work.",
        drivers: [
          `Highest comments-per-post of the five (1.77), even after tripling the sample - Omega is still winning real discussion, not just views.`,
          `A Bond-anniversary-tied presentation-box reveal (2.65M views) and the Moonswatch "Moonshine Gold" colorway drop (2.24M views) are now its two biggest posts - heritage storytelling and limited colorways both clearly convert.`,
          `Its two largest content clusters - Diver 300M heritage (458 posts) and "five-watch collection" curation content (421 posts) - are both evergreen, creator-friendly formats any house could run.`,
        ],
        counters: [
          `The "five-watch collection curation" format (421 posts) is a low-cost, endlessly repeatable creator brief - worth testing against your own catalog regardless of which house you run.`,
          `Pop-culture and heritage tie-ins keep working for Omega across two separate posts here - it's not a one-off, it's a repeatable mechanic worth studying.`,
          `Its comment lead held up under 3x the sample size - worth a direct audit of what specifically prompts people to comment, likely the curation format's built-in invitation to share an opinion.`,
        ],
        caveat: null,
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
