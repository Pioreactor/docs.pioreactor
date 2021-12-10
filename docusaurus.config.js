// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pioreactor',
  tagline: 'Your customizable and accessible bioreactor',
  url: 'https://docs.pioreactor.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Pioreactor', // Usually your GitHub org/user name.
  projectName: 'docs.pioreactor', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

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
        googleAnalytics: {
          trackingID: 'UA-187907019-1',
          anonymizeIP: true,
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'experiments',
        path: 'experiments',
        routeBasePath: 'experiments',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Pioreactor Documentation",
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
            to: '/experiments/introduction',
            position: 'left',
            label: 'Experiments',
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
            title: 'Topics',
            items: [
              {
                label: 'User Guide',
                to: '/user_guide/user_guide_intro',
              },
              {
                label: 'Developer Guide',
                to: '/developer_guide/developer_guide_intro',
              },
              {
                label: 'Experiments',
                to: '/experiments/introduction',
              },
              {
                label: 'Change log',
                to: '/changelog',
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
              {
                label: 'GitHub',
                href: 'https://github.com/pioreactor/',
              },
            ],
          },
          {
            title: 'Contributing to documentation',
            items: [
              {html: `
              This entire site is open-source, and any suggestions or comments can be added to our <a href="https://github.com/Pioreactor/docs.pioreactor/issues">Issue Tracker</a>. If you're up for it, feel free to send a <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models">pull request</a>, too!
              `}
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
