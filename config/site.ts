export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Tasks Inbox",
      href: "/tasks",
    }

  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Tasks Inbox",
      href: "/tasks",
    }
  ],
  links: {
    github: "https://github.com/BOUMESLOUTAbdessamad",
    // twitter: "https://twitter.com/hero_ui",
    // docs: "https://heroui.com",
    // discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev",
  },
};
