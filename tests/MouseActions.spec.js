const { test, expect } = require("@playwright/test");

test("Mouse Hover", async ({ page }) => {
  await page.goto("https://demo.opencart.com");

  
  await page.waitForSelector("//a[normalize-space()='Desktops']");
  const Desktops = await page.locator("//a[normalize-space()='Desktops']");
  const macbook = await page.locator("//a[normalize-space()='Mac (1)']");

  //mouse hover
  await Desktops.hover();
  await macbook.hover();
  await page.waitForTimeout(3000);
});
