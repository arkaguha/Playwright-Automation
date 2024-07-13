const { test, expect } = require("@playwright/test");

test("Page ScreenShot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "opencart.png",
  });
});

test("Full Page ScreenShot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "Fullpage.png",
    fullPage: true,
  });
});

test("Element ScreenShot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.locator("//*[@id='tbodyid']/div[2]").screenshot({
    path: "tests/screenshots/" + Date.now() + "Element.png",
  });
});
