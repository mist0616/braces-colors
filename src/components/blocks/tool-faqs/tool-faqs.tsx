import { getTranslations } from 'next-intl/server';
import FaqSection, { type FAQItem } from '../../layout/faqs';

export default async function ToolFaqs() {
  const t = await getTranslations('HomePage.faqs');

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
    <FaqSection
      title={t('title')}
      subtitle={t('subtitle')}
      items={faqItems}
      id="tool-faqs"
    />
  );
}
