import type { MetadataRoute } from "next";

const BASE_URL = "https://pcos-insights-pakistan.vercel.app";

const ROUTES = [
  "",
  "/about",
  "/learn",
  "/survey",
  "/dashboard",
  "/voices",
  "/get-involved",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
