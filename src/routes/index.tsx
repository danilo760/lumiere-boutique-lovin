import { createFileRoute, Link } from "@tanstack/react-router";
import { Gift, HandHeart, PackageOpen, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { products, sobreImage, unboxingImage } from "@/lib/products";
import { gifting, trust } from "@/lib/content";
import { ProductCard } from "@/components/ProductCard";
import { Reviews } from "@/components/Reviews";
import { FaqList } from "@/components/FaqList";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Reborn — Um amor que cabe nos braços" },
      {
        name: "description",
        content:
          "Bebês reborn feitas à mão no Brasil, de R$99,90 a R$199,90. Pix com desconto, 6x sem juros e entrega para todo o país.",
      },
      { property: "og:title", content: "Lumière Reborn — Um amor que cabe nos braços" },
      {
        property: "og:description",
        content:
          "Boutique de bebês reborn artesanais. Cinco bebês, cada uma com seu jeito, prontas para chegar em casa.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-10 pb-14 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-16 lg:pb-20">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/70 bg-background px-4 py-1.5 text-[0.68rem] tracking-[0.2em] text-gold-foreground uppercase">
              Especial Dia das Crianças
            </span>
            <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.05] text-primary sm:text-6xl">
              Um amor que cabe nos braços
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Bebês reborn feitas à mão, uma por vez, no nosso ateliê. Pele pintada em camadas,
              cabelo fio a fio e o peso exato de quem acabou de dormir no seu colo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/colecao">Conhecer as Bebês</Link>
              </Button>
              <Button variant="quiet" size="xl" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Tirar uma dúvida
                </a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              A partir de R$ 99,90 · Pix com 5% de desconto · até 6x sem juros
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={hero}
                alt="Mulher segurando no colo uma bebê reborn vestida de tricô rosa"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coleção */}
      <section id="colecao" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <header className="max-w-xl">
          <p className="eyebrow">A coleção</p>
          <h2 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
            Cinco bebês, cinco jeitos de amar
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mt-5 text-muted-foreground">
            Escolha pelo olhar. Quase sempre é uma delas que escolhe você primeiro.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* Sobre a marca */}
      <section className="surface-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={sobreImage}
              alt="Artesã pintando delicadamente o rosto de uma bebê reborn no ateliê"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Sobre a marca</p>
            <h2 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
              Feitas devagar, do jeito antigo
            </h2>
            <div className="gold-rule mt-5" />
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                A Lumière Reborn nasceu de um ateliê pequeno, com pincéis finos, tinta atóxica e
                muita paciência. Cada camada de pintura precisa descansar antes da próxima — não
                existe atalho para uma pele parecer real.
              </p>
              <p>
                Nossas bebês vão para colecionadoras, para mães que querem colo, para avós que
                sentem falta, para crianças que aprendem a cuidar. Nunca perguntamos o motivo. A
                gente só faz com carinho e entrega bem embalado.
              </p>
            </div>
            <Button variant="soft" size="lg" className="mt-8" asChild>
              <Link to="/sobre">Conhecer o ateliê</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dia das Crianças */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="rounded-[2rem] border border-gold/40 bg-card p-8 shadow-soft sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <p className="eyebrow">Especial Dia das Crianças</p>
              <h2 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
                Um presente que continua depois da festa
              </h2>
              <div className="gold-rule mt-5" />
              <p className="mt-5 text-muted-foreground">
                Sem contagem regressiva, sem "últimas unidades". Se você escolher hoje ou na semana
                que vem, a bebê vai ser feita e enviada com o mesmo cuidado. O que muda é só o
                prazo de entrega, e ele está sempre escrito no checkout.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <HandHeart className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  Luna e Alice são as favoritas das crianças a partir de 3 anos.
                </li>
                <li className="flex gap-3">
                  <Gift className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  Embalagem-presente e cartão escrito à mão, sem custo extra.
                </li>
                <li className="flex gap-3">
                  <PackageOpen className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  Preparo em até 2 dias úteis e rastreio enviado por WhatsApp.
                </li>
              </ul>
              <Button variant="gold" size="lg" className="mt-8" asChild>
                <Link to="/colecao">Escolher a bebê</Link>
              </Button>
            </div>

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={unboxingImage}
                alt="Caixa-presente creme com laço dourado aberta, com bebê reborn e cartão dentro"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unboxing */}
      <section className="surface-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <header className="max-w-xl">
            <p className="eyebrow">O momento de abrir</p>
            <h2 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
              A chegada também faz parte
            </h2>
            <div className="gold-rule mt-5" />
          </header>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "A caixa",
                text: "Caixa firme forrada por dentro, com laço de cetim e o nome da bebê na tampa.",
              },
              {
                step: "02",
                title: "O papel seda",
                text: "Camadas de papel blush protegendo a pele pintada durante o transporte.",
              },
              {
                step: "03",
                title: "O cartão",
                text: "Uma mensagem escrita à mão, com o nome de quem vai receber.",
              },
              {
                step: "04",
                title: "O primeiro colo",
                text: "Ela sai da caixa vestida, penteada e pronta para o primeiro abraço.",
              },
            ].map((s) => (
              <li key={s.step} className="rounded-4xl bg-card p-6 shadow-soft">
                <span className="font-serif text-3xl text-gold">{s.step}</span>
                <h3 className="mt-3 font-serif text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Presente */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Para presentear</p>
            <h2 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
              A gente cuida da parte bonita
            </h2>
            <div className="gold-rule mt-5" />
            <ul className="mt-6 space-y-4">
              {gifting.map((g) => (
                <li key={g} className="flex gap-3 text-sm text-muted-foreground">
                  <Gift className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {g}
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Montar um presente comigo
              </a>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trust.map((t) => (
              <div key={t.title} className="rounded-4xl bg-card p-6 shadow-soft">
                <ShieldCheck className="h-5 w-5 text-gold" aria-hidden />
                <h3 className="mt-3 font-serif text-xl text-primary">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="surface-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <header className="max-w-xl">
            <p className="eyebrow">Quem já recebeu</p>
            <h2 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
              Histórias que chegaram de volta
            </h2>
            <div className="gold-rule mt-5" />
          </header>
          <div className="mt-10">
            <Reviews />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <header className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Dúvidas</p>
          <h2 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
            Perguntas que sempre chegam
          </h2>
        </header>
        <div className="mt-10">
          <FaqList limit={6} />
        </div>
        <div className="mt-8 text-center">
          <Button variant="quiet" asChild>
            <Link to="/faq">Ver todas as dúvidas</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
