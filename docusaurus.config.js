// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sentinel Growth DAO',
  tagline: 'Your Gateway to Maximum Privacy and Growth within Sentinel dVPN Ecosystem',
  favicon: 'img/sentinel.svg',

  // Set the production url of your site here
  url: 'https://sentinelgrowthdao.com',
  //url: 'https://sentinelgrowthdao.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/sentinel-growth-dao-website/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sentinelgrowthdao', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/dao-social-card.png',
      navbar: {
        //title: 'Sentinel Growth DAO',
        logo: {
          alt: 'Sentinel Groth DAO Logo',
          src: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'getStartedSidebar',
            position: 'left',
            label: 'Get Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'infrastructureSidebar',
            position: 'left',
            label: 'Infrastructure',
          },
          {to: 'https://dvpn.news', label: 'dVPN News', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'Find us',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://x.com/TheP2PDAO',
                label: 'X',
              },
              {
                href: 'https://t.me/sentinelgrowthdao',
                label: 'Telegram',
              },
              {
                href: 'https://discord.com/channels/436630361313640469/1148964356592259082',
                label: 'Discord',
              },
              {
                href: 'https://github.com/sentinelgrowthdao',
                label: 'GitHub',
              },
              {
                href: 'https://keybase.io/sentinelgrowth',
                label: 'Keybase',
              },

            ],
          },
          {
            href: 'https://sentinel.co',
            label: 'Sentinel',
            position: 'right',
          },
          {
            href: 'https://github.com/sentinelgrowthdao',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
        ],
      },
      // this block enables dark mode only
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/get-started/intro',
              },
              {
                label: 'Infrastructure',
                to: '/docs/infrastructure/validator',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                href: 'https://x.com/TheP2PDAO',
                label: 'X',
              },
              {
                href: 'https://t.me/sentinelgrowthdao',
                label: 'Telegram',
              },
              {
                href: 'https://discord.com/channels/436630361313640469/1148964356592259082',
                label: 'Discord',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: 'https://dvpn.news',
                label: 'DVPN News',
              },
              {
                href: 'https://github.com/sentinelgrowthdao',
                label: 'GitHub',
              },
              {
                href: 'https://keybase.io/sentinelgrowth',
                label: 'Keybase',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Sentinel Growth DAO`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
