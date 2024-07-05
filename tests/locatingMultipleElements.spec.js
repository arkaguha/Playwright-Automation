const { test, expect } = require("@playwright/test");

test("LocateMultipleElements", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  //   const links = await page.$$("a");

  //   for (const link of links) {
  //     console.log(await link.textContent());
  //   }
  await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
  const phones = await page.$$("//div[@id='tbodyid']//div//h4/a");
  //   console.log(phones.textContent());
  for (const phone of phones) {
    console.log(await phone.textContent());
  }

  await page.close();
});
