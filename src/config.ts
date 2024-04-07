import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://arzamaskov.github.io/", // replace this with your deployed domain
  author: "Андрей Арзамасков",
  desc: "Личный блог",
  title: "arzamaskov",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "ru", // html lang code. Set this empty and default will be "en"
  langTag: ["ru-RU"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 46,
  height: 92,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/arzamaskov",
    linkTitle: ` ${SITE.author} на Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arzamaskov/",
    linkTitle: `${SITE.author} на LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/arzamaskov",
    linkTitle: `${SITE.author} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/arzamaskov",
    linkTitle: `${SITE.author} в Telegram`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@arzamaskov",
    linkTitle: `${SITE.author} в Mastodon`,
    active: true,
  },
];
