import { Page } from "@playwright/test";
import  urls from '../data/urls.json';
import { SELECTORS} from '../selectors/selectors';
import { Locator } from "@playwright/test";

export class LoginPage{
    // private page : Page;
    // private usernameInput = '#username';
    // private passwordInput = '#password';
    // private submitButton = '#submit';
    // private failureMessage = '#error';
    // private successMessage = 'p.has-text-align-center strong'
    
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly failureMessage: Locator
    readonly successMessage: Locator
    readonly home: Locator
    readonly practice: Locator
    readonly courses: Locator
    readonly blog: Locator
    readonly contact: Locator

    constructor(page: Page){
        this.page = page;
        this.usernameInput = this.page.locator(SELECTORS.usernameInput);
        this.passwordInput = this.page.locator(SELECTORS.passwordInput);
        this.submitButton = this.page.locator(SELECTORS.submitButton);
        this.failureMessage = this.page.locator(SELECTORS.failureMessage);
        this.successMessage = this.page.locator(SELECTORS.successMessage);
        this.home = this.page.getByRole('link', { name: SELECTORS.home });
        this.practice = this.page.locator(SELECTORS.practice);
        this.courses = this.page.getByRole('link', { name: SELECTORS.courses });
        this.blog = this.page.getByRole('link', { name: SELECTORS.blog });
        this.contact = this.page.getByRole('link', { name: SELECTORS.contact });
    }

    async goto(){
        await this.page.goto(urls.login);
    }

    async dashboard(){
        await this.page.goto(urls.success);
    }
    
    async fillUsername(usernameInput: string){
        await this.usernameInput.fill(usernameInput)
    }

    async enterPassword(passwordInput: string){
        await this.passwordInput.fill(passwordInput);
    }    

    async submit(){
        await this.submitButton.click();
    }

    async getFailureMessage(){
        return this.failureMessage.innerText();
    }

    async getSucessMessage(){
        return this.successMessage.innerText();
    }

    async navigateToHome(){
        await this.home.click();
    }

    async navigateToPractice(){
        await this.practice.click();
    }
    async navigateToCourses(){
        await this.courses.click();
    }
    async navigateToBlog(){
        await this.blog.click();
    }
    async navigateToContact(){
        await this.contact.click();
    }
}