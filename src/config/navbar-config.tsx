'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  AudioLinesIcon,
  BuildingIcon,
  ChartNoAxesCombinedIcon,
  CircleDollarSignIcon,
  CircleHelpIcon,
  ComponentIcon,
  FileTextIcon,
  FilmIcon,
  FlameIcon,
  FootprintsIcon,
  ImageIcon,
  ListChecksIcon,
  LockKeyholeIcon,
  MailIcon,
  MailboxIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  SquareKanbanIcon,
  SquarePenIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { websiteConfig } from './website';

/**
 * Get navbar config with translations
 *
 * NOTICE: used in client components only
 *
 * docs:
 * https://mksaas.com/docs/config/navbar
 *
 * @returns The navbar config with translated titles and descriptions
 */
export function getNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('ai.title'),
      items: [
        {
          title: t('ai.items.text.title'),
          description: t('ai.items.text.description'),
          icon: <SquarePenIcon className="size-4 shrink-0" />,
          href: Routes.AIText,
          external: false,
        },
        {
          title: t('ai.items.image.title'),
          description: t('ai.items.image.description'),
          icon: <ImageIcon className="size-4 shrink-0" />,
          href: Routes.AIImage,
          external: false,
        },
        {
          title: t('ai.items.chat.title'),
          description: t('ai.items.chat.description'),
          icon: <MessageCircleIcon className="size-4 shrink-0" />,
          href: Routes.AIChat,
          external: false,
        },
        // {
        //   title: t('ai.items.video.title'),
        //   description: t('ai.items.video.description'),
        //   icon: <FilmIcon className="size-4 shrink-0" />,
        //   href: Routes.AIVideo,
        //   external: false,
        // },
        // {
        //   title: t('ai.items.audio.title'),
        //   description: t('ai.items.audio.description'),
        //   icon: <AudioLinesIcon className="size-4 shrink-0" />,
        //   href: Routes.AIAudio,
        //   external: false,
        // },
      ],
    },
    {
      title: t('pages.title'),
      items: [
        {
          title: t('pages.items.about.title'),
          description: t('pages.items.about.description'),
          icon: <BuildingIcon className="size-4 shrink-0" />,
          href: Routes.About,
          external: false,
        },
        {
          title: t('pages.items.contact.title'),
          description: t('pages.items.contact.description'),
          icon: <MailIcon className="size-4 shrink-0" />,
          href: Routes.Contact,
          external: false,
        },
        {
          title: t('pages.items.roadmap.title'),
          description: t('pages.items.roadmap.description'),
          icon: <SquareKanbanIcon className="size-4 shrink-0" />,
          href: Routes.Roadmap,
          external: true,
        },

        {
          title: t('pages.items.privacyPolicy.title'),
          description: t('pages.items.privacyPolicy.description'),
          icon: <ShieldCheckIcon className="size-4 shrink-0" />,
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('pages.items.termsOfService.title'),
          description: t('pages.items.termsOfService.description'),
          icon: <FileTextIcon className="size-4 shrink-0" />,
          href: Routes.TermsOfService,
          external: false,
        },
      ],
    },
  ];
}
