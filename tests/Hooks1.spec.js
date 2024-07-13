const { test, expect } = require("@playwright/test");

test("Home Page Test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  //login
  await page.locator("#login2").click();

  await page.fill("#loginusername", "pavanol");

  await page.fill("#loginpassword", "test@123");

  await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');

  //home Pgae
  const products = await page.$$(".hrefch");
  await expect(products).toHaveLength(9);

  //logout
  await page.locator("//a[@id='logout2']").click();
});

test("Add Product to Card Test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  //login
  await page.locator("#login2").click();

  await page.fill("#loginusername", "pavanol");

  await page.fill("#loginpassword", "test@123");

  await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');

  //Add to Cart
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  await page.locator("//button[normalize-space()='Add to cart']").click(); // Unable to find this locator

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });

  //logout
  await page.locator("//a[@id='logout2']").click();
});
