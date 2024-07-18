export const siteConfig = {
  name: "NextJS UI Library Starter Template",
  url: "https://x.com/gonzalochale",
  description:
    "A NextJS UI Library Starter Template with TypeScript, TailwindCSS, and MDX, create your own UI Library with ease.",
  author: "Gonzalo Chalé",
  links: {
    twitter: "https://x.com/gonzalochale",
    github: "https://github.com/gonzalochale/nextjs-ui-library-template",
  },
  docs: [
    {
      title: "Introduction",
      path: "/docs",
      new: false,
    },
  ],
  components: [
    {
      title: "The best component",
      path: "/components/component-example",
      new: true,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
