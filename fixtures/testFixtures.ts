import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

type Fixtures = {
    loginPage: LoginPage;
}

export const test = base.extend<Fixtures>({
    loginPage: async ({page},use)=>{
        const loginpage = new LoginPage(page);
        await use(loginpage);
    }
});

export const expect = base.expect;



