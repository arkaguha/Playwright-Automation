const { test, expect } = require("@playwright/test");

test("Drag And Drop", async ({ page }) => {
  await page.goto(
    "http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html"
  );

  const rome = await page.locator("//div[@id='dropContent']//div[@id='box6']");
  const italy = await page.locator("//div[@id='box106']");

  //Approach 1
  await rome.hover();
  await page.mouse.down();

  await italy.hover();
    await page.mouse.up();
    
    //Approach 2
    // await rome.dragTo(italy)
    await page
      .locator("//div[@id='dropContent']//div[@id='box3']")
        .dragTo(await page.locator("//div[@id='box103']"));
    
    await page.waitForTimeout(3000)
});
