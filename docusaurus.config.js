// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pioreactor',
  tagline: 'Your customizable, acccessible bioreactor',
  url: 'https://docs.pioreactor.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Pioreactor', // Usually your GitHub org/user name.
  projectName: 'docs.pioreactor', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'user_guide',
          path: 'user_guide',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developer_guide',
        path: 'developer_guide',
        routeBasePath: 'developer_guide',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'pioreactor',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/user_guide/user_guide_intro',
            position: 'left',
            label: 'User Guide',
          },
          {
            to: '/developer_guide/developer_guide_intro',
            position: 'left',
            label: 'Developer Guide',
          },
          {
            to: 'changelog',
            position: 'left',
            label: 'Change log',
          },
          {
            href: 'https://pioreactor.com',
            label: 'pioreactor.com',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/user_guide/user_guide_intro',
              },
              {
                label: 'Developer Guide',
                to: '/developer_guide/developer_guide_intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community forums',
                href: 'https://forum.pioreactor.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pioreactor',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pioreactor/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pioreactor, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
