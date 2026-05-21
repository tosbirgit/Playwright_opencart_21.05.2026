import {Page,Locator} from '@playwright/test';
import { logoutpage } from './logoutpage';
export class MyAccountPage {        

private readonly page: Page;

//locators
private readonly mesheading: Locator;
private readonly linklogout: Locator;


//constructor to initialize the page and locators
constructor(page: Page) {
    this.page = page;
    this.mesheading = page.locator('h2:has-text("My Account")');     
    this.linklogout = page.locator('.list-group-item').and(page.getByText('Logout'));  //locator for logout link
}

//method to get the heading text of my account page
async getMyAccountHeadingText() {

    try{
        const isvisible=await this.mesheading.isVisible();  //check if the heading is visible
        if(isvisible)
        {
            return await this.mesheading.textContent();  //return the heading text if visible
        }
        else
        {
            console.warn('My Account heading is not visible on the page');
            return null;  //return null if heading is not visible
        }
    }
    catch(error)
    {
        console.error(`Error getting My Account heading text: ${error}`);
        return null;  //return null if there is an error
    } 

}

    async clickLogoutLink() {
        try{
            await this.linklogout.click();  //click on logout link
            return new logoutpage(this.page);  //return the logout page object
        }
        catch(error)
        {
            console.error(`Error clicking Logout link: ${error}`);
            throw new Error(`Error clicking Logout link: ${error}`);  //throw an error if there is an error
        }   
    }








     }




