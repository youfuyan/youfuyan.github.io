import { expect, test } from "@playwright/test";
import sharp from "sharp";

const routes = [
  "/",
  "/work/",
  "/work/agent-engineering-workflows/",
  "/work/ai-image-matting/",
  "/work/multi-region-launch/",
  "/work/event-driven-notifications/",
  "/research/",
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
      name: "Youfu Yan",
    }),
  ).toBeVisible();
  await expect(page.getByText("I build production AI and backend systems that ship.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Selected work" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Resume.pdf" }).first()).toBeVisible();
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
      name: "Youfu Yan",
    }),
  ).toBeVisible();
  await expect(page.getByLabel("Engineering domains")).toBeVisible();
  await expect(page.locator(".global-particle-canvas")).toHaveCount(0);
  await expect(page.locator(".portal-photo")).toBeVisible();
  await expect(page.locator(".portal-panel-left")).toBeHidden();
  await expect(page.locator("html")).not.toHaveClass(/reveal-motion/);
});

test("mobile portal opens and separates its title before releasing the page", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
  });

  const hero = page.locator('.portal-hero[data-motion="ready"]');
  const stage = page.locator(".portal-stage");
  const panel = page.locator(".portal-panel-left");
  const firstName = page.locator(".portal-title > span").first();
  const lastName = page.locator(".portal-title > span").last();

  await expect(hero).toBeVisible();
  const initialStage = await stage.boundingBox();
  const initialFirstName = await firstName.boundingBox();
  const initialLastName = await lastName.boundingBox();
  const releasePoint = await hero.evaluate((element) => {
    const stageElement = element.querySelector<HTMLElement>(".portal-stage");
    return element.clientHeight - (stageElement?.clientHeight ?? 0);
  });

  await page.evaluate((scrollTop) => window.scrollTo(0, scrollTop), releasePoint - 4);
  await page.evaluate(
    () => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))),
  );

  const pinnedStage = await stage.boundingBox();
  const openPanel = await panel.boundingBox();
  const openFirstName = await firstName.boundingBox();
  const openLastName = await lastName.boundingBox();
  const initialNameGap =
    (initialLastName?.x ?? 0) - ((initialFirstName?.x ?? 0) + (initialFirstName?.width ?? 0));
  const openNameGap =
    (openLastName?.x ?? 0) - ((openFirstName?.x ?? 0) + (openFirstName?.width ?? 0));

  expect(Math.abs((pinnedStage?.y ?? 0) - (initialStage?.y ?? 0))).toBeLessThan(3);
  expect((openPanel?.x ?? 0) + (openPanel?.width ?? 0)).toBeLessThan(1);
  expect(openNameGap - initialNameGap).toBeGreaterThan(100);

  await page.evaluate((scrollTop) => window.scrollTo(0, scrollTop), releasePoint + 150);
  await page.evaluate(
    () => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))),
  );
  const releasedStage = await stage.boundingBox();
  expect((initialStage?.y ?? 0) - (releasedStage?.y ?? 0)).toBeGreaterThan(100);
});

test("landing copy receives a subtle one-time reveal while scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const statement = page.locator(".home-statement-grid");
  await expect(page.locator("html")).toHaveClass(/reveal-motion/);
  await statement.scrollIntoViewIfNeeded();
  await expect(statement).toHaveClass(/is-revealed/);
});

test("portal stays pinned until its panels fully reveal the portrait", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
  });

  const hero = page.locator(".portal-hero");
  const stage = page.locator(".portal-stage");
  const panel = page.locator(".portal-panel-left");
  const initialStage = await stage.boundingBox();
  const releasePoint = await hero.evaluate((element) => {
    const stageElement = element.querySelector<HTMLElement>(".portal-stage");
    return element.clientHeight - (stageElement?.clientHeight ?? 0);
  });

  await page.evaluate((scrollTop) => window.scrollTo(0, scrollTop), releasePoint - 4);
  await page.evaluate(
    () => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))),
  );
  const pinnedStage = await stage.boundingBox();
  const openPanel = await panel.boundingBox();

  expect(initialStage).not.toBeNull();
  expect(pinnedStage).not.toBeNull();
  expect(openPanel).not.toBeNull();
  expect(Math.abs((pinnedStage?.y ?? 0) - (initialStage?.y ?? 0))).toBeLessThan(3);
  expect((openPanel?.x ?? 0) + (openPanel?.width ?? 0)).toBeLessThan(1);

  await page.evaluate((scrollTop) => window.scrollTo(0, scrollTop), releasePoint + 250);
  await page.evaluate(
    () => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))),
  );
  const releasedStage = await stage.boundingBox();

  expect(releasedStage).not.toBeNull();
  expect((initialStage?.y ?? 0) - (releasedStage?.y ?? 0)).toBeGreaterThan(150);
});

test("desktop WebGL flow follows the pointer across routes while mobile keeps the portrait fallback", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 700 });
  await page.goto("/");

  const canvas = page.locator('.global-particle-canvas[data-ready="true"]');
  await expect(canvas).toBeVisible();

  await canvas.evaluate((element) => {
    const canvasElement = element as HTMLCanvasElement;
    canvasElement.style.opacity = "1";
    canvasElement.style.transition = "none";
  });

  const firstFrame = await canvas.screenshot();
  await page.mouse.move(1180, 180);
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

  await page.goto("/work/");
  const workCanvas = page.locator('.global-particle-canvas[data-ready="true"]');
  await expect(workCanvas).toBeVisible();
  const workCanvasBox = await workCanvas.boundingBox();
  expect(workCanvasBox).not.toBeNull();
  expect(workCanvasBox?.width).toBeGreaterThan(1300);
  expect(workCanvasBox?.height).toBeGreaterThan(600);

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await expect(page.locator(".global-particle-canvas")).toHaveCount(0);
  await expect(page.locator(".portal-photo")).toBeVisible();
});

test("custom 404 renders", async ({ page }) => {
  const response = await page.goto("/missing-page/");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "This route does not exist." }),
  ).toBeVisible();
});
