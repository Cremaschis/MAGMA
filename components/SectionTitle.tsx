export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.25em] text-magma-400">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-zinc-300">{subtitle}</p> : null}
    </div>
  );
}
