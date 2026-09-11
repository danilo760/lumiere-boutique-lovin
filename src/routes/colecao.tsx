import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/colecao")({
  head: () => ({
    meta: [
      { title: "Coleção de bebês reborn — Lumière Reborn" },
      {
        name: "description",
        content:
          "Luna, Aurora, Alice, Sofia e Helena: cinco bebês reborn feitas à mão, de R$99,90 a R$199,90, com Pix e 6x sem juros.",
      },
      { property: "og:title", content: "Coleção de bebês reborn — Lumière Reborn" },
      {
        property: "og:description",
        content: "Conheça as cinco bebês do ateliê Lumière Reborn e escolha a sua.",
      },
    ],
  }),
  component: Colecao,
});

function Colecao() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
      <header className="max-w-xl">
        <p className="eyebrow">A coleção</p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">Conheça as Bebês</h1>
        <div className="gold-rule mt-5" />
        <p className="mt-5 text-muted-foreground">
          Todas feitas à mão, com pintura em camadas e peso realista. Toque em uma bebê para ver a
          galeria, o que acompanha e os cuidados.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 2} />
        ))}
      </div>
    </section>
  );
}
