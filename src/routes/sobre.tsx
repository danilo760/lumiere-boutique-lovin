import { createFileRoute, Link } from "@tanstack/react-router";
import { sobreImage, unboxingImage } from "@/lib/products";
import { trust } from "@/lib/content";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a marca — Lumière Reborn" },
      {
        name: "description",
        content:
          "Um ateliê brasileiro que faz bebês reborn à mão, uma por vez, com pintura em camadas e acabamento artesanal.",
      },
      { property: "og:title", content: "Sobre a marca — Lumière Reborn" },
      {
        property: "og:description",
        content: "Conheça o ateliê por trás das bebês reborn da Lumière Reborn.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="surface-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="eyebrow">Sobre a marca</p>
            <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
              Um ateliê, muitos primeiros abraços
            </h1>
            <div className="gold-rule mt-5" />
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                A Lumière Reborn começou numa mesa de jantar, com um kit de vinil, pincéis de pelo
                curto e a vontade de fazer uma bebê que parecesse de verdade. A primeira levou três
                semanas. A centésima também.
              </p>
              <p>
                Hoje somos um ateliê pequeno no Brasil, e continuamos fazendo uma bebê por vez.
                Pintamos em camadas finas, esperamos secar, pintamos de novo. Implantamos o cabelo
                fio a fio. Pesamos o corpinho até ele ficar com o peso certo de colo.
              </p>
              <p>
                Nosso nome vem de <em>lumière</em>, luz. É o que a gente vê no rosto de quem abre a
                caixa.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={sobreImage}
              alt="Artesã pintando o rosto de uma bebê reborn com pincel fino"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <header className="max-w-xl">
          <p className="eyebrow">Como fazemos</p>
          <h2 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
            Do vinil ao primeiro colo
          </h2>
          <div className="gold-rule mt-5" />
        </header>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Pele", text: "De 12 a 20 camadas de tinta atóxica, com veias, rubor e manchinhas." },
            { step: "02", title: "Olhar", text: "Olhos de acrílico ou pálpebras modeladas para as bebês dormindo, com cílios fio a fio." },
            { step: "03", title: "Cabelo", text: "Implantado fio a fio com agulha, do jeito que nasce um cabelo de bebê." },
            { step: "04", title: "Peso", text: "Microesferas distribuídas até o corpinho ceder no colo como um bebê real." },
          ].map((s) => (
            <li key={s.step} className="rounded-4xl bg-card p-6 shadow-soft">
              <span className="font-serif text-3xl text-gold">{s.step}</span>
              <h3 className="mt-3 font-serif text-xl text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="surface-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={unboxingImage}
              alt="Caixa-presente da Lumière Reborn aberta com bebê reborn e cartão"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Confiança</p>
            <h2 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
              Nada de letra miúda
            </h2>
            <div className="gold-rule mt-5" />
            <ul className="mt-6 space-y-5">
              {trust.map((t) => (
                <li key={t.title}>
                  <h3 className="font-serif text-xl text-primary">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/colecao">Ver a coleção</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
