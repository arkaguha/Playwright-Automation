exports.cartPage = class cartPage {
  constructor(page) {
    this.page = page;
    this.noOfProducts = "//tbody[@id='tbodyid']/tr/td[2]";
  }

  async checkProductInCart(productName) {
    const productsInCart = await this.page.$$(this.noOfProducts);
    console.log(productsInCart.length);
    for (const product of productsInCart) {
      console.log(await product.textContent());
      if (productName === (await product.textContent())) {
        return true;
        break;
      }
    }
  }

    async removeFromCart(productName) {
       const productsInCart = await this.page.$$(this.noOfProducts);
    for (const product of productsInCart) {
      console.log(await product.textContent());
      if (productName === (await product.textContent())) {
        await this.page.locator('//*[@id="tbodyid"]/tr/td[4]/a').click();
          console.log("Product removed from cart");
         return true
      }
    }
  }
};
