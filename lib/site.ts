import { profile } from "@/content/profile";

export const site = {
  url: "https://youfuyan.github.io",
  title: "Youfu Yan - Software Engineer building production AI and backend systems",
  description:
    "Software Development Engineer at Amazon working across production AI/ML evaluation, distributed backend services, and AWS infrastructure.",
  author: profile.name,
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
