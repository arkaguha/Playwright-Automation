const { test, expect } = require("@playwright/test");

test("Handle Radio/check Box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Radio button
  await page.locator("//input[@id='male']").check();
  await page.check("//input[@id='female']");

  await expect(await page.locator("//input[@id='female']")).toBeChecked();
  await expect(
    await page.locator("//input[@id='female']").isChecked()
  ).toBeTruthy();

  await expect(
    await page.locator("//input[@id='male']").isChecked()
  ).toBeFalsy();

  await page.waitForTimeout(5000);
});
