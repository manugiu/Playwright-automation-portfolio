import { Page, expect } from "@playwright/test";

export class RegisterPage{
    private page: Page

    constructor (page: Page){
        this.page = page;
    }

    async fillRegistrationForm(email: string, name: string) {
        await this.page.locator('#uniform-id_gender1').check();
        await this.page.locator('[data-qa="name"]').fill(name);
        await this.page.locator('[data-qa="password"]').fill('Test123!');
        await this.page.locator('[data-qa="days"]').selectOption('15');
        await this.page.locator('[data-qa="months"]').selectOption('May');
        await this.page.locator('[data-qa="years"]').selectOption('1990');
        await this.page.locator('[data-qa="first_name"]').fill('Test');
        await this.page.locator('[data-qa="last_name"]').fill('User');
        await this.page.locator('[data-qa="address"]').fill('123 Main St');
        await this.page.locator('[data-qa="country"]').selectOption('United States');
        await this.page.locator('[data-qa="state"]').fill('California');
        await this.page.locator('[data-qa="city"]').fill('LA');
        await this.page.locator('[data-qa="zipcode"]').fill('90001');
        await this.page.locator('[data-qa="mobile_number"]').fill('1234567890');
}

    async submitCreateAccount(){
        await this.page.locator('[data-qa="create-account"]').click()
    }

    async verifyRegistrationSuccess(){
        await expect(this.page).toHaveURL(/account_created/)
        await expect(this.page.locator('[data-qa="account-created"]')).toContainText('Account Created!')
    }


}