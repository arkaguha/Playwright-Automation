const { test, expect } = require("@playwright/test");

test("Hidden Drop Down", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
  );

  await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin123");
  await page.locator("[type='submit']").click();

  //   await page.locator("//span[normalize-space()='PIM'").click();
  await page
    .locator(
      "(//div//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]"
    )
    .click();

  // await page.locator('form i').nth(2).click();
  await page.locator("(//div[@class='oxd-select-text--after']//i)[3]").click();
  // await page.waitForSelector("//div[@class='oxd-select-option']//span");
  await page.waitForTimeout(3000);

  const options = await page.$$("//div[@class='oxd-select-option']//span");
  // console.log(options);
  for (let option of options) {
    // console.log(await option.textContent());
    const jobRole = await option.textContent();
    if (jobRole.includes("QA Engineer")) {
      await option.click();
      // console.log("clicked");
      break;
    }
  }
  //   console.log(await options.textContent());
  //   await page.locator('form i').nth(3).click();
  //   await page.locator('form i').nth(3).click();
  //   await page.locator('form i').first().click();
  //   await page.locator('form i').nth(1).click();
  await page.waitForTimeout(3000);

  //   await expect();
});
