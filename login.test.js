const { chromium } = require('playwright');
const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');

test('User can log in with valid credentials', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await loginPage.goto();
  await loginPage.login('valid_user', 'valid_pass');

  expect(await productPage.isLoaded()).toBe(true);

  await browser.close();
});