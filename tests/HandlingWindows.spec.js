const { test, expect, chromium } = require("@playwright/test");

test("Handle Pages/Windows", async () => {
  // if we dont not want to use the existing page fixture then we can define our own page fixture as below....
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();
  // Create multiple pages of same context
  const page2 = await context.newPage();

  const allPages = context.pages();
  console.log(allPages.length);

  /// We can launch different applications using these page instance even being on the same context

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page2.goto("https://www.orangehrm.com/");
});

test.only("Handling Multiple Pages/Windows", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page1).toHaveTitle("OrangeHRM");

  const pagePromise = context.waitForEvent("page");
  await page1
    .locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[3]/div[2]/p[2]/a')
    .click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle(
    "Human Resources Management Software | OrangeHRM"
  );
  await page1.waitForTimeout(3000);
  await newPage.waitForTimeout(3000);

  await browser.close();
});
