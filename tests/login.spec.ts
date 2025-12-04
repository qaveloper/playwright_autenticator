import { test } from '../fixtures/testFixtures';
//import credentials from '../data/credentials.json';
//import { assertLoginFailure, assertLoginSuccess } from '../helpers/assertions';

test.describe('Login Tests', async () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.dashboard();
        await loginPage.page.waitForTimeout(2000);
    })

    test('Navigate to Home', async ({ loginPage }) => {
        await loginPage.navigateToHome();
        console.log('funcion navegar home');
        await loginPage.page.waitForTimeout(2000);
    })

    test('Navigate to Practice', async ({ loginPage }) => {
        await loginPage.navigateToPractice();
        console.log('funcion navegar practice');
        await loginPage.page.waitForTimeout(2000);
    })

    test('Navigate to Courses', async ({ loginPage }) => {
        await loginPage.navigateToCourses();
        console.log('funcion navegar practice');
        await loginPage.page.waitForTimeout(2000);
    })

    test('Navigate to Blog', async ({ loginPage }) => {
        await loginPage.navigateToBlog();
        console.log('funcion navegar practice');
        await loginPage.page.waitForTimeout(2000);
    })

    test('Navigate to Contact', async ({ loginPage }) => {
        await loginPage.navigateToContact();
        console.log('funcion navegar practice');
        await loginPage.page.waitForTimeout(2000);
    })
});