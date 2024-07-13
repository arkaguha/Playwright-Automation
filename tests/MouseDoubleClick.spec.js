const { test, expect } = require("@playwright/test");

test("Mouse Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const button = await page.locator("//button[normalize-space()='Copy Text']");

  // await button.click({ button: "left", clickCount: 2 });
  await button.dblclick(); // Direct double click action

  const f1 = await page.locator("//input[@id='field1']").textContent();

  await expect(page.locator("//input[@id='field2']")).toContainText(f1);

  await page.waitForTimeout(3000);
});
