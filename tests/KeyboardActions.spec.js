const { test, expect } = require("@playwright/test");

test("Keyboard Actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  await page.locator('[name="text1"]').fill("Welcome to Automation !");

  // await page.type("name='text1'", "Welcome to Automation !");

  //ctrl + A
  await page.keyboard.press("Control+A");

  //ctrl + C
  await page.keyboard.press("Control+c");

  // TAB
    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

  //ctrl + V
  await page.keyboard.press("Control+v");
  await page.waitForTimeout(3000);
});
