import { brand } from "@/config/brand";

export function Masthead() {
  return (
    <header className="pb-10 pt-14">
      <p className="mb-5.5 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint before:w-6.5 before:border-t before:border-faint before:content-['']">
        {brand.name} · Social Intelligence · Trailing 30 Days
      </p>
      <h1 className="mb-4.5 max-w-205 font-display text-[clamp(34px,5vw,58px)] font-normal leading-[1.04] tracking-[-0.01em]">
        Five houses, one dial.{" "}
        <em className="font-light italic text-accent">
          Who&apos;s actually winning the room -
        </em>{" "}
        and why.
      </h1>
      <p className="max-w-150 text-[16.5px] leading-[1.65] text-muted">
        A cross-platform read on Rolex, Patek Philippe, Audemars Piguet, Richard
        Mille and Omega - built from live TikTok, Instagram, X, Reddit and
        Pinterest activity. Pick your house to see who&apos;s pulling ahead, what
        they&apos;re doing differently, and the counter-move worth running this
        week.
      </p>
    </header>
  );
}
