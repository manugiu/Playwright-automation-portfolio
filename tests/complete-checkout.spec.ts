import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';

test('should complete checkout for a product', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goTo()
    const authPage = await homePage.goToAuthPage()
    await authPage.login('juajua@gmail.com', 'hola');

    const productsPage = await homePage.goToProductsPage();
    const productName = await productsPage.addFirstProductToCart()
    await productsPage.verifyFirstProductAdded()
    const cartPage = await productsPage.goToCart()

    await expect(page).toHaveURL(/view_cart/)

    const checkoutPage = await cartPage.proceedToCheckout()

    await cartPage.verifyProductInCart(productName)

    const paymentPage = await checkoutPage.placeOrder()
    await paymentPage.fillPaymentInfo("Juan Kintero", '91218', '912', "09", '12')
    
    await paymentPage.verifyOrderPlaced()

});