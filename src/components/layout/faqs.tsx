'use client';

import { HeaderSection } from '@/components/layout/header-section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

interface FaqSectionProps {
  title: string;
  subtitle: string;
  items: FAQItem[];
  id?: string;
}

export default function FaqSection({
  title,
  subtitle,
  items,
  id = 'faqs',
}: FaqSectionProps) {
  return (
    <section id={id} className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <HeaderSection
          title={title}
          titleAs="h2"
          subtitle={subtitle}
          subtitleAs="p"
        />

        <div className="mx-auto max-w-4xl mt-12">
          <Accordion
            type="single"
            collapsible
            className="ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
