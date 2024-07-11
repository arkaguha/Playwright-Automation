const { test, expect } = require("@playwright/test");

test.skip("Alert with OK", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling or Dialog window Handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click("(//div[@class='widget-content']//button)[2]");

  //   await expect();
  await page.waitForTimeout(3000);
});

test.skip("Confirmation Dialog Box with OK and Cancel", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling or Dialog window Handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");

    await dialog.accept(); // Accept or OK
    // await dialog.dismiss(); // Cancel
  });

  await page.click("(//div[@class='widget-content']//button)[3]");
  await expect(page.locator("//p[@id='demo']")).toContainText(
    "You pressed OK!"
  );
  //   await expect();
  await page.waitForTimeout(3000);
});

test("Prompt", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling or Dialog window Handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    // await dialog.type("Test User"); // Type in prompt input field

    await dialog.accept("Test"); // Accept or OK
    // await dialog.dismiss(); // Cancel
  });

  await page.click("(//div[@class='widget-content']//button)[4]");
  await expect(page.locator("//p[@id='demo']")).toContainText(
    "Hello Test! How are you today?"
  );

  //   await expect();
  await page.waitForTimeout(3000);
});
