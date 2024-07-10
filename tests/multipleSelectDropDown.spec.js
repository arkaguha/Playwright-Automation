const { test, expect } = require("@playwright/test");

test("Select Multiple Drop-Downs", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  //   await page.waitForSelector("#color");

  // Select multiple options from multi select dropdown
    await page.selectOption("#colors", ["Red", "green", "blue"]);
    
    // Assertions
    // 1) Check number of options in dropdowns
    const options = await page.locator('#colors option')
    await expect(options).toHaveCount(5)

    //2) Check number of options in dropdown using Js Array
    const option = await page.$$('#colors option')
    await expect(option.length).toBe(5)


    // 3) Check presence of value in the dropdown

    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Black')).toBeFalsy()

  await page.waitForTimeout(3000);
});
