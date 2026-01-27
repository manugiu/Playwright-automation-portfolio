import { Page, expect } from "@playwright/test";

export class PaymentPage{
    private page: Page;

    constructor(page: Page){
        this.page = page
    }

    async fillPaymentInfo(name: string, cardNumber: string, cvc: string, expMonth: string, expYear: string){
        await this.page.locator('[data-qa="name-on-card"]').fill(name)
        await this.page.locator('[data-qa="card-number"]').fill(cardNumber)
        await this.page.locator('[data-qa="cvc"]').fill(cvc)
        await this.page.locator('[data-qa="expiry-month"]').fill(expMonth)
        await this.page.locator('[data-qa="expiry-year"]').fill(expYear)
        await this.page.locator('.submit-button').click()
    }

    async verifyOrderPlaced(){
        await expect(this.page.locator('[data-qa="order-placed"]')).toContainText('Order Placed!')

    }

}