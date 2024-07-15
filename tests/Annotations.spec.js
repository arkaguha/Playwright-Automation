const { test, expect } = require("@playwright/test");

// Only || Skip || Fail || Fixme || Slow

/*
test.only("test1", async ({ page }) => {
  // will execute only this test1
  console.log("test1");
});
*/

/*
test.skip("test2", async ({ page }) => {
  // this will skip the test and show skipped when executed

  console.log("test2");
});
*/

/*
test("test3", async ({ page, browserName }) => {
  if (browserName == "chromium") {
    test.skip();
  }
  // will execute only if browser is anything but chromium
  console.log("test3");
});
*/

/*
test("test4", async ({ page }) => {
  console.log("test4"); // this will be executed
  test.fixme();
  // will skip the test after the test.fixme() call
  console.log("test4");
});
*/

/*
test("test5", async ({ page, browserName }) => {
  test.fail();
  // Expectation is fail but will pass as assertions pass the test
  console.log("test5");
  expect(true).toBe(true);
  expect(1).toBe(2); // test will pass as expect and actual both fail
});
*/

/*
test("test6", async ({ page, browserName }) => {
  console.log("test6");
  if (browserName == "firefox") {
    test.fail(); //  // test will pass as expect and actual both fail
  }
});
*/

// SLOW || Set the timeout in config.js || test will pass based on time configuration
test("test7", async ({ page, browserName }) => {
    test.slow(); // Triple time will be given over set timeout
    // OR test.setTimeout(5000) can also fix the slow loading
  console.log("test7");
  await page.goto("https://www.demoblaze.com/index.html");
});
