import { useTranslations } from 'next-intl';

interface ToolHeaderProps {
  title?: string;
  description?: string;
}

export default function ToolHeader({ title, description }: ToolHeaderProps) {
  const t = useTranslations('HomePage');

  return (
    <div className="text-center space-y-6 mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        {title || t('title')}
      </h1>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {description || t('description')}
      </p>
    </div>
  );
}
