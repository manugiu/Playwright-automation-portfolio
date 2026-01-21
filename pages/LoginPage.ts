import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page
  }
  
  async goto() {
    await this.page.goto('https://www.saucedemo.com/')
  }
  
  async login(user: string, pass: string) {
    await this.page.getByPlaceholder('Username').fill(user)
    await this.page.getByPlaceholder('Password').fill(pass)
    await this.page.click('[data-test="login-button"]');
  }
}