module.exports = class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.page.type('#first-name', firstName);
    await this.page.type('#last-name', lastName);
    await this.page.type('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  async finishCheckout() {
    await this.page.click('#finish');
  }

  async getConfirmationMessage() {
    return await this.page.textContent('.complete-header');
  }
};