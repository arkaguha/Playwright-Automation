const { test, expect } = require("@playwright/test");

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.fill("#datepicker", "03/15/2024");

  //date picker
  const year = "2026";
  const month = "March";
  const date = "20";

  await page.click("#datepicker"); //opens calender

  while (true) {
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    console.log(currentMonth, currentYear);
    if (currentYear == year && currentMonth == month) {
      break;
    }

    await page
      .locator("//span[@class='ui-icon ui-icon-circle-triangle-e']")
      .click();
  }

//   const dates = await page.$$("//a[@class='ui-state-default']");
//   for (const dt of dates) {
//     if ((await dt.textContent()) == date) {
//       //   console.log(dt);
//       await dt.click();
//       break;
//     }
//   }

  //date selection -without loop
  await page.click(`//a[@class='ui-state-default'][text()=${date}]`);

  await page.waitForTimeout(5000);
});
