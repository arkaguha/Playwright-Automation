const { test, expect } = require("@playwright/test");

test("Mouse Right Click", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  const button = await page.locator(
    "//html/body/div[1]/section/div/div/div/p/span"
  );

  //right Click Action
    await button.click({ button: "right" });
    
    await page.waitForTimeout(3000)
});
