import { Page, expect } from '@playwright/test';

export class InventoryPage{
    private page: Page;
    constructor(page: Page){
        this.page = page
    }

    async isLoaded(){
        await expect(this.page).toHaveURL(/inventory.html/)
    }

    async getProductsCount(){
        return this.page.locator('[data-test="inventory-item"]').count()
    }
}