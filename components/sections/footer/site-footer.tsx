import { brand } from "@/config/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-line pb-17.5 pt-12.5">
      <div className="mb-3.5 flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
        {brand.logo ? (
          // eslint-disable-next-line @next/next/no-img-element -- branding logo can be any asset in public/
          <img src={brand.logo} alt={brand.name} className="h-5 w-auto" />
        ) : (
          <span className="font-display text-[15px] italic text-muted">
            {brand.name}
          </span>
        )}
        <a
          href={`mailto:${brand.contact.email}`}
          className="font-mono text-[11.5px] text-faint transition-colors hover:text-ink"
        >
          {brand.contact.email}
        </a>
        <a
          href={brand.contact.url}
          className="font-mono text-[11.5px] text-faint transition-colors hover:text-ink"
        >
          {brand.contact.url.replace(/^https?:\/\//, "")}
        </a>
      </div>
      <p className="max-w-190 text-[12.5px] leading-[1.75] text-faint">
        Two KINETK pulls feed this page. Engagement metrics (Share of Voice,
        weekly trend, summary stats, top posts) come from the records endpoint -
        1,500 posts requested per house across TikTok, Instagram, X, Reddit and
        Pinterest, trailing 30 days (Jun 1 - Jul 1, 2026), filtered to 1,940
        posts total confirmed on-topic by keyword relevance. Off-topic viral
        bleed-through common in broad social pulls (meme audio, unrelated
        trending clips) was removed before scoring. Engagement score weights
        views x1, likes x3, comments x5, shares x8. Narratives and white-space
        tags (section 06) come from the insights endpoint over the entire corpus
        rather than a 30-day window, so that section reflects all-time content
        and can be refreshed live via the button above. The weekly trend chart
        uses only posts with a recoverable publish date (a minority of the
        sample); Share of Voice and summary metrics use the full filtered
        sample. This is a directional read on a fixed sample, not a certified
        brand-tracking metric.
      </p>
    </footer>
  );
}
