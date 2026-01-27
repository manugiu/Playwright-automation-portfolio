import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { AuthPage } from '../pages/AuthPage';

    test('should register an user', async ({ page }) => {
        const name = 'Test User'
        const email = `user${Date.now()}@test.com`
        const password = 'pass'
        const authPage = new AuthPage(page);
        await authPage.goTo();
        const regPage = await authPage.startSignUp(email, name);
        await regPage.fillRegistrationForm(email, name);
        await regPage.submitCreateAccount();
        await regPage.verifyRegistrationSuccess();
    })

    test('should login with registered user', async ({page}) => {
        const authPage = new AuthPage(page);
        await authPage.goTo()
        await authPage.login('juajua@gmail.com', 'hola')
        await authPage.verifyLoginSuccess()
    })


