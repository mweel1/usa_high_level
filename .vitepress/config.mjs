export default {
  // add plugin
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@1.0.4/dist/tailwind.min.css",
      },
    ],
  ],
  title: "Government Technology",
  description:
    "My rambilings about government technology, digital transformation, and the future of government.",
  ignoreDeadLinks: true,
  themeConfig: {
    logo: "/img/usa.webp",
    search: {
      provider: "local",
    },
  },
};
