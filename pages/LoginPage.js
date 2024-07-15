// PAGE OBJECT CLASS FOR LOGIN PAGE

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    // this.url = "https://www.demoblaze.com/index.html";
    this.loginLink = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = "//*[@id='logInModal']/div/div/div[3]/button[2]";
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }

  async login(username, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
};
