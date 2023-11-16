// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "我是元迪",
  tagline: "河河河河河河",
  favicon: "img/OIP.jfif",

  // Set the production url of your site here
  url: "https://gson.lychicken.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gson", // Usually your GitHub org/user name.
  projectName: "gson-personal", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant", "en"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/yuanyu90221/gson-personal/tree/main/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/yuanyu90221/gson-personal/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // gtag: {
        //   trackingID: "",
        //   anonymizeIP: true,
        // },
      },
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/gson.jpg",
      metadata: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { property: "og:title", content: "I'm Gson" },
        { property: "og:url", content: "https://gson.lychicken.com/" },
        { property: "og:site_name", content: "Gson" },
        { property: "og:description", content: "河河河河河河" },
        { property: "og:locale", content: "zh_TW" },
        { property: "og:width", content: "300" },
        { property: "og:height", content: "301" },
        { property: "article:author", content: "Gson" },
        { property: "article:tag", content: "Gson" },
        { property: "article:tag", content: "梁大哥" },
        { property: "article:tag", content: "作品" },
        {
          property: "article:tag",
          content:
            "前端, 後端, 全端, 網頁, 開發, 技術, 網頁開發, 前端開發, 後端開發, 全端開發, JavaScript, HTML, CSS, 經驗分享, 手札, 筆記",
        },
        {
          property: "article:tag",
          content:
            "frontend, backend, web, PHP, JavaScript, HTML, CSS, 經驗分享, 手札, note",
        },
      ],
      navbar: {
        title: "I'm Gson",
        logo: {
          alt: "I'm Gson Logo",
          src: "img/OIP.jfif",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "筆記",
          },
          { to: "/blog", label: "作品", position: "left" },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          {
            href: "https://town.lychicken.com",
            label: "小雞鎮",
            position: "right",
          },
          {
            href: "https://github.com/yuanyu90221",
            label: "GitHub",
            position: "right",
          },
          {
            type: "dropdown",
            label: "友情連結",
            position: "right",
            items: [
              {
                href: "https://mileschou.me/",
                label: "Miles' Blog",
              },
              {
                href: "https://mtwmt.com/",
                label: "Mandy's Web",
              },
              {
                href: "https://tedmax100.github.io/",
                label: "阿雷s' Blog",
              },
              {
                href: "https://dotblogs.com.tw/yc421206",
                label: "余小章 @ 大內殿堂",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()}@BY Lonely Yeezhi Chicken.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "java", "powershell", "go"],
      },
      mermaid: {
        theme: { light: "neutral" },
      },
    }),
  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["zh"],
      },
    ],
  ],
};

module.exports = config;
