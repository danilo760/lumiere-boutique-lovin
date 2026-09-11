import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="Lumière Reborn, página inicial">
      <span
        aria-hidden
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/60 bg-blush font-serif text-base text-primary"
      >
        L
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate font-serif text-lg text-primary sm:text-xl">Lumière Reborn</span>
        {!compact && (
          <span className="truncate text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
            Um amor que cabe nos braços
          </span>
        )}
      </span>
    </Link>
  );
}
