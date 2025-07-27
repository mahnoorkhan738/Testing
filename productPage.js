module.exports = class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async isLoaded() {
    const title = await this.page.title();
    return title.includes('Products');
  }

  async addToCart() {
    await this.page.click('#add-to-cart-button');
  }

  async goToCart() {
    await this.page.click('#cart-button');
  }
};
