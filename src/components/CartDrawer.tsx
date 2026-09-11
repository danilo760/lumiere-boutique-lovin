import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { brl, pixPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

export function CartDrawer() {
  const { open, setOpen, items, subtotal, setQty, remove } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-[92vw] max-w-md flex-col bg-cream">
        <SheetTitle className="font-serif text-2xl text-primary">Seu carrinho</SheetTitle>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              Seu carrinho ainda está vazinho. Conheça as bebês da coleção.
            </p>
            <Button variant="hero" onClick={() => setOpen(false)} asChild>
              <Link to="/colecao">Ver a coleção</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="-mx-1 flex-1 space-y-3 overflow-y-auto px-1">
              {items.map(({ product, qty }) => (
                <li
                  key={product.slug}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-3xl bg-card p-3 shadow-soft"
                >
                  <img
                    src={product.gallery[0]}
                    alt={`Bebê reborn ${product.name}`}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                  />
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-serif text-lg text-primary">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.badge}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.slug)}
                        aria-label={`Remover ${product.name} do carrinho`}
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-secondary"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 rounded-full border border-border">
                        <button
                          type="button"
                          onClick={() => setQty(product.slug, qty - 1)}
                          aria-label={`Diminuir quantidade de ${product.name}`}
                          className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-6 text-center text-sm">{qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(product.slug, qty + 1)}
                          aria-label={`Aumentar quantidade de ${product.name}`}
                          className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm text-primary">{brl(product.price * qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-primary">{brl(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {brl(pixPrice(subtotal))} no Pix (5% de desconto) · frete calculado no checkout
              </p>
              <Button variant="hero" size="lg" className="w-full" onClick={() => setOpen(false)} asChild>
                <Link to="/checkout">Finalizar compra</Link>
              </Button>
              <Button variant="quiet" className="w-full" onClick={() => setOpen(false)}>
                Continuar olhando
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
