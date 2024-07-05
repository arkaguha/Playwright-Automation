const { test, expect } = require("@playwright/test");
//import {test, expect} from '@playwright/test'

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  // Click on login button property
  await page.locator("id=login2").click(); // method 1

  //  await page.click('id=login2'); // method 2

  // Provide username - CSS
  await page.locator("#loginusername").fill("pavanol"); // method 1
  //await page.locator('input[name=username]').fill('username'); //
  //   await page.fill("#loginusername",'pavanol'); //method 2

  //  await page.type("#loginusername"); // method 3

  // Provide password - CSS
  await page.locator("#loginpassword").fill("test@123"); // method 1
  //await page.locator('input[name=password]').fill('password'); //
  //   await page.fill("input[(id = 'loginpassword')]", 'test@123'); // method 2 Css selector using Id

  // Click on Login Button using Xpath
  await page.click("//button[normalize-space()='Log in']");

  // Verify visibilty of logout and check link
  const logoutlink = await page.locator("//a[@id='logout2']");
  console.log("logout link:", logoutlink);
  await expect(logoutlink).toBeVisible();

  await page.close();
});
