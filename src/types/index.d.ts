import type { ReactNode } from 'react';

/**
 * website config, without translations
 */
export type WebsiteConfig = {
  ui: UiConfig;
  metadata: MetadataConfig;
  features: FeaturesConfig;
  analytics: AnalyticsConfig;
  i18n: I18nConfig;
  docs: DocsConfig;
  newsletter: NewsletterConfig;
  storage: StorageConfig;
};

/**
 * UI configuration
 */
export interface UiConfig {
  mode?: ModeConfig;
  theme?: ThemeConfig;
}

/**
 * Website metadata
 */
export interface MetadataConfig {
  images?: ImagesConfig;
  social?: SocialConfig;
}

export interface ModeConfig {
  defaultMode?: 'light' | 'dark' | 'system';                  // The default mode of the website
  enableSwitch?: boolean;                                     // Whether to enable the mode switch
}

export interface ThemeConfig {
  defaultTheme?: 'default' | 'blue' | 'green' | 'amber' | 'neutral'; // The default theme of the website
  enableSwitch?: boolean;                                     // Whether to enable the theme switch
}

export interface ImagesConfig {
  ogImage?: string;                                           // The image as Open Graph image
  logoLight?: string;                                         // The light logo image
  logoDark?: string;                                          // The dark logo image
}

/**
 * Social media configuration
 */
export interface SocialConfig {
  twitter?: string;
  github?: string;
  discord?: string;
  blueSky?: string;
  mastodon?: string;
  youtube?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  telegram?: string;
}

/**
 * Website features
 */
export interface FeaturesConfig {
  enableCrispChat?: boolean;          // Whether to enable the crisp chat
  enableUpgradeCard?: boolean;        // Whether to enable the upgrade card in the sidebar
  enableUpdateAvatar?: boolean;       // Whether to enable the update avatar in settings
  enableAffonsoAffiliate?: boolean;   // Whether to enable affonso affiliate
  enablePromotekitAffiliate?: boolean;   // Whether to enable promotekit affiliate
  enableDatafastRevenueTrack?: boolean;   // Whether to enable datafast revenue tracking
  enableTurnstileCaptcha?: boolean;   // Whether to enable turnstile captcha
}

/**
 * Analytics configuration
 */
export interface AnalyticsConfig {
  enableVercelAnalytics?: boolean;    // Whether to enable vercel analytics
  enableSpeedInsights?: boolean;      // Whether to enable speed insights
}


/**
 * I18n configuration
 */
export interface I18nConfig {
  defaultLocale: string;              // The default locale of the website
  locales: Record<string, { flag?: string; name: string }>; // The locales of the website
}


/**
 * Docs configuration
 */
export interface DocsConfig {
  enable: boolean;                   // Whether to enable the docs
}


/**
 * Newsletter configuration
 */
export interface NewsletterConfig {
  enable: boolean;                   // Whether to enable the newsletter
  provider: 'resend';                 // The newsletter provider, only resend is supported for now
  autoSubscribeAfterSignUp?: boolean; // Whether to automatically subscribe users to the newsletter after sign up
}

/**
 * Storage configuration
 */
export interface StorageConfig {
  enable: boolean;                   // Whether to enable the storage
  provider: 's3';                    // The storage provider, only s3 is supported for now
}


/**
 * menu item, used for navbar links, sidebar links, footer links
 */
export type MenuItem = {
  title: string;                      // The text to display
  description?: string;               // The description of the item
  icon?: ReactNode;                   // The icon to display
  href?: string;                      // The url to link to
  external?: boolean;                 // Whether the link is external
  authorizeOnly?: string[];           // The roles that are authorized to see the item
};

/**
 * nested menu item, used for navbar links, sidebar links, footer links
 */
export type NestedMenuItem = MenuItem & {
  items?: MenuItem[];                // The items to display in the nested menu
};

