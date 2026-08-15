import { profile } from "@/content/profile";

export const site = {
  url: "https://youfuyan.github.io",
  title: "Youfu Yan - Software Engineer building production AI and backend systems",
  description:
    "Software Development Engineer at Amazon building production AI, evidence-gated agent workflows, distributed backend services, and reliable AWS systems.",
  author: profile.name,
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
