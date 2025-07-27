module.exports = class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(username, password) {
    await this.page.type('#username', username);
    await this.page.type('#password', password);
    await this.page.click('#login-button');
  }
};