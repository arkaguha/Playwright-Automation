const { test, expect } = require("@playwright/test");

test("Handle Input Box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Input Box - Firstname
  await expect(await page.locator("//input[@id='name']")).toBeVisible();
  await expect(await page.locator("//input[@id='name']")).toBeEmpty();
  await expect(await page.locator("//input[@id='name']")).toBeEditable();
  await expect(await page.locator("//input[@id='name']")).toBeEnabled();

  await page.locator("//input[@id='name']").fill("Sam");
  //  await page.fill("//input[@id='name']", "Sam");

  await page.waitForTimeout(5000);
});
