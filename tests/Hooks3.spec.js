const { test, expect } = require("@playwright/test");

let page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/index.html");
  //login
  await page.locator("#login2").click();

  await page.fill("#loginusername", "pavanol");

  await page.fill("#loginpassword", "test@123");

  await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');
});

test.afterAll(async ({ browser }) => {
  //logout
  await page.locator("//a[@id='logout2']").click();
});

test("Home Page Test", async () => {
  //home Pgae
  await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
  const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
  await expect(products).toHaveLength(9);
});

test("Add Product to Card Test", async () => {
  //Add to Cart
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

  //   await page.waitForSelector("//button[normalize-space()='Add to cart']");
  await page.locator("//div//a[@class='btn btn-success btn-lg']").click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });
});
