const { test, expect } = require("@playwright/test");

test("Upload Files", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/upload");

  await page
    .locator("//input[@id='fileInput']")
    .setInputFiles("tests/testFile.txt");

  await page.waitForTimeout(3000);
});

test.only("Upload Multiple Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page
    .locator("//input[@id='filesToUpload']")
    .setInputFiles(["tests/testFile.txt", "tests/testFile2.txt"]);

  await expect(page.locator("#fileList li:nth-child(1)")).toHaveText(
    "testFile.txt"
  );

  await expect(page.locator("#fileList li:nth-child(2)")).toHaveText(
    "testFile2.txt"
  );

  // REmoving files
    await page.locator("//input[@id='filesToUpload']").setInputFiles([]);
    
    await expect(page.locator("//li[normalize-space()='No Files Selected']")).toHaveText("No Files Selected")

  await page.waitForTimeout(3000);
});
