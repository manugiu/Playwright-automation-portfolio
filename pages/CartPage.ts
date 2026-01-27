import { Page, expect } from "@playwright/test";
import { AuthPage } from "./AuthPage";
import { CheckoutPage } from "./CheckoutPage";

export class CartPage{
    private page: Page;

    constructor(page: Page){
        this.page = page
    }

    async verifyProductInCart(productName: string){
        const productRow = this.page.locator('tr').filter({hasText: productName});
        const productDescription = productRow.locator('.cart_description')
        await expect(productDescription.locator('h4')).toContainText(productName)
    }

    async removeProduct(){
        await this.page.locator('.cart_quantity_delete').click()
    }

    async verifyEmptyCart(){
        await expect(this.page.locator('#empty_cart')).toContainText('Cart is empty!')
    }

    async proceedToCheckout(){
        await this.page.locator('.check_out').click()
        return new CheckoutPage(this.page);
    }

    async verifyInCartPage(){
        await expect(this.page).toHaveURL(/view_cart/)
    }

}