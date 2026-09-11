import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL, WhatsIcon } from "./WhatsAppButton";
import { useCart } from "@/lib/cart";
import { brl, products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const nav = [
  { to: "/colecao", label: "Coleção" },
  { to: "/sobre", label: "Sobre a marca" },
  { to: "/faq", label: "Dúvidas" },
] as const;

export function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");

  const results = query.trim()
    ? products.filter((p) =>
        `${p.name} ${p.badge} ${p.tagline}`.toLowerCase().includes(query.trim().toLowerCase()),
      )
    : products;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <div className="flex min-w-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setMenu(true)}
            aria-label="Abrir menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-primary hover:bg-secondary lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden min-w-0 lg:block">
            <Logo />
          </div>
        </div>

        <div className="min-w-0 lg:hidden">
          <Logo compact />
        </div>

        <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Navegação principal">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-1">
          <button
            type="button"
            onClick={() => setSearch(true)}
            aria-label="Buscar bebês"
            className="grid h-10 w-10 place-items-center rounded-full text-primary hover:bg-secondary"
          >
            <Search className="h-5 w-5" />
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full text-primary hover:bg-secondary"
          >
            <WhatsIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Abrir carrinho com ${count} item(ns)`}
            className="relative grid h-10 w-10 place-items-center rounded-full text-primary hover:bg-secondary"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[0.65rem] text-gold-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      <Sheet open={menu} onOpenChange={setMenu}>
        <SheetContent side="left" className="w-[86vw] max-w-sm bg-cream">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <div className="flex flex-col gap-8 pt-2">
            <Logo />
            <nav className="flex flex-col gap-1" aria-label="Menu">
              <Link
                to="/"
                onClick={() => setMenu(false)}
                className="border-b border-border/60 py-3 font-serif text-2xl text-primary"
              >
                Início
              </Link>
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMenu(false)}
                  className="border-b border-border/60 py-3 font-serif text-2xl text-primary"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <Button variant="hero" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Falar com a Lumière
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <Dialog open={search} onOpenChange={setSearch}>
        <DialogContent className="max-w-lg bg-cream">
          <DialogTitle className="font-serif text-2xl text-primary">Buscar bebês</DialogTitle>
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nome, tamanho, característica..."
            aria-label="Buscar bebês"
            className="rounded-full"
          />
          <ul className="max-h-72 space-y-1 overflow-y-auto">
            {results.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/produto/$slug"
                  params={{ slug: p.slug }}
                  onClick={() => {
                    setSearch(false);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 rounded-2xl p-2 hover:bg-blush/50"
                >
                  <img
                    src={p.gallery[0]}
                    alt={`Bebê reborn ${p.name}`}
                    loading="lazy"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-serif text-lg text-primary">{p.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {p.badge} · {brl(p.price)}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
            {results.length === 0 && (
              <li className="p-3 text-sm text-muted-foreground">
                Nenhuma bebê encontrada com esse nome.
              </li>
            )}
          </ul>
          <button
            type="button"
            onClick={() => setSearch(false)}
            className="sr-only"
            aria-label="Fechar busca"
          >
            <X />
          </button>
        </DialogContent>
      </Dialog>
    </header>
  );
}
