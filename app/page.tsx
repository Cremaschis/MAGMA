import { SectionTitle } from "@/components/SectionTitle";

const benefits = ["100mg cafeína", "0 calorías", "sin azúcar", "sin nicotina", "sin shaker, sin lata, sin café"];
const useCases = [
  { title: "Gym", copy: "Activá foco antes de levantar pesado. Sin cargar botellas ni latas." },
  { title: "Estudio", copy: "Subí una marcha para rendir en parciales y sesiones largas." },
  { title: "Trabajo", copy: "Mantené claridad mental en calls, entregas y días intensos." },
  { title: "Gaming", copy: "Reflejos despiertos para rankeds y maratones nocturnas." },
  { title: "Manejar / viaje", copy: "Energía portátil y discreta para ruta, aeropuerto o micro." }
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-magma-500/50 bg-black p-6 shadow-lava backdrop-blur sm:p-10 lg:min-h-[650px]">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(255,92,53,0.34),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(242,72,34,0.22),transparent_28%),linear-gradient(135deg,rgba(12,12,14,0.96),rgba(8,8,10,0.86)_48%,rgba(31,6,2,0.92))]" />
        <div className="absolute left-[-12%] top-[-18%] -z-10 h-80 w-80 rounded-full bg-magma-500/30 blur-3xl" />
        <div className="absolute bottom-[-28%] right-[-10%] -z-10 h-[28rem] w-[28rem] rounded-full bg-magma-400/20 blur-3xl" />
        <div className="hero-lava-vein absolute inset-x-0 bottom-0 -z-10 h-32 opacity-80" />

        <div className="grid min-h-[560px] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-magma-400/40 bg-magma-500/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.28em] text-magma-50 shadow-[0_0_28px_rgba(242,72,34,0.25)]">
              <span className="h-2 w-2 rounded-full bg-magma-400 shadow-[0_0_18px_#ff5c35]" />
              Entrá en Modo Magma
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
              Energía brutal. <span className="block bg-gradient-to-r from-magma-50 via-magma-400 to-magma-700 bg-clip-text text-transparent drop-shadow-[0_0_26px_rgba(255,92,53,0.35)]">Foco instantáneo.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-zinc-200 sm:text-xl">
              100mg de cafeína en pouch para prender tu ritual antes del gym, el estudio, el laburo o la noche. Sin azúcar, sin calorías, sin nicotina: solo momentum.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="group rounded-2xl bg-gradient-to-r from-magma-500 via-magma-400 to-magma-500 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_0_34px_rgba(242,72,34,0.55)] transition hover:scale-[1.02] hover:shadow-[0_0_54px_rgba(255,92,53,0.8)]">
                Activar Modo Magma
                <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
              </button>
              <button className="rounded-2xl border border-magma-400/40 bg-white/[0.04] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-zinc-100 transition hover:border-magma-400 hover:bg-magma-500/10 hover:text-white">Ver el ritual</button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
              {["Gym", "Focus", "Night grind"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-3 text-xs font-black uppercase tracking-[0.18em] text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">{item}</div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <div className="absolute right-0 top-2 h-[78%] w-[72%] overflow-hidden rounded-[2rem] border border-white/10 bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85')] bg-cover bg-center shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full border border-magma-400/35 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-magma-50 backdrop-blur">Pre-gym ritual</div>
            </div>
            <div className="absolute bottom-6 left-0 h-[52%] w-[58%] overflow-hidden rounded-[1.75rem] border border-magma-400/25 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85')] bg-cover bg-center shadow-[0_30px_80px_rgba(242,72,34,0.16)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/45 to-magma-500/15" />
              <div className="absolute bottom-4 left-4 text-3xl font-black uppercase tracking-[-0.06em] text-white">Deep<br />Focus</div>
            </div>
            <div className="absolute left-[42%] top-[36%] h-36 w-36 rounded-full border border-magma-400/50 bg-magma-500/20 blur-sm shadow-[0_0_70px_rgba(255,92,53,0.8)]" />
            <div className="absolute left-[48%] top-[41%] flex h-24 w-24 items-center justify-center rounded-full border border-magma-50/30 bg-black/70 text-center text-[0.62rem] font-black uppercase tracking-[0.2em] text-magma-50 shadow-[0_0_45px_rgba(255,92,53,0.7)] backdrop-blur">100mg<br />caffeine</div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle eyebrow="Beneficios" title="Ritual de rendimiento sin fricción." />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {benefits.map((item) => (
            <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm font-semibold text-zinc-100">{item}</div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle eyebrow="Use cases" title="Hecho para cuando no podés bajar el ritmo." />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h3 className="text-xl font-bold text-magma-400">{useCase.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{useCase.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
        <SectionTitle eyebrow="Comparativa" title="MAGMA vs alternativas" />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="text-zinc-400">
              <tr>
                <th className="pb-3">Producto</th><th className="pb-3">Portabilidad</th><th className="pb-3">Azúcar</th><th className="pb-3">Preparación</th><th className="pb-3">Calorías</th><th className="pb-3">Discreción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {[ ["MAGMA", "Alta", "No", "Ninguna", "0", "Alta"], ["Café", "Media", "Opcional", "Sí", "Bajas", "Media"], ["Energizante", "Media", "Sí", "Ninguna", "Altas", "Baja"], ["Preworkout", "Baja", "Opcional", "Sí", "Variable", "Baja"] ].map((row) => (
                <tr key={row[0]} className={row[0] === "MAGMA" ? "bg-magma-500/10" : ""}>{row.map((cell) => <td key={cell} className="py-3 pr-4">{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-magma-500/30 bg-gradient-to-br from-zinc-900 to-magma-900/40 p-6 sm:p-8">
        <SectionTitle eyebrow="Ritual" title="Ponete uno. Activá Modo Magma." />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["1. Abrí", "2. Colocá", "3. Rendí"].map((step) => <div key={step} className="rounded-2xl border border-zinc-800 bg-black/30 p-5 text-lg font-bold">{step}</div>)}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle eyebrow="Social proof" title="Lo que se comenta en TikTok" subtitle="Cards placeholder para sumar UGC, reviews de creators y testimonios reales." />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Review TikTok", "Video creator", "Testimonio cliente"].map((card) => <div key={card} className="aspect-[4/5] rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/40 p-4 text-sm text-zinc-400">{card}</div>)}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-magma-400/40 bg-zinc-900/80 p-6 sm:p-8">
        <SectionTitle eyebrow="Oferta lanzamiento" title="Starter Pack" subtitle="Cherry + Menta · precio lanzamiento · envío rápido · stock inmediato." />
        <button className="mt-6 rounded-xl bg-magma-500 px-6 py-3 text-sm font-black uppercase tracking-wide hover:bg-magma-400">Quiero mi Starter Pack</button>
      </section>

      <section className="mt-14">
        <SectionTitle eyebrow="FAQ" title="Preguntas frecuentes" />
        <div className="mt-6 space-y-3">
          {[ ["¿Qué es MAGMA?", "Un pouch de cafeína sin nicotina, práctico para usar cuando necesitás foco y energía."], ["¿Cuánta cafeína tiene?", "Cada pouch contiene 100mg de cafeína."], ["¿Cómo se usa?", "Abrí, colocá el pouch y seguí con tu rutina. Sin preparación."], ["¿Cuánto dura el efecto?", "Puede variar según la persona y tolerancia a la cafeína."], ["¿Tiene nicotina?", "No, MAGMA es nicotina-free."], ["¿Quiénes deberían evitarlo?", "No recomendado para menores, embarazadas o personas sensibles a la cafeína."] ].map(([q, a]) => (
            <details key={q} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="mt-2 text-sm text-zinc-300">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-magma-500 bg-magma-500/15 p-8 text-center">
        <h2 className="text-3xl font-black">Probá Magma antes de que todos hablen de esto.</h2>
        <button className="mt-5 rounded-xl bg-magma-500 px-8 py-3 text-sm font-black uppercase tracking-wide hover:bg-magma-400">Comprar ahora</button>
        <p className="mt-4 text-xs text-zinc-300">Advertencia: contiene cafeína. No recomendado para menores, personas embarazadas o sensibles a la cafeína.</p>
      </section>
    </main>
  );
}
