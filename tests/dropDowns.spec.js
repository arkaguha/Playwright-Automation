const { test, expect } = require("@playwright/test");

test("Handle Drop-Downs", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  //   await page.waitForSelector("//select[@id='country']//option");

  const items = await page.$$("//select[@id='country']//option");
  const country = await page.locator("#country option");
  let status = false;

  for (const item of items) {
    let option = await item.textContent();

    // console.log(await item.textContent());
    // 4) Check presence of value in the dropdown - approach 2 using loop

    if (option == "India") {
      //or value = await item.textContent(); value.includes('India')
      console.log("india present");
      status = true;
      // break; // breaks the loop once India is found and printed
    }

    // 5) Select option from drop down using loop
    if (option.includes("France")) {
      await page.selectOption("#country ", option);
      // break;
    }
  }
  await expect(status).toBeTruthy();

  await page.locator("#country").selectOption("India"); // or .selectOption({label: 'India'}) or {value:'uk'} or {index: 2}
  await page.selectOption("#country", "Canada");

  //Assertions
  await expect(items.length).toBe(10); //same assertion but diff method
  await expect(country).toHaveCount(10); //same assertion but diff method

  // Check presence of value in drop down

  const test1 = await page.locator("#country");

  const test2 = await page.locator("#country").textContent();

  await expect(test1).toContainText("India");
  await expect(test2.includes("abc")).toBeFalsy();

  //   await page.waitForTimeout(5000);
});
