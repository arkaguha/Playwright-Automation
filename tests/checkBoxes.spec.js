const { test, expect } = require("@playwright/test");

test("Handle Check Box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  //single checkbox
  await page.locator("//input[@id='monday']").check();
  await page.check("//input[@type='checkbox' and @id='sunday']"); // alternate method

  await expect(await page.locator("//input[@id='sunday']")).toBeChecked();
  await expect(
    await page.locator("//input[@id='monday']").isChecked()
  ).toBeTruthy(); // alternate method

  await expect(
    await page.locator("//input[@id='friday']").isChecked()
  ).toBeFalsy(); // alternate method

  //  Multiple Checkboxes
  const checkboxes = [
    "//input[@type='checkbox' and @id='tuesday']",
    "//input[@type='checkbox' and @id='wednesday']",
    "//input[@type='checkbox' and @id='thursday']",
  ];

    for (const locator of checkboxes) {
      // select multiple checkboxes

      await page.locator(locator).check();
    }

  for (const locator of checkboxes) {
    // uncheck multiple checkboxes
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }
});
