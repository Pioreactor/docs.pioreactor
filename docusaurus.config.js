// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pioreactor Docs',
  tagline: 'Your customizable and accessible bioreactor',
  url: 'https://docs.pioreactor.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/misc/favicon.ico',
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
          routeBasePath: 'user-guide',
          path: 'user-guide',
		      remarkPlugins: [math],
          rehypePlugins: [katex],
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developer-guide',
        breadcrumbs: false,
        path: 'developer-guide',
		    remarkPlugins: [math],
        rehypePlugins: [katex],
        routeBasePath: 'developer-guide',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'experiments',
        path: 'experiments',
		    remarkPlugins: [math],
        rehypePlugins: [katex],
        breadcrumbs: false,
        routeBasePath: 'experiments',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-187907019-1',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [{name: 'keywords', content: 'documentation, bioreactor, pioreactor, experiments, user-guide'}],
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'pioreactor',
          src: 'img/misc/colour-Docs-logo.png',
          srcDark: 'img/misc/white-Docs-logo.png',
        },
        items: [
          {
            to: '/user-guide/getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            to: '/user-guide/introduction',
            position: 'left',
            label: 'User Guide',
          },
          {
            to: '/developer-guide/introduction',
            position: 'left',
            label: 'Developer Guide',
          },
          {
            to: '/experiments/introduction',
            position: 'left',
            label: 'Experiments',
          },
          {
            to: 'https://github.com/Pioreactor/pioreactor/blob/master/CHANGELOG.md',
            position: 'left',
            label: 'Changelog',
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
                to: '/user-guide/introduction',
              },
              {
                label: 'Developer Guide',
                to: '/developer-guide/introduction',
              },
              {
                label: 'Experiments',
                to: '/experiments/introduction',
              },
              {
                label: 'Changelog',
                to: 'https://github.com/Pioreactor/pioreactor/blob/master/CHANGELOG.md',
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
              Any suggestions or comments can be added to our <a href="https://github.com/Pioreactor/docs.pioreactor/issues">Issue Tracker</a>. If you're up for it, feel free to send a <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models">pull request</a>, too!
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
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsDir: ["user-guide", "experiments", "developer-guide"],
        indexBlog: false,
        docsRouteBasePath: ["/user-guide", "/experiments", "/developer-guide"],
      },
    ],
  ],
};

module.exports = config;
