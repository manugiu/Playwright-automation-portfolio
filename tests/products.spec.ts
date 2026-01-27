import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';


test('should add product to the cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await productsPage.goTo()
  const productName = await productsPage.addFirstProductToCart()
  await productsPage.verifyFirstProductAdded()
  const cartPage = await productsPage.goToCart()
  await cartPage.verifyInCartPage()

});


test('should remove product to the cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await productsPage.goTo()
  const productName = await productsPage.addFirstProductToCart()
  await productsPage.verifyFirstProductAdded()
  const cartPage = await productsPage.goToCart()
  await cartPage.verifyInCartPage()
  await cartPage.verifyProductInCart(productName)
  await cartPage.removeProduct()
  await cartPage.verifyEmptyCart()

});

test('should search for a product', async ({ page }) => {
  const productName = 'Soft Stretch Jeans'
  const productsPage = new ProductsPage(page);
  await productsPage.goTo()
  await productsPage.searchProduct(productName)
  await productsPage.verifyProductInResults(productName)  
  
});


test('should show no results for invalid search', async ({ page }) => {
  const productName = 'Inexistent product'
  const productsPage = new ProductsPage(page);
  await productsPage.goTo()
  await productsPage.searchProduct(productName)
  await productsPage.verifyNoResults(productName)  
  
});

test('should show no results for invalid search', async ({ page }) => {
  const productName = 'Inexistent product'
  const productsPage = new ProductsPage(page);
  await productsPage.goTo()
  await productsPage.searchProduct(productName)
  await productsPage.verifyNoResults(productName)  
  
});

test('should show products for category', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goTo()
  await homePage.browseForCategory()
  
});
