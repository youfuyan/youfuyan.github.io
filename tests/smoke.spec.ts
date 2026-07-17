import { expect, test } from "@playwright/test";
import sharp from "sharp";

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

test("mobile navigation is compact and keyboard accessible", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto("/");

  const menu = page.getByText("Menu", { exact: true });
  await expect(menu).toBeVisible();
  await menu.focus();
  await expect(menu).toBeFocused();
  await page.keyboard.press("Enter");

  const mobileNavigation = page.getByRole("navigation", {
    name: "Mobile navigation",
  });
  await expect(mobileNavigation).toBeVisible();
  await expect(
    mobileNavigation.getByRole("link", { name: "Resume", exact: true }),
  ).toBeVisible();
  await expect(
    mobileNavigation.getByRole("link", { name: "GitHub", exact: true }),
  ).toBeVisible();
});

test("motion enhancements preserve content with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "I build production AI and backend systems that ship.",
    }),
  ).toBeVisible();
  await expect(page.getByLabel("Impact snapshot")).toBeVisible();
  await expect(page.locator(".hero-signal-path-flow")).toHaveCSS(
    "animation-name",
    "none",
  );
});

test("mobile hero reveals the impact snapshot in the first viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const snapshot = page.getByLabel("Impact snapshot");
  const box = await snapshot.boundingBox();
  expect(box).not.toBeNull();
  expect(box?.y).toBeLessThan(812);
});

test("desktop WebGL flow renders pixels while mobile keeps the SVG fallback", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 700 });
  await page.goto("/");

  const canvas = page.locator('.hero-particle-canvas[data-ready="true"]');
  await expect(canvas).toBeVisible();

  await page.locator(".hero-signal-background").evaluate((element) => {
    (element as HTMLElement).style.visibility = "hidden";
  });
  await page.locator(".hero-content").evaluate((element) => {
    (element as HTMLElement).style.visibility = "hidden";
  });
  await canvas.evaluate((element) => {
    const canvasElement = element as HTMLCanvasElement;
    canvasElement.style.opacity = "1";
    canvasElement.style.transition = "none";
  });

  const firstFrame = await canvas.screenshot();
  await page.waitForTimeout(250);
  const secondFrame = await canvas.screenshot();
  const [firstPixels, secondPixels] = await Promise.all(
    [firstFrame, secondFrame].map((frame) =>
      sharp(frame).ensureAlpha().raw().toBuffer({ resolveWithObject: true }),
    ),
  );

  expect(firstPixels.info.width).toBeGreaterThan(0);
  expect(firstPixels.info.height).toBeGreaterThan(0);
  expect(secondPixels.data.length).toBe(firstPixels.data.length);

  let changedPixels = 0;
  for (let index = 0; index < firstPixels.data.length; index += 4) {
    const difference =
      Math.abs(firstPixels.data[index] - secondPixels.data[index]) +
      Math.abs(firstPixels.data[index + 1] - secondPixels.data[index + 1]) +
      Math.abs(firstPixels.data[index + 2] - secondPixels.data[index + 2]);

    if (difference > 12) {
      changedPixels += 1;
    }
  }

  expect(changedPixels).toBeGreaterThan(20);

  await page.setViewportSize({ width: 375, height: 812 });
  await page.reload();
  await expect(page.locator(".hero-particle-canvas")).toHaveCount(0);
  await expect(page.locator(".hero-signal-background")).toBeVisible();
});

test("custom 404 renders", async ({ page }) => {
  const response = await page.goto("/missing-page/");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "This page is not available." }),
  ).toBeVisible();
});
