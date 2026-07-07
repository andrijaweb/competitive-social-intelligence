/**
 * Shared domain types for the dashboard.
 *
 * An `Entity` is one subject being measured (here, a watch house). The dataset
 * in `lib/data.ts` is an array of these, and every section of the page is
 * rendered from that array - swap the data and the whole dashboard follows.
 */

export type Platform = "tiktok" | "instagram" | "x" | "reddit" | "pinterest";

/** Raw, un-aggregated counts pulled from the social graph. */
export interface EntityMetrics {
  /** Number of on-topic posts in the sample. */
  records: number;
  views: number;
  likes: number;
  comments: number;
  shares: number;
}

/** An auto-clustered content theme within an entity's coverage. */
export interface Narrative {
  label: string;
  description: string;
  /** Posts that fell into this cluster. */
  count: number;
}

/** A high-premium, low-saturation tag - the "white space" worth claiming. */
export interface WhitespaceTag {
  tag: string;
  /** Engagement premium vs. the entity's baseline, in percent. */
  premiumPct: number;
}

/** A single top-performing post, paraphrased (not a verbatim caption). */
export interface TopPost {
  platform: Platform;
  description: string;
  views: number;
  likes: number;
}

/** The editorial read for one entity: what is working and how to respond. */
export interface Playbook {
  headline: string;
  /** What is driving the entity's performance. */
  drivers: string[];
  /** Counter-moves a rival can run. */
  counters: string[];
  /** Optional data caveat surfaced when a result leans on a small sample. */
  caveat: string | null;
}

export interface Entity {
  /** Stable slug used for keys, DOM ids and selection state. */
  id: string;
  name: string;
  /** Accent color for this entity across charts, cards and legends. */
  color: string;
  /** Search term used by the live insights refresh. Defaults to `name`. */
  query?: string;
  metrics: EntityMetrics;
  /** Post counts per platform. */
  platforms: Record<Platform, number>;
  /** Weighted engagement per week, aligned to `WEEK_LABELS` in `lib/data.ts`. */
  weekly: number[];
  narratives: Narrative[];
  whitespace: WhitespaceTag[];
  posts: TopPost[];
  playbook: Playbook;
}

/** The shaped insights for one entity, returned when a live job succeeds. */
export interface InsightsResult {
  narratives: Narrative[];
  whitespace: WhitespaceTag[];
}

/**
 * One poll of a live KINETK job, returned by `POST /api/insights/status`.
 *
 * The browser submits via `/api/insights/start` (which returns a `jobId`) and
 * then polls this shape until the job is no longer `running`. Every request is
 * short - the poll loop lives in the browser, not in a single long-held route.
 */
export type InsightsJobState =
  | { status: "running" }
  | { status: "succeeded"; result: InsightsResult }
  | { status: "failed" };
