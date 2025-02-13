import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],
  localePrefix: "always",
  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/contact": {
      en: "/contact-me",
      fr: "/contactez-moi",
    },
    "/about": {
      en: "/about",
      fr: "/àpropos",
    },
    "/[collection]": {
      en: "/[collection]",
      fr: "/[collection]",
    },
    "/[collection]/[product]": {
      en: "/[collection]/[product]",
      fr: "/[collection]/[product]",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
