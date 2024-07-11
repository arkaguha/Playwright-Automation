const { test, expect } = require("@playwright/test");

test("Handle Inner Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // const frames = await page.frames()
  // Approach 1
  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  frame3.locator("input[name='mytext3']").fill("Hello");

  //Approcah 2
  //   const mainFrame = await page
  //     .frameLocator("frame[src='frame_3.html']")
  //     .locator("input[name='mytext3']");

  //   mainFrame.fill("Hello");

  // Nested Frames
    const childFrames = await frame3.childFrames();
    const childFrame = childFrames[0].locator("//*[@id='i5']/div[3]/div").check()

  await page.waitForTimeout(3000);
});
