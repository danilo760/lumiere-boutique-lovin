import { Link } from "@tanstack/react-router";
import { brl, installment, pixPrice, type Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { add } = useCart();

  return (
    <article className="group overflow-hidden rounded-4xl bg-card shadow-soft">
      <Link
        to="/produto/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-square overflow-hidden"
      >
        <img
          src={product.gallery[0]}
          alt={`Bebê reborn ${product.name} — ${product.badge}`}
          loading={priority ? "eager" : "lazy"}
          width={1200}
          height={1200}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-cream/95 px-3 py-1 text-[0.68rem] tracking-[0.16em] text-primary uppercase">
          {product.badge}
        </span>
      </Link>

      <div className="space-y-3 p-5">
        <div>
          <h3 className="font-serif text-2xl text-primary">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
        </div>
        <div>
          <p className="font-serif text-2xl text-primary">{brl(product.price)}</p>
          <p className="text-xs text-muted-foreground">
            {brl(pixPrice(product.price))} no Pix · ou 6x de {brl(installment(product.price))} sem
            juros
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="hero" className="w-full sm:flex-1" asChild>
            <Link to="/produto/$slug" params={{ slug: product.slug }}>
              Ver a bebê
            </Link>
          </Button>
          <Button
            variant="quiet"
            className="w-full sm:flex-1"
            onClick={() => add(product.slug)}
            aria-label={`Adicionar ${product.name} ao carrinho`}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
}
