import {Page,Locator} from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    //locators
    private readonly txtemailaddress: Locator;
    private readonly txtpassword: Locator;
    private readonly btnlogin: Locator; 
    private readonly txterrorMessage: Locator;
    


    //constructor to initialize the page and locators
    constructor(page: Page) {
        this.page = page;
        this.txtemailaddress = page.locator('#input-email');
        this.txtpassword = page.locator('#input-password');
        this.btnlogin = page.locator('//input[@value="Login"]');
        this.txterrorMessage = page.locator('.alert-danger');   

    }

    // Add methods for interacting with the login page elements

    async enterEmailAddress(email: string) {
        await this.txtemailaddress.fill(email);
    }

    async enterPassword(password: string) {
        await this.txtpassword.fill(password);
    }

    async clickLoginButton() {
        await this.btnlogin.click();
    }       

    async login(email: string, password: string) {
        await this.enterEmailAddress(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }   

    async getErrorMessage() {
        return await this.txterrorMessage.textContent();
    }
}