const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { HomePage } = require("../pages/HomePage");
const { cartPage } = require("../pages/CartPage");

// test("", async ({ page }) => {
//   //     ||  WithOut POM ||
//   await page.goto("https://www.demoblaze.com/index.html");

//   await page.locator("#login2").click();
//   await page.locator("#loginusername").fill("pavanol");
//   await page.locator("#loginpassword").fill("test@123");
//   await page.locator('//a[@id='login2']').click();
// });

//////////////       with POM         ///////////
test("test", async ({ page }) => {
  // LOGIN
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login("aguha", "aguha@123");
  await page.waitForTimeout(3000);

  // HOME
  const home = new HomePage(page);
  home.addProductToCart("Nokia lumia 1520");
  await page.waitForTimeout(3000);
  home.gotoCart();

  // CART

  const cart = new cartPage(page);
  await page.waitForTimeout(3000);

  const status = cart.checkProductInCart("Nokia lumia 1520");
    await page.waitForTimeout(3000);

  const removeStatus = cart.removeFromCart("Nokia lumia 1520");

  expect(status).toBeTruthy();
  expect(removeStatus).toBeTruthy();
});
