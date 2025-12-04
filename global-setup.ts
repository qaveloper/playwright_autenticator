import { chromium } from 'playwright';
import  urls  from './data/urls.json';
import credentials from './data/credentials.json';
import  {SELECTORS}  from './selectors/selectors';  

export default async function globalSetup(){
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(urls.login)
    await page.fill(SELECTORS.usernameInput, credentials.valid.username);
    await page.fill(SELECTORS.passwordInput, credentials.valid.password);
    await page.click(SELECTORS.submitButton);

    await page.waitForSelector("text=Logged In Successfully");

    await context.storageState({ path: './.auth/user.json' });

    await browser.close();
}












    // await page.waitForURL(urls.success);