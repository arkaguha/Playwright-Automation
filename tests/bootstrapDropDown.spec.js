const { test, expect } = require("@playwright/test");

test("Bootstrap Drop-Downs", async ({ page }) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

  await page.locator(".multiselect").click();

  //1

//   const options = await page.locator("ul li input"); // 'ul>li input' - ## "ul>li input" uses a child combinator (>) which selects <input> elements that are immediate children of <li> elements, which are in turn immediate children of <ul> elements. This is more restrictive and would only match <input> elements that are direct children of <li> elements under <ul>.
//   await expect(options).toHaveCount(11); // For most cases where elements are nested within each other (like lists with nested items), ("ul li input") is generally more appropriate and flexible.

    //2
    //const options = await page.$$('ul>li label input')
    //await expect(options.length).toBe(11)

    //3 Select Options from dropDown
    const options = await page.$$('ul>li label')

 /*   for (let option of options) {
        const value = await option.textContent()
        // console.log(`Value is ${value}`);

        if (value.includes('Angular') || value.includes('Java')) {
            await option.click()
        }
    }
*/
    
    // Deselect

    for (let option of options) {
      const value = await option.textContent();
      // console.log(`Value is ${value}`);

      if (value.includes("HTML") || value.includes("CSS")) {
        await option.click();
      }
    }
    
  await page.waitForTimeout(3000);
});
