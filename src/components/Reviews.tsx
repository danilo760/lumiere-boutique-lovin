import { Star } from "lucide-react";
import { reviews } from "@/lib/content";

export function Reviews({ limit }: { limit?: number }) {
  const list = limit ? reviews.slice(0, limit) : reviews;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((r) => (
          <figure key={r.name} className="rounded-4xl bg-card p-6 shadow-soft">
            <div className="flex gap-0.5" aria-label={`${r.stars} de 5 estrelas`}>
              {Array.from({ length: r.stars }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-4 font-serif text-lg leading-snug text-primary">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-4 text-xs text-muted-foreground">
              {r.name} · {r.city} · comprou a {r.product}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        Depoimentos de demonstração para esta prévia privada. Serão substituídos pelas avaliações
        reais das clientes antes da loja ir ao ar.
      </p>
    </div>
  );
}
