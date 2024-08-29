import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.herlego.house/");
});

test.describe("Her lego house home", () => {
  test("has header", async ({ page }) => {
    const header = page.locator("header");
    await header.isVisible();
  });
});
