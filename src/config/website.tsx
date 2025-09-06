// Payment types import removed - payment module deleted
import type { WebsiteConfig } from '@/types';

/**
 * website config, without translations
 *
 * docs:
 * https://mksaas.com/docs/config/website
 */
export const websiteConfig: WebsiteConfig = {
  ui: {
    theme: {
      defaultTheme: 'default',
      enableSwitch: true,
    },
    mode: {
      defaultMode: 'dark',
      enableSwitch: true,
    },
  },
  metadata: {
    images: {
      ogImage: '/og.png',
      logoLight: '/logo.png',
      logoDark: '/logo-dark.png',
    },
    social: {
      github: 'https://github.com/ToolDemoHQ',
      twitter: 'https://mksaas.link/twitter',
      blueSky: 'https://mksaas.link/bsky',
      discord: 'https://mksaas.link/discord',
      mastodon: 'https://mksaas.link/mastodon',
      linkedin: 'https://mksaas.link/linkedin',
      youtube: 'https://mksaas.link/youtube',
    },
  },
  features: {
    enableUpgradeCard: false,
    enableUpdateAvatar: true,
    enableDatafastRevenueTrack: false,
    enableCrispChat: process.env.NEXT_PUBLIC_DEMO_WEBSITE === 'true',
    enableTurnstileCaptcha: process.env.NEXT_PUBLIC_DEMO_WEBSITE === 'true',
  },
  analytics: {
    enableVercelAnalytics: false,
    enableSpeedInsights: false,
  },
  i18n: {
    defaultLocale: 'en',
    locales: {
      en: {
        flag: '🇺🇸',
        name: 'English',
      },
      zh: {
        flag: '🇨🇳',
        name: '中文',
      },
      es: {
        flag: '🇪🇸',
        name: 'Español',
      },
      pt: {
        flag: '🇵🇹',
        name: 'Português',
      },
      de: {
        flag: '🇩🇪',
        name: 'Deutsch',
      },
      fr: {
        flag: '🇫🇷',
        name: 'Français',
      },
      ja: {
        flag: '🇯🇵',
        name: '日本語',
      },
      ko: {
        flag: '🇰🇷',
        name: '한국어',
      },
      id: {
        flag: '🇮🇩',
        name: 'Bahasa Indonesia',
      },
      ru: {
        flag: '🇷🇺',
        name: 'Русский',
      },
      th: {
        flag: '🇹🇭',
        name: 'ไทย',
      },
      vi: {
        flag: '🇻🇳',
        name: 'Tiếng Việt',
      },
      it: {
        flag: '🇮🇹',
        name: 'Italiano',
      },
      ar: {
        flag: '🇸🇦',
        name: 'العربية',
      },
      hi: {
        flag: '🇮🇳',
        name: 'हिन्दी',
      },
    },
  },
  docs: {
    enable: false,
  },
  newsletter: {
    enable: true,
    provider: 'resend',
    autoSubscribeAfterSignUp: true,
  },
  storage: {
    enable: true,
    provider: 's3',
  },
  mail: {
    provider: 'resend',
    fromEmail: 'Best Braces Colors <duchoureai@gmail.com>',
    supportEmail: 'Best Braces Colors <duchoureai@gmail.com>',
  },
};
