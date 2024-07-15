const { test, expect } = require("@playwright/test");

// Types of reporters - LINE , LIST, Json, JUnit, HTML
// Either onfigure config.js or in CLI as --reporter=line
// to use multiple reporters put them in array [[''],['']] as this

test("test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page).toHaveTitle("STORE");
});

test("test2", async ({ page }) => {
  await page.goto("https://demo.opencart.com");
  await expect(page).toHaveTitle("Your Store");
});

test("test3", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com");
  await expect(page).toHaveTitle("nopCommerce demo store");
});
