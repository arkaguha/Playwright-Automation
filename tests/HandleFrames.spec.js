const { test, expect } = require("@playwright/test");

test("Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // Total Frames
  const allFrames = await page.frames();
  console.log(allFrames.length);

  // Approach 1: using name or Url
  //   const fraame = await page.frame("name"); // if name is present
  //   const frame1 = await page.frame({
  //     url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  //   });

  //   await frame1.fill("//input[@name='mytext1']", "hello");

  // Approach 2: Using Frame Locator
  const inputBox = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("//input[@name='mytext1']");
  inputBox.fill("hello");
  await page.waitForTimeout(3000);
});
