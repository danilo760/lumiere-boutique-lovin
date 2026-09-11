import { useState } from "react";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { Check, Truck } from "lucide-react";
import {
  brl,
  cuidados,
  getProduct,
  installment,
  pixPrice,
  products,
  trocas,
} from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reviews } from "@/components/Reviews";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Bebê não encontrada — Lumière Reborn" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — bebê reborn ${product.badge} | Lumière Reborn` },
        { name: "description", content: `${product.tagline} ${brl(product.price)} com Pix e 6x sem juros.` },
        { property: "og:title", content: `${product.name} — Lumière Reborn` },
        { property: "og:description", content: product.tagline },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const buyNow = () => {
    add(product.slug);
    navigate({ to: "/checkout" });
  };

  return (
    <>
      <nav aria-label="Você está em" className="mx-auto max-w-6xl px-4 pt-6 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Início
        </Link>
        <span aria-hidden> / </span>
        <Link to="/colecao" className="hover:text-primary">
          Coleção
        </Link>
        <span aria-hidden> / </span>
        <span className="text-primary">{product.name}</span>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-14 lg:py-12">
        <div>
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={product.gallery[active]}
              alt={`Bebê reborn ${product.name} — foto ${active + 1}`}
              width={1200}
              height={1200}
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 flex gap-3" role="tablist" aria-label="Galeria de fotos">
            {product.gallery.map((img, i) => (
              <button
                key={img}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Ver foto ${i + 1} de ${product.name}`}
                onClick={() => setActive(i)}
                className={`h-20 w-20 overflow-hidden rounded-2xl border-2 transition-colors ${
                  i === active ? "border-gold" : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-blush px-3 py-1 text-[0.68rem] tracking-[0.16em] text-blush-foreground uppercase">
            {product.badge}
          </span>
          <h1 className="mt-4 font-serif text-4xl text-primary sm:text-5xl">{product.name}</h1>
          <p className="mt-3 text-muted-foreground">{product.tagline}</p>

          <div className="mt-7 rounded-4xl bg-card p-6 shadow-soft">
            <p className="font-serif text-4xl text-primary">{brl(product.price)}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {brl(pixPrice(product.price))} no Pix (5% de desconto)
            </p>
            <p className="text-sm text-muted-foreground">
              ou 6x de {brl(installment(product.price))} sem juros no cartão
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Button variant="hero" size="xl" onClick={buyNow}>
                Comprar agora
              </Button>
              <Button variant="quiet" size="lg" onClick={() => add(product.slug)}>
                Adicionar ao carrinho
              </Button>
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Truck className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              Preparo em até 2 dias úteis · frete calculado pelo CEP no checkout
            </p>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-4">
            {product.specs.map((s) => (
              <div key={s.label} className="rounded-3xl border border-border p-4">
                <dt className="eyebrow">{s.label}</dt>
                <dd className="mt-1 text-sm text-primary">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 lg:py-12">
        <Tabs defaultValue="descricao">
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-full bg-secondary p-1">
            <TabsTrigger value="descricao" className="rounded-full">
              Descrição
            </TabsTrigger>
            <TabsTrigger value="acompanha" className="rounded-full">
              O que acompanha
            </TabsTrigger>
            <TabsTrigger value="cuidados" className="rounded-full">
              Cuidados
            </TabsTrigger>
            <TabsTrigger value="trocas" className="rounded-full">
              Trocas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="descricao" className="mt-6 max-w-3xl space-y-4 text-muted-foreground">
            {product.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </TabsContent>

          <TabsContent value="acompanha" className="mt-6 max-w-3xl">
            <ul className="space-y-3">
              {product.includes.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {i}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="cuidados" className="mt-6 max-w-3xl">
            <ul className="space-y-3 text-sm text-muted-foreground">
              {cuidados.map((c) => (
                <li key={c}>· {c}</li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="trocas" className="mt-6 max-w-3xl">
            <ul className="space-y-3 text-sm text-muted-foreground">
              {trocas.map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </section>

      <section className="surface-cream">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-serif text-3xl text-primary sm:text-4xl">O que dizem por aí</h2>
          <div className="mt-8">
            <Reviews limit={3} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-serif text-3xl text-primary sm:text-4xl">Outras bebês do ateliê</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
