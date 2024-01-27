export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Galaxy UI",
  description:
    "Beautifully crafted components designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Builder",
      href: "/builder",
    },
  ],
  links: {
    twitter: "https://twitter.com/pavincius",
    github: "https://github.com/PAVincius/builder",
    docs: "https://nebuloz.com",
  },
}
