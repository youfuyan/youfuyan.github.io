import type { MetadataRoute } from "next";

import { routes } from "@/lib/routes";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const routeList = [
  routes.home,
  routes.work,
  routes.aiImageMatting,
  routes.multiRegionLaunch,
  routes.eventDrivenNotifications,
  routes.researchKnownet,
  routes.about,
  routes.resume,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routeList.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date("2026-07-04"),
    changeFrequency: "monthly",
    priority: route === routes.home ? 1 : 0.8,
  }));
}
