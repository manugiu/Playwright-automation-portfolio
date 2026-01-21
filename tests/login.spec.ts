import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto()
  await loginPage.login('standard_user', 'secret_sauce')

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.isLoaded()
  const count = await inventoryPage.getProductsCount()
  console.log(count)
  await expect(count).toEqual(6)
});


test('should failed at login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("invalid_user", "secret_sauce")
  await expect(page.locator('[data-test="error"]')).toBeVisible()
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service')
});



