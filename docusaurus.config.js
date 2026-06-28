const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? 'github-pages';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'mc-docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minecraft Docs',
  tagline: 'Client-side and server-side Minecraft documentation',
  url: process.env.URL ?? `https://${repositoryOwner}.github.io`,
  baseUrl: process.env.BASE_URL ?? `/${repositoryName}/`,

  organizationName: repositoryOwner,
  projectName: repositoryName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Minecraft Docs',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/client/',
            label: 'Client',
            position: 'left',
          },
          {
            to: '/docs/server/',
            label: 'Server',
            position: 'left',
          },
          {
            to: '/docs/reference/',
            label: 'Reference',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Client', to: '/docs/client/'},
              {label: 'Server', to: '/docs/server/'},
              {label: 'Reference', to: '/docs/reference/'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Minecraft Docs.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
