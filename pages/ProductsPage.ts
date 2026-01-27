import { Page, expect } from '@playwright/test'
import { CartPage } from './CartPage';

export class ProductsPage {
    private page: Page;

    constructor (page: Page){
        this.page = page;
    }

    async goTo(){
        await this.page.goto('/products');
    }

    async addFirstProductToCart(){
        const name = await this.page.locator('.productinfo p').first().innerText();
        await this.page.locator('.add-to-cart').first().click();    
        return name;
    }

    async verifyFirstProductAdded(){
        const modal = this.page.locator('#cartModal')
        await expect(modal.locator('.modal-title')).toHaveText('Added!')
    }

    async searchProduct(product: string){
        await this.page.getByPlaceholder('Search Product').fill(product)
        await this.page.locator('#submit_search').click()
    }

    async verifyProductInResults(product: string){
        const productCard = this.page.locator('.single-products').filter({ hasText: product });
        await expect(productCard).toBeVisible()   
    }

    async verifyNoResults(product: string){
        await expect(this.page.locator('.single-products')).toHaveCount(0)
    }

    async goToCart(){
        await this.page.getByRole('button', {name: 'Continue Shopping'}).click()
        await this.page.getByRole('link', {name: 'Cart'}).click();
        return new CartPage(this.page);
    }

}