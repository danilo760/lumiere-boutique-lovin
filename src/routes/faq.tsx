import { createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/FaqList";
import { cuidados, trocas } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Dúvidas frequentes, cuidados e trocas — Lumière Reborn" },
      {
        name: "description",
        content:
          "Materiais, prazos, pagamento, cuidados com a bebê reborn e política de trocas e devoluções da Lumière Reborn.",
      },
      { property: "og:title", content: "Dúvidas frequentes — Lumière Reborn" },
      {
        property: "og:description",
        content: "Tudo que costumam perguntar antes de escolher uma bebê reborn.",
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Dúvidas</p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">Perguntas frequentes</h1>
        <p className="mt-5 text-muted-foreground">
          Se ficar qualquer dúvida depois de ler, chama no WhatsApp. Respondemos de segunda a
          sábado.
        </p>
      </header>

      <div className="mt-12">
        <FaqList />
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
        <div id="cuidados" className="rounded-4xl bg-card p-7 shadow-soft">
          <h2 className="font-serif text-2xl text-primary">Cuidados</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {cuidados.map((c) => (
              <li key={c}>· {c}</li>
            ))}
          </ul>
        </div>
        <div id="trocas" className="rounded-4xl bg-card p-7 shadow-soft">
          <h2 className="font-serif text-2xl text-primary">Trocas e devoluções</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {trocas.map((t) => (
              <li key={t}>· {t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button variant="hero" size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Falar com a Lumière
          </a>
        </Button>
      </div>
    </section>
  );
}
