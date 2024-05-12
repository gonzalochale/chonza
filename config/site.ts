export const siteConfig = {
  name: "Chonza",
  url: "https://chonza.vercel.app",
  description: "Chonza is a UI Library built with React and TailwindCSS.",
  author: "Gonzalo Chalé",
  links: {
    twitter: "https://twitter.com/gonzalochale",
    github: "https://github.com/gonzalochale/chonza",
    portfolio: "https://www.gonzalochale.dev",
  },
  docs: [
    {
      title: "Introduction",
      path: "/docs",
      new: false,
    },
    {
      title: "Installation",
      path: "/docs/creating-a-new-project",
      new: false,
    },
    {
      title: "Changelog",
      path: "/docs/changelog",
      new: false,
    },
  ],
  components: [
    {
      title: "Glitch Banner",
      path: "/components/glitch",
      new: false,
    },
    {
      title: "Testimonials",
      path: "/components/testimonials",
      new: false,
    },
    {
      title: "Logo Roll",
      path: "/components/logo-roll",
      new: true,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
