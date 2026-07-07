/**
 * Dashboard dataset.
 *
 * This is a fixed snapshot derived from social knowledge-graph pulls over a
 * trailing 30-day window (Jun 1 - Jul 1, 2026). To point the dashboard at your
 * own subjects, replace the `entities` array below - every section renders from
 * it. Only raw counts are stored here; scores and shares are derived in
 * `lib/metrics.ts` so the aggregates can never drift from the counts.
 */

import type { Entity, Platform } from "./types";

/** Week buckets for the weekly-pulse trend chart, oldest first. */
export const WEEK_LABELS = [
  "Jun 1-7",
  "Jun 8-14",
  "Jun 15-21",
  "Jun 22-28",
  "Jun 29-Jul 1",
] as const;

/** Platform display order for the summary stat bars. */
export const PLATFORM_ORDER: Platform[] = [
  "tiktok",
  "instagram",
  "reddit",
  "pinterest",
  "x",
];

/** Accent color per platform, used in the summary breakdown bars. */
export const PLATFORM_COLORS: Record<Platform, string> = {
  tiktok: "#e8e9ea",
  instagram: "#c98fd6",
  reddit: "#ef8a5f",
  pinterest: "#e0526f",
  x: "#8f929e",
};

export const entities: Entity[] = [
  {
    id: "rolex",
    name: "Rolex",
    color: "#cba135",
    metrics: { records: 339, views: 32_637_077, likes: 1_000_289, comments: 269, shares: 373 },
    platforms: { tiktok: 301, instagram: 13, reddit: 5, pinterest: 14, x: 6 },
    weekly: [647, 76_655, 29_762, 10_226, 6_125],
    narratives: [
      {
        label: "Iconic Heritage & 36mm Sizing",
        description:
          "Collectors and writers discuss the brand's historic legacy alongside practical sizing advice for classic 36mm references.",
        count: 225,
      },
      {
        label: "Professional Sea & Air Watches",
        description:
          "Retailers highlight heavy-duty professional models - Submariner Date, Yacht-Master II, GMT-Master II - built for extreme durability.",
        count: 195,
      },
      {
        label: "Vintage Datejust Classics",
        description:
          "Enthusiasts spotlight rare vintage Datejust models, especially classic Sigma dials and 1970s two-tone configurations.",
        count: 180,
      },
      {
        label: "Datejust 41 Modern Releases",
        description:
          "Creators showcase current Datejust 41 models - green ombre dials, fluted bezels - via official pre-owned purchase programs.",
        count: 179,
      },
      {
        label: "Oyster Perpetual 36 Showcases",
        description:
          "Sellers recommend the colorful, technicolor Jubilee-motif Oyster Perpetual 36 as an entry point into the brand.",
        count: 162,
      },
    ],
    whitespace: [
      { tag: "rarerolex", premiumPct: 150.2 },
      { tag: "deals / auth", premiumPct: 146.9 },
      { tag: "rolexlifestyle / water", premiumPct: 134.1 },
      { tag: "hattongarden", premiumPct: 126.9 },
      { tag: "watchreel", premiumPct: 121.5 },
    ],
    posts: [
      {
        platform: "tiktok",
        description:
          'A "his & hers" couples Datejust set - no dealer pitch, pure styling content. Single biggest post of the entire pull.',
        views: 8_623_731,
        likes: 225_767,
      },
      {
        platform: "tiktok",
        description:
          'Boutique in-stock post: Datejust 41 "available in every dial" (Leeds boutique, call-to-book).',
        views: 1_860_464,
        likes: 84_332,
      },
      {
        platform: "tiktok",
        description:
          "Dealer listing for a his-and-hers factory Datejust pair, complete with box and papers.",
        views: 1_480_757,
        likes: 27_944,
      },
    ],
    playbook: {
      headline:
        "New #1 by volume - but a single 8.6M-view video is over a quarter of that number.",
      drivers: [
        'A single TikTok clip - a "his & hers" couples Datejust set, styling content with no dealer pitch - has 8.6M views and is 26% of Rolex\'s entire engagement score on its own. That\'s the highest single-post concentration of any of the five houses.',
        "Strip that post out and the base underneath is genuinely broad: heritage/sizing content (225 posts), professional dive/GMT watches (195), vintage Datejust content (180) - real distribution, not a one-post fluke.",
        "Whitespace signals point to authentication and trading content - #auth and #deals each carry a +147% engagement premium, an appetite Rolex isn't feeding directly yet.",
      ],
      counters: [
        "Don't treat Rolex's #1 ranking as untouchable - remove that one video and AP and Richard Mille are both within range.",
        'The #auth / #deals whitespace is real and open: a "real vs. fake" or price-transparency series is cheap to produce and currently unclaimed by any of the five.',
        'The "couples set" styling format is copyable and clearly resonated - worth testing a version against your own catalog.',
      ],
      caveat:
        "26% of Rolex's entire 30-day score sits in one video - the single highest one-post concentration measured here. A useful reminder that winning the pull and having broad brand momentum aren't always the same thing.",
    },
  },
  {
    id: "patek-philippe",
    name: "Patek Philippe",
    color: "#4c8a6e",
    metrics: { records: 348, views: 11_163_097, likes: 448_470, comments: 149, shares: 952 },
    platforms: { tiktok: 316, instagram: 11, reddit: 0, pinterest: 4, x: 17 },
    weekly: [18_503, 15_520, 1_323, 608_998, 1_332],
    narratives: [
      {
        label: "Steel vs. Gold Nautilus Valuations",
        description:
          "Creators debate market values and the premium pricing of steel sports references like the iconic 5711.",
        count: 438,
      },
      {
        label: "Elitist Complications & Collaborations",
        description:
          "Creators explain why ultra-wealthy buyers favor high-complication annual calendars and rare co-branded dials.",
        count: 373,
      },
      {
        label: "High Horology Masterpieces",
        description:
          "Ultra-complex pieces like the Sky Moon Tourbillon 6002R are showcased to highlight extreme artisanal craft.",
        count: 308,
      },
      {
        label: "Vintage Models & Ellipse Classics",
        description:
          "Classic vintage timepieces - the Golden Ellipse ref. 3738, the 1976 Onyx - draw dedicated collector attention.",
        count: 229,
      },
      {
        label: "Billionaire Wristwear & Status",
        description:
          "Creators debate the watch choices of billionaires and heirs, contrasting sports models with platinum dress watches.",
        count: 102,
      },
    ],
    whitespace: [
      { tag: "myconciergeriee", premiumPct: 111.3 },
      { tag: "patek57111r", premiumPct: 109.0 },
      { tag: "marcgebauer", premiumPct: 87.4 },
      { tag: "edutok", premiumPct: 86.5 },
      { tag: "hublot", premiumPct: 81.2 },
    ],
    posts: [
      {
        platform: "tiktok",
        description:
          "Pure aesthetic-reaction clip on a rose-gold Nautilus - caption is just admiration, nothing else.",
        views: 1_311_740,
        likes: 150_600,
      },
      {
        platform: "tiktok",
        description:
          'Direct comparison bait: 5711/1R vs. 5712R, "which one would you wear?"',
        views: 779_213,
        likes: 30_292,
      },
      {
        platform: "tiktok",
        description:
          'A steel 5711/1A blue-dial Nautilus framed as "the world\'s most beautiful watch."',
        views: 527_421,
        likes: 30_937,
      },
    ],
    playbook: {
      headline:
        "Still the smallest footprint of the five - and its own audience is openly comparing it to Hublot.",
      drivers: [
        "Lowest post volume (348) and lowest total score of the five - though the most evenly distributed base (14% top-1, 26% top-3 concentration), meaning small but broad, not fragile.",
        'Its two biggest clusters are both value-driven: "steel vs. gold Nautilus" pricing debate (438 posts) and "elitist complications for the ultra-wealthy" (373 posts).',
        'The tag "hublot" carries a +81% engagement premium inside Patek content - its own audience is actively cross-shopping and comparing it against a rival brand in the comments.',
      ],
      counters: [
        "Patek is the most exposed house here on raw volume - simply publishing more, in its existing formats, can close real ground.",
        'The Hublot cross-mention is a live comparison already happening in Patek\'s own comments - a direct "why collectors choose X" piece would meet that conversation where it lives.',
        'Its "5711/1R vs. 5712R"-style direct comparison format is cheap to replicate against your own references.',
      ],
      caveat: null,
    },
  },
  {
    id: "audemars-piguet",
    name: "Audemars Piguet",
    color: "#6683f5",
    metrics: { records: 482, views: 26_629_349, likes: 997_733, comments: 385, shares: 505 },
    platforms: { tiktok: 433, instagram: 12, reddit: 19, pinterest: 10, x: 8 },
    weekly: [105_701, 86_880, 16_088, 87_295, 4_122],
    narratives: [
      {
        label: "Skeleton Dials & Frosted Gold",
        description:
          "Bold aesthetics - double balance wheels, rainbow bezels, skeleton dials, frosted rose gold - dominate the conversation.",
        count: 339,
      },
      {
        label: "High Complication Showcase",
        description:
          "Engineering marvels like the Perpetual Calendar and Concept GMT Tourbillon are the focus of dedicated craft content.",
        count: 249,
      },
      {
        label: "Retail Listings & Unboxings",
        description:
          "Sellers and collectors share fresh stock, store locations and unboxing detail for new Royal Oak chronographs.",
        count: 208,
      },
      {
        label: "Brand Heritage & Anniversaries",
        description:
          "The 1972 launch of the steel Royal Oak and its 50th-anniversary editions are a recurring reference point.",
        count: 202,
      },
      {
        label: "Vintage Elegance & Complications",
        description:
          "Rare vintage pieces - the Jules Audemars Extra-Thin, the Disco Volante, yellow gold moonphases - surface regularly.",
        count: 105,
      },
    ],
    whitespace: [
      { tag: "toronto", premiumPct: 160.8 },
      { tag: "lamborghini / mclaren", premiumPct: 150.4 },
      { tag: "luxurycar / cargram", premiumPct: 150.4 },
      { tag: "edutok", premiumPct: 142.6 },
      { tag: "jewelrygram", premiumPct: 150.4 },
    ],
    posts: [
      {
        platform: "tiktok",
        description:
          "Unboxing of a Royal Oak Chronograph 41mm - AP's single biggest post of the pull.",
        views: 2_748_189,
        likes: 102_658,
      },
      {
        platform: "tiktok",
        description:
          'Dealer "new arrival" post: a 2017 Royal Oak 41mm with full box and papers.',
        views: 1_170_122,
        likes: 55_242,
      },
      {
        platform: "tiktok",
        description:
          "Craftsmanship showcase of the Royal Oak Skeleton Openworked ref. 15305ST.",
        views: 1_163_323,
        likes: 29_447,
      },
    ],
    playbook: {
      headline:
        "The broadest, most evenly distributed engagement of the five - and still the only house owning the skeleton/openwork format.",
      drivers: [
        "Highest post volume of the four traditional houses (482) with the lowest single-post concentration measured (10% top-1) - this is real, distributed momentum, not a viral fluke.",
        "A 2.7M-view Royal Oak Chronograph unboxing is AP's single biggest post, but its content spans skeleton/openwork craftsmanship (339 posts), high-complication showcases (249) and heritage/anniversary content (202) simultaneously.",
        "Supercar-crossover tags - #lamborghini, #mclaren, #luxurycar - carry a +150% premium inside AP's audience but are almost entirely absent from AP's actual output; regional tags like #toronto run even higher (+161%).",
      ],
      counters: [
        "AP's breadth is the hardest thing to copy quickly - it's not one format working, it's four running at once. Pick the most feasible one for you (skeleton/openwork carries the highest premium and is the least contested) and go deep rather than trying to match all four.",
        "The supercar-lifestyle crossover is a wide-open lane - no house here produces that content natively yet, and AP's own audience data shows the appetite already exists.",
        "Match its unboxing format specifically - it's AP's single biggest post and cheap for any house to produce.",
      ],
      caveat: null,
    },
  },
  {
    id: "richard-mille",
    name: "Richard Mille",
    color: "#e0525c",
    metrics: { records: 330, views: 29_326_298, likes: 1_020_001, comments: 139, shares: 69 },
    platforms: { tiktok: 321, instagram: 3, reddit: 0, pinterest: 0, x: 6 },
    weekly: [7_665, 47_729, 281_487, 2_137, 14],
    narratives: [
      {
        label: "Limited Edition Technical Chronographs",
        description:
          "Highly complex limited-edition pieces with specialized mechanical complications for motorsport and soccer dominate volume.",
        count: 321,
      },
      {
        label: "High Value Buying & Lifestyle",
        description:
          "Creators discuss the prestige, extreme pricing and security risk of owning multi-hundred-thousand-dollar timepieces.",
        count: 225,
      },
      {
        label: "Celebrity Collections & Collaborations",
        description:
          "Ultra-expensive custom pieces worn by figures like Anant Ambani and Rafael Nadal get dedicated spotlight content.",
        count: 217,
      },
      {
        label: "Secondary Market Value Evaluations",
        description:
          "Creators track resale pricing and technical detail on models endorsed by racing drivers and musicians.",
        count: 96,
      },
      {
        label: "Formula One Driver Associations",
        description:
          "F1 drivers - Lando Norris, Charles Leclerc - wearing RM pieces during championship and podium moments.",
        count: 78,
      },
    ],
    whitespace: [
      { tag: "reklam", premiumPct: 161.2 },
      { tag: "kinzylondon / hattongarden", premiumPct: 160.8 },
      { tag: "londonwatches", premiumPct: 160.8 },
      { tag: "toronto", premiumPct: 132.3 },
      { tag: "relogios", premiumPct: 129.5 },
    ],
    posts: [
      {
        platform: "tiktok",
        description:
          "A musician (J Balvin) shown wearing a one-of-one Sapphire Blue Tourbillon - third-party creator content, not RM-owned.",
        views: 6_161_847,
        likes: 320_238,
      },
      {
        platform: "tiktok",
        description:
          'Third-party retelling of the Stallone RM 52-01 "Tourbillon Skull" auction story.',
        views: 2_601_442,
        likes: 72_043,
      },
      {
        platform: "tiktok",
        description:
          "A creator shown wearing the RM UP-01 Ferrari, noted as a nearly $2M piece.",
        views: 2_460_978,
        likes: 94_715,
      },
    ],
    playbook: {
      headline:
        "Still near the top by raw volume - but the mechanism is now clear: three separate celebrity moments, not two recycled clips.",
      drivers: [
        "A deeper pull surfaces three independent celebrity posts: J Balvin wearing a one-of-one Sapphire Blue Tourbillon (6.2M views, 22% of RM's entire score alone), the Stallone RM 52-01 auction story (2.6M views, 8.7%), and someone's RM UP-01 Ferrari (2.5M views, 8.5%). Add a Drake collection feature and a dealer's repeat-posted \"Bubba Watson\" piece and six posts alone account for roughly 45% of RM's entire 30-day number.",
        "None of these are RM-owned content - they're third-party creators, a UK dealer, and an auction story. RM's apparent lead is earned/borrowed media, not a repeatable campaign.",
        "Its comment-to-post rate (0.42) is still below Rolex, Omega and AP - high reach, comparatively little real discussion attached to it.",
      ],
      counters: [
        "Don't chase the raw number - study the mechanism instead. RM is winning because high-net-worth individuals and celebrities are organically showing off pieces on their own accounts. That's seedable through relationships and gifting, but it isn't buyable at scale the way a media plan is.",
        "London dealer-district tags (#kinzylondon, #hattongarden, #londonwatches) carry a +161% premium and are TikTok-native - a real regional-dealer content playbook worth studying regardless of which house you run.",
        "If you're RM: this is fragile. Four different people's personal choices are doing your brand's heavy lifting this period. A quiet month without a celebrity moment would look very different.",
      ],
      caveat:
        "Roughly 45% of Richard Mille's entire 30-day score sits in just 6 of 330 posts, all third-party or dealer-driven, not RM-owned content. Treat its position near the top as a description of a lucky period, not a strategy to copy directly.",
    },
  },
  {
    id: "omega",
    name: "Omega",
    color: "#34b3ac",
    query: "Omega watches",
    metrics: { records: 441, views: 22_875_064, likes: 1_077_014, comments: 780, shares: 112 },
    platforms: { tiktok: 403, instagram: 15, reddit: 16, pinterest: 1, x: 6 },
    weekly: [184_857, 536_158, 116_467, 21_718, 4_770],
    narratives: [
      {
        label: "Diver 300M Diving Heritage",
        description:
          "Enthusiasts showcase the engineering and robust utility of the Seamaster Diver line, heavily linked to Bond heritage.",
        count: 458,
      },
      {
        label: "Five-Watch Collection Curation",
        description:
          "Creators build and pitch ideal five-watch collections built around classic Omega references for every occasion.",
        count: 421,
      },
      {
        label: "Celebrity & Olympic Ambassadorship",
        description:
          "Daniel Craig, George Clooney and Olympic athletes surface regularly wearing Omega pieces in creator content.",
        count: 48,
      },
      {
        label: "Styling & Maintenance Tips",
        description:
          "Reviews and short episodes cover how to buy, style, care for and verify authenticity of legacy pieces.",
        count: 4,
      },
    ],
    whitespace: [
      { tag: "finehourclub", premiumPct: 101.1 },
      { tag: "sapphiresandwich", premiumPct: 100.2 },
      { tag: "specialedition", premiumPct: 85.3 },
      { tag: "toronto", premiumPct: 85.2 },
      { tag: "edutok", premiumPct: 78.9 },
    ],
    posts: [
      {
        platform: "tiktok",
        description:
          'A Bond-themed presentation box tied to a 007 film anniversary - "if Q gives you a box like that..."',
        views: 2_654_000,
        likes: 176_311,
      },
      {
        platform: "tiktok",
        description:
          'The Moonswatch "Moonshine Gold" colorway drop, styled as a standout addition to the line.',
        views: 2_239_554,
        likes: 63_033,
      },
      {
        platform: "tiktok",
        description:
          'Unboxing of the Speedmaster "Snoopy" edition - box, loupe and case detail.',
        views: 930_459,
        likes: 55_234,
      },
    ],
    playbook: {
      headline:
        "Still the conversation leader - and two new posts confirm pop-culture reveals and colorway drops both reliably work.",
      drivers: [
        "Highest comments-per-post of the five (1.77), even after tripling the sample - Omega is still winning real discussion, not just views.",
        'A Bond-anniversary-tied presentation-box reveal (2.65M views) and the Moonswatch "Moonshine Gold" colorway drop (2.24M views) are now its two biggest posts - heritage storytelling and limited colorways both clearly convert.',
        'Its two largest content clusters - Diver 300M heritage (458 posts) and "five-watch collection" curation content (421 posts) - are both evergreen, creator-friendly formats any house could run.',
      ],
      counters: [
        'The "five-watch collection curation" format (421 posts) is a low-cost, endlessly repeatable creator brief - worth testing against your own catalog regardless of which house you run.',
        "Pop-culture and heritage tie-ins keep working for Omega across two separate posts here - it's not a one-off, it's a repeatable mechanic worth studying.",
        "Its comment lead held up under 3x the sample size - worth a direct audit of what specifically prompts people to comment, likely the curation format's built-in invitation to share an opinion.",
      ],
      caveat: null,
    },
  },
];

/** Look up an entity by its id. */
export function getEntity(id: string): Entity | undefined {
  return entities.find((e) => e.id === id);
}
