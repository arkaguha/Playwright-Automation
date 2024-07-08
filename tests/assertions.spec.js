/* Reference:https://playwright.dev/docs/test-assertions
1) expect(page).toHaveURL()   Page has URL;
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length
*/

const { test, expect } = require("@playwright/test");

test("Assertions", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");
  // 1) expect(page).toHaveURL()   Page has URL;
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // 2) expect(page).toHaveTitle()
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //3) expect(locator).toBeVisible()
  const logoElement = await page.locator(".header-logo");

  //4) expect(locator).toBeEnabled()  Control is enabled
  const searchStoreBox = await page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  //5) expect(locator).toBeChecked()  Radio/Checkbox is checked

  //radio button
  const genderRadio = await page.locator("#gender-male");
  await genderRadio.click();
  await expect(genderRadio).toBeChecked();

  //check box
  const newsletterCheckbox = await page.locator("#Newsletter");
  await expect(newsletterCheckbox).toBeChecked();

  //6) expect(locator).toHaveAttribute() Element has attribute
  const regButton = await page.locator("#register-button");
  await expect(regButton).toHaveAttribute("type", "submit");

  //7) expect(locator).toHaveText()  Element matches text

  await expect(await page.locator(".page-title h1")).toHaveText("Register"); // full text

  //8) expect(locator).toContainText()  Element contains text
  await expect(await page.locator(".page-title h1")).toContainText("Reg"); // partial text

  // 9) expect(locator).toHaveValue(value) Input has a value
  const emailInput = await page.locator("#Email");
  await emailInput.fill("test@demo");
  await expect(emailInput).toHaveValue("test@demo");

  //10) expect(locator).toHaveCount()  List of elements has given length

  const options = await page.locator('select[name="DateOfBirthMonth"] option');

  await expect(options).toHaveCount(13);
});
