exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.productList = "//*[@id='tbodyid']/div[2]/div/div/h4/a";
    this.addToCartButton = "//*[@id='tbodyid']/div[2]/div/a";
    this.cartButton = "//*[@id='navbarExample']/ul/li[4]/a";
  }

  async addProductToCart(productName) {
    const productList = await this.page.$$(this.productList);
    for (const product of productList) {
      if (productName === (await product.textContent())) {
        await product.click();

        break;
      }
    }

    await this.page.on("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }
    });

    await this.page.locator(this.addToCartButton).click();
  }

  async gotoCart() {
    await this.page.locator(this.cartButton).click();
  }
};
