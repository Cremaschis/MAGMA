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
      <section className="rounded-3xl border border-magma-500/40 bg-zinc-900/70 p-6 shadow-lava backdrop-blur sm:p-10">
        <p className="mb-4 inline-block rounded-full border border-magma-400/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-magma-400">Entrá en Modo Magma</p>
        <h1 className="text-4xl font-black leading-tight sm:text-6xl">Energía en el bolsillo. Foco en segundos.</h1>
        <p className="mt-5 max-w-2xl text-zinc-300 sm:text-lg">100mg de cafeína en pouch. Sin azúcar, sin calorías, sin nicotina. Para gym, estudio, laburo y noches largas.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-xl bg-magma-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-magma-400">Comprar ahora</button>
          <button className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-100 transition hover:border-magma-400">Ver cómo funciona</button>
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
