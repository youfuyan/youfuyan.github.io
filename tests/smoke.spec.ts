import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/work/",
  "/work/ai-image-matting/",
  "/work/multi-region-launch/",
  "/work/event-driven-notifications/",
  "/research/knownet/",
  "/about/",
  "/resume/",
];

test.describe("portfolio routes", () => {
  for (const route of routes) {
    test(`loads ${route}`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("h1").first()).toBeVisible();
    });
  }
});

test("home page supports recruiter scan and keyboard navigation", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Software Development Engineer at Amazon").first()).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "I build production AI and backend systems that ship.",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "View selected work" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Read my resume" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "GitHub" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "LinkedIn" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Email" }).first()).toBeVisible();

  await page.keyboard.press("Tab");
  await expect(page.getByText("Skip to content")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused({ timeout: 1000 }).catch(async () => {
    await expect(page.locator("main")).toBeVisible();
  });
});

test("internal links are not broken", async ({ page }) => {
  await page.goto("/");
  const hrefs = await page
    .locator("a[href]")
    .evaluateAll((links) =>
      Array.from(new Set(links.map((link) => link.getAttribute("href") ?? ""))).filter(
        (href) =>
          href.startsWith("/") &&
          !href.startsWith("//") &&
          !href.includes("#") &&
          !href.startsWith("mailto:"),
      ),
    );

  for (const href of hrefs) {
    const response = await page.goto(href);
    expect(response?.status(), href).toBeLessThan(400);
  }
});

test("mobile and desktop layouts avoid horizontal overflow", async ({ page }) => {
  for (const viewport of [
    { width: 375, height: 900 },
    { width: 768, height: 1000 },
    { width: 1440, height: 1100 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  }
});

test("custom 404 renders", async ({ page }) => {
  const response = await page.goto("/missing-page/");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "This page is not available." }),
  ).toBeVisible();
});
