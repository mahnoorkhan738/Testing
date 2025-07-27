const { chromium } = require('playwright');
const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');
const CheckoutPage = require('../pages/checkoutPage');

test('User can place an order and checkout successfully', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('valid_user', 'valid_pass');
  expect(await productPage.isLoaded()).toBe(true);

  await productPage.addToCart();
  await productPage.goToCart();
  await page.click('#checkout');

  await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
  await checkoutPage.finishCheckout();

  const confirmation = await checkoutPage.getConfirmationMessage();
  expect(confirmation).toContain('THANK YOU FOR YOUR ORDER');

  await browser.close();
});
