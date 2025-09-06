'use client';

import { HeaderSection } from '@/components/layout/header-section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

interface BracesColorFaqsProps {
  className?: string;
}

export default function BracesColorFaqs({ className }: BracesColorFaqsProps) {
  const t = useTranslations('HomePage.faqs');

  const faqItems: FAQItem[] = [
    {
      id: 'item-1',
      question: t('items.item-1.question'),
      answer: t('items.item-1.answer'),
    },
    {
      id: 'item-2',
      question: t('items.item-2.question'),
      answer: t('items.item-2.answer'),
    },
    {
      id: 'item-3',
      question: t('items.item-3.question'),
      answer: t('items.item-3.answer'),
    },
    {
      id: 'item-4',
      question: t('items.item-4.question'),
      answer: t('items.item-4.answer'),
    },
    {
      id: 'item-5',
      question: t('items.item-5.question'),
      answer: t('items.item-5.answer'),
    },
  ];

  return (
    <section id="faqs" className={`px-4 py-16 ${className || ''}`}>
      <div className="mx-auto max-w-4xl">
        <HeaderSection
          title={t('title')}
          titleAs="h2"
          subtitle={t('subtitle')}
          subtitleAs="p"
        />

        <div className="mx-auto max-w-4xl mt-12">
          <Accordion
            type="single"
            collapsible
            className="ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
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
