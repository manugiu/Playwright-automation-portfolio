import { Page, expect } from "@playwright/test";
import { RegisterPage } from "./RegisterPage";

export class AuthPage{
    private page: Page

    constructor (page: Page){
        this.page = page;
    }

    async goTo(){
        await this.page.goto('/');
        await this.page.getByRole('link', { name: 'Signup / Login' }).click();
    }


    async startSignUp(email: string, name: string){
        await this.page.locator('[data-qa="signup-name"]').fill(name)
        await this.page.locator('[data-qa="signup-email"]').fill(email)
        await this.page.locator('[data-qa="signup-button"]').click()
        return new RegisterPage(this.page);
    }

    async login(email: string, pass: string){
        await this.page.locator('[data-qa="login-email"]').fill(email)
        await this.page.locator('[data-qa="login-password"]').fill(pass)
        await this.page.locator('[data-qa="login-button"]').click()
    }

    async verifyLoginSuccess(){
        await expect(this.page.getByRole('link', {name: 'Logout'})).toBeVisible()
    }

}

