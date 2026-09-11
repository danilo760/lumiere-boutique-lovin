import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/content";

export function FaqList({ limit }: { limit?: number }) {
  const list = limit ? faq.slice(0, limit) : faq;

  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
      {list.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="text-left font-serif text-lg text-primary hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
