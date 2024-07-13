const { test, expect } = require("@playwright/test");


test.beforeAll(async () => {
    console.log("Before all tests");
  });

test.afterAll(async () => {
    console.log("After all tests");
});
  
test.beforeEach(async () => {
    console.log("Before each tests");
    
})

test.afterEach(async () => {
    console.log("After each tests");

})
test.describe("Group1", () => {
  test("1", async ({ page }) => {
    console.log("1");
  });

  test("2", async ({ page }) => {
    console.log("2");
  });
});

test.describe("Group2", () => {
  test("3", async ({ page }) => {
    console.log("3");
  });

  test("4", async ({ page }) => {
    console.log("4");
  });
});
