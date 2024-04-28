export const siteConfig = {
  name: "Chonza",
  url: "https://chonza.vercel.app",
  description:
    "Chonza is a React UI Library built with TailwindCSS and Framer Motion.",
  author: "Gonzalo Chalé",
  links: {
    twitter: "https://twitter.com/gonzalochale",
    github: "https://github.com/gonzalochale",
    portfolio: "https://www.gonzalochale.dev",
  },
  docs: [
    {
      title: "Getting Started",
      path: "/docs",
      subpages: [
        {
          title: "Introduction",
          path: "/docs",
        },
        {
          title: "Installation",
          path: "/docs/installation",
        },
      ],
    },
    {
      title: "Components",
      path: "/docs/components/radar",
      subpages: [
        {
          title: "Radar",
          path: "/docs/components/radar",
        },
        {
          title: "Glitch",
          path: "/docs/components/glitch",
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
