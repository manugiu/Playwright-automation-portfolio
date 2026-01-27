import { Page, expect } from "@playwright/test";
import { PaymentPage } from "./PaymentPage";

export class CheckoutPage{
    private page: Page;

    constructor(page: Page){
        this.page = page
    }

    async placeOrder(){
        await this.page.locator('.check_out').click()
        return new PaymentPage(this.page);
    }
}