import { Download, ExternalLink } from "lucide-react";
import { evidence } from "@/lib/data";

export default function Evidence() {
  return (
    <section id="evidence" className="section-pad max-content border-b border-border py-24 sm:py-32">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Applied AI Evidence</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">{evidence.window}</h2>
        </div>
        <a
          href={evidence.pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-wide text-base transition-transform hover:-translate-y-0.5 hover:brightness-110"
        >
          <Download size={14} />
          Evidence portfolio (PDF)
        </a>
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-dim sm:text-base">{evidence.lead}</p>

      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
        {evidence.stats.map((s) => (
          <div key={s.label} className="bg-surface p-6">
            <p className="font-display text-3xl font-semibold text-signal">{s.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink-faint">{s.label}</p>
          </div>
        ))}
      </div>

      <a
        href={evidence.timeline}
        target="_blank"
        rel="noreferrer"
        className="group mt-10 block overflow-hidden rounded-2xl border border-border bg-white transition-colors hover:border-node-dim"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={evidence.timeline}
          alt="Horizontal timeline of AI study, projects, research, training and professional data work from November 2024 to November 2026"
          loading="lazy"
          className="h-auto w-full"
        />
      </a>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {evidence.charts.map((c) => (
          <a
            key={c.src}
            href={c.src}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-node-dim"
          >
            <div className="flex h-56 items-center justify-center overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.alt} loading="lazy" className="max-h-full w-auto object-contain" />
            </div>
            <span className="flex items-center justify-between p-4 font-mono text-[11px] uppercase tracking-wide text-ink-dim group-hover:text-node">
              {c.title}
              <ExternalLink size={12} />
            </span>
          </a>
        ))}
      </div>

      <ul className="mt-8 space-y-1.5">
        {evidence.notes.map((n) => (
          <li key={n} className="flex gap-2 text-sm leading-relaxed text-ink-faint">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-node-dim" />
            {n}
          </li>
        ))}
      </ul>
    </section>
  );
}
