import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { websiteConfig } from '@/config/website';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import { MailIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const pt = await getTranslations({ locale, namespace: 'ContactPage' });

  return constructMetadata({
    title: pt('title') + ' | ' + t('title'),
    description: pt('description'),
    canonicalUrl: getUrlWithLocale('/contact', locale),
  });
}

/**
 * Contact page with contact information display
 * inspired by https://nsui.irung.me/contact
 */
export default async function ContactPage() {
  const t = await getTranslations('ContactPage');

  return (
    <Container className="py-16 px-4">
      <div className="mx-auto max-w-4xl space-y-8 pb-16">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-center text-3xl font-bold tracking-tight">
            {t('title')}
          </h1>
          <p className="text-center text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Contact Information */}
        <Card className="mx-auto max-w-lg overflow-hidden pt-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {t('form.title')}
            </CardTitle>
            <CardDescription>{t('form.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            {websiteConfig.mail?.supportEmail && (
              <div className="flex items-center gap-4">
                <Button className="rounded-lg cursor-pointer" asChild>
                  <a href={`mailto:${websiteConfig.mail.supportEmail}`}>
                    <MailIcon className="mr-1 size-4" />
                    {t('talkWithMe')}
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
