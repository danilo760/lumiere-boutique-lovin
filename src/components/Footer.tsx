import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { WHATSAPP_URL, WhatsIcon } from "./WhatsAppButton";
import { products } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-cream pb-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-primary">Lumière Reborn</p>
          <p className="mt-2 text-sm text-muted-foreground">Um amor que cabe nos braços.</p>
          <div className="gold-rule mt-5" />
          <p className="mt-5 text-xs text-muted-foreground">
            Ateliê brasileiro de bebês reborn feitas à mão, uma por vez.
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Coleção</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/produto/$slug"
                  params={{ slug: p.slug }}
                  className="text-muted-foreground hover:text-primary"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">A marca</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/sobre" className="text-muted-foreground hover:text-primary">
                Sobre a marca
              </Link>
            </li>
            <li>
              <Link to="/colecao" className="text-muted-foreground hover:text-primary">
                Toda a coleção
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-muted-foreground hover:text-primary">
                Dúvidas frequentes
              </Link>
            </li>
            <li>
              <Link to="/faq" hash="trocas" className="text-muted-foreground hover:text-primary">
                Trocas e devoluções
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Fale com a gente</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <WhatsIcon className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:ola@lumierereborn.com.br"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" /> ola@lumierereborn.com.br
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Atendimento de segunda a sábado, das 9h às 19h.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lumière Reborn. Bebês reborn são peças de colecionador, não
          são bebês humanos e não substituem brinquedos para crianças menores de 3 anos.
        </p>
      </div>
    </footer>
  );
}
