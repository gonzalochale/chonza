export const siteConfig = {
  name: "Chonza",
  url: "https://chonza.vercel.app",
  description:
    "Chonza is a React UI Library built with TailwindCSS and Framer Motion.",
  author: "Gonzalo Chalé",
  links: {
    twitter: "https://twitter.com/gonzalochale",
    github: "https://github.com/gonzalochale/chonza",
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
          new: false,
        },
      ],
    },
    {
      title: "Components",
      path: "/components/radar",
      subpages: [
        {
          title: "Glitch Banner",
          path: "/components/glitch",
          new: false,
        },
        {
          title: "Testimonials",
          path: "/components/testimonials",
          new: true,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
