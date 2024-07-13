const { test, expect } = require("@playwright/test");

test("test1@sanity", async ({ page }) => {
  console.log("test1",);
  
});


test("test2@sanity", async ({ page }) => {
  console.log("test2");
});

test("test3@reg", async ({ page }) => {
  console.log("test3");
});

test("test4@reg", async ({ page }) => {
  console.log("test4");
});

test("test5@sanity@reg", async ({ page }) => {
  console.log("test5"); // exe as npx... -g "@sanity@reg" 
});

// test("test6", async ({ page }) => {
//   console.log("test6");
// });

// Executing the program with -g --grep @sanity will throw an error - [ error: option '-g, --grep <grep>' argument missing] SO USE THIS INSTEAD -g "@sanity" (need to verify why so)


// IMPORTant 
/*
1. for sanity npx playwright test Tags.spec.js -g "@sanity" [1,2,5] will be executed
2. for regression npx playwright test Tags.spec.js -g "@reg" [3,4,5] will be executed
3. for both sanity and regression npx playwright test Tags.spec.js -g "@sanity|@reg" [5] will be executed
4. to test only sanity on [5] use : -g "@sanity" "invert" or --grep @sanity --grep-invert @reg as shown in video 32,https://www.youtube.com/watch?v=qwzwAuN1OOI&list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-&index=32, time stamp: 10:42
5. Inverse the point 4 to execute only reg on test 5 
*/