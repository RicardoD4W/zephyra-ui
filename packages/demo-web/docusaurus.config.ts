import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zephyra UI',
  tagline:
    'Modular, designed for any stack, with complete freedom to customize it to your style.',

  favicon: 'img/icon/z-logo-64.ico',
  url: 'https://zephyra-ui.netlify.app',
  baseUrl: '/',

  organizationName: 'GitHub/RicardoD4W',
  projectName: 'zephyra-ui',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  themes: ['@docusaurus/theme-live-codeblock'],
  clientModules: ['./clientModules/registerWCs.js'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
      },
      es: {
        htmlLang: 'es',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/z-logo-card.webp',
    navbar: {
      title: 'Zephyra UI',
      logo: {
        alt: 'Zephyra UI Logo',
        src: 'img/z-logo-1200-light.png',
        srcDark: 'img/z-logo-1200-dark.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'appSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/integrations', label: 'Integrations', position: 'left' },
        {
          href: 'https://github.com/RicardoD4W/zephyra-ui',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Made with 💙 by RicardoD4W`,
    },
    rMode: {
      defaultMode: 'dark',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
