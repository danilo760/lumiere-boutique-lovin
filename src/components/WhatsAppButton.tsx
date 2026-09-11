export const WHATSAPP_URL =
  "https://wa.me/5565999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Lumi%C3%A8re%20Reborn%20e%20quero%20saber%20mais%20sobre%20as%20beb%C3%AAs.";

function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.6-1.5-1.9-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.84 1.2 3.04c.15.2 2.06 3.25 5.01 4.43 2.95 1.18 3.06.86 3.62.81.55-.05 1.79-.72 2.04-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35zM12.05 2C6.5 2 2 6.48 2 12c0 1.94.56 3.75 1.52 5.28L2 22l4.87-1.48A10.05 10.05 0 0 0 12.05 22C17.6 22 22 17.52 22 12S17.6 2 12.05 2zm0 18.13c-1.72 0-3.32-.5-4.66-1.37l-3.25.99.99-3.14A8.06 8.06 0 0 1 3.92 12c0-4.47 3.65-8.1 8.13-8.1s8.03 3.63 8.03 8.1-3.55 8.13-8.03 8.13z" />
    </svg>
  );
}

export function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Lumière Reborn no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm text-primary-foreground shadow-lift transition-colors hover:bg-primary/90"
    >
      <WhatsIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}

export { WhatsIcon };
