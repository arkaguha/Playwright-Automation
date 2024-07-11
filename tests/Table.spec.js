const { test, expect } = require("@playwright/test");
const { log } = require("console");

test("Handle Web Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  // 1) Total number of rows and columns
  const columns = await table.locator("thead tr th");
  console.log(await columns.count());

  const rows = await table.locator("tbody tr");
  console.log(await rows.count());

  expect(await columns.count()).toBe(4);
  expect(await rows.count()).toBe(5);

  // 2)Select checkbox for product 4
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Product 4",
  });

  await matchedRow.locator("input").check();

  // 3) Select Multiple Checkboxes from the table using reusbale functions
  await selectProduct(rows, page, "Product 1");
  await selectProduct(rows, page, "Product 2");
  await selectProduct(rows, page, "Product 3");

  await page.waitForTimeout(3000);

  // 4) print all product details using loop
  for (let index = 0; index < (await rows.count()); index++) {
    const row = rows.nth(index);
    const tds = row.locator("td");

    for (let j = 0; j < (await tds.count()) - 1; j++) {
      //   await tds.nth(j).textContent();
      console.log(await tds.nth(j).textContent());
    }
  }

  // 5) Read Data from all pages in the table

  const pages = await page.locator("#pagination li a");
  console.log(await pages.count());

  for (let p = 0; p < (await pages.count()); p++) {
      if (p > 0) {
        console.log(p);
      await page.locator("#pagination li a").nth(p).click();
      await page.waitForTimeout(3000);
    }
    for (let index = 0; index < (await rows.count()); index++) {
      const row = rows.nth(index);
      const tds = row.locator("td");

      for (let j = 0; j < (await tds.count()) - 1; j++) {
        //   await tds.nth(j).textContent();
        console.log(await tds.nth(j).textContent());
      }
    }
  }
});

async function selectProduct(rows, page, name) {
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });
  await matchedRow.locator("input").check();
}
