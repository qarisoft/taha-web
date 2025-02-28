export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "مؤسسة خالد الكبيشي",
  description: "مؤسسة خالد الكبيشي للمقاولات العامة",
  navItems: [
    {
      label: "الرئيسية",
      href: "/",
    },
    {
      label: "اعمالنا",
      href: "/docs",
    },
    {
      label: "عنا",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "الرئيسية",
      href: "/",
    },
    {
      label: "اعمالنا",
      href: "/docs",
    },
    {
      label: "عنا",
      href: "/about",
    },
    // {
    //   label: "Projects",
    //   href: "/projects",
    // },
    // {
    //   label: "Team",
    //   href: "/team",
    // },
    // {
    //   label: "Calendar",
    //   href: "/calendar",
    // },
    // {
    //   label: "Settings",
    //   href: "/settings",
    // },
    // {
    //   label: "Help & Feedback",
    //   href: "/help-feedback",
    // },
    // {
    //   label: "Logout",
    //   href: "/logout",
    // },
  ],
  links: {
    github: "#",
    twitter: "#",
    docs: "#",
    discord: "#",
    sponsor: "#",
  },
};
