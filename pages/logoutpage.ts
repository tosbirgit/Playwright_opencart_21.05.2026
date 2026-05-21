import {Page, test, expect,Locator} from '@playwright/test';
import { HomePage } from './HomePage';


export class logoutpage {

    private readonly page: Page;
    //locators 
    private readonly btnContinue: Locator;

    //construnctor to initialize the page and locators
    constructor(page: Page) {
        this.page = page;
        this.btnContinue = page.locator('.btn btn-primary');  //locator for continue button 
    }
 




    async clickcontinueButton() {
        await this.btnContinue.click();  //click on continue button
        return new HomePage(this.page);  //return the home page object  
    } 
    
    async iscontinueButtonVisible() {   
    
    
    return await this.btnContinue.isVisible();  //return true if continue button is visible, otherwise return false 
    }

}