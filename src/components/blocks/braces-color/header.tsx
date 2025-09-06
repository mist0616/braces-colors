import { useTranslations } from 'next-intl';

/**
 * Braces color page header component with title and description
 * Used specifically for the braces color picker page
 */
export function BracesColorHeader() {
  const t = useTranslations('HomePage');

  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold text-foreground mb-4">{t('title')}</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {t('description')}
      </p>
    </div>
  );
}
