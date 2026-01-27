import { Page, expect } from "@playwright/test"
import { ProductsPage } from "./ProductsPage";
import { CartPage } from "./CartPage";
import { AuthPage } from "./AuthPage";

export class HomePage{
    private page: Page

    constructor(page: Page){
        this.page = page
    }

    async goTo(){
        await this.page.goto('/');
    }

    async goToProductsPage(){
        await this.page.getByRole('link', {name: 'Products'})
        return new ProductsPage(this.page);
    }

    async goToCartPage(){
        await this.page.getByRole('link', {name: 'Cart'})
        return new CartPage(this.page);
    }

    async goToAuthPage(){
        await this.page.getByRole('link', {name: 'Signup / Login'}).click()
        return new AuthPage(this.page);
    }

    async browseForCategory(){
        const kidsPanel = this.page.locator('.panel-default', { has: this.page.locator('a[href="#Kids"]') });
        await kidsPanel.getByRole('link', { name: /kids/i }).click();
        const subMenu = this.page.locator('#Kids');
        await subMenu.getByRole('link', { name: 'Dress', exact: true }).click();
        await expect(this.page.locator('h2.title')).toContainText('Kids - Dress Products');
    }
}