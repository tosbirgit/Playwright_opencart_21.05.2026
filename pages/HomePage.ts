import { test, expect, Page,Locator } from '@playwright/test';
import { TestConfig } from '../test.config';

export class HomePage
{ 

    private readonly page:Page;
    //locators
    private readonly lnkmyaccount:Locator;
    private readonly lnkregister:Locator;
    private readonly lnklogin:Locator;
    private readonly textsearchbox:Locator;
    private readonly btnsearch:Locator;
    
    


    //constructor
    constructor(page:Page)
    {
        this.page=page;
        this.lnkmyaccount=this.page.getByRole('link', { name: ' My Account' });
        this.lnkregister=this.page.getByRole('link', { name: 'Register' });
        this.lnklogin=this.page.getByRole('link', { name: 'Login' });
        this.textsearchbox=this.page.getByRole('textbox', { name: 'Search' })
        this.btnsearch=this.page.locator('#search').getByRole('button');
    }

    //actions and methods


    //check if homepage is displayed
    async isHomePageDisplayed()
    {
        let title=await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }


//click on my account link
async clickOnMyAccount()
{
    
    try
    {
       await this.lnkmyaccount.click();
    }
    catch(error)
    {
        console.log(`Error clicking on My Account link: ${error}`);
        throw error;   
    }
}

//click on register link
async clickOnRegister()
{
    try
    {
       await this.lnkregister.click();
    }
    catch(error)
    {
        console.log(`Error clicking on Register link: ${error}`);
        throw error;   
    }
}


async isLoginLinkVisible()
{
    try
    {
       return await this.lnklogin.isVisible();
    }

    catch(error)
    {
        console.log(`Error checking visibility of Login link: ${error}`);
        throw error;   
    }



}






      async clickOnLogin()
      {
         try
         {
            await this.lnklogin.click();
         }  
         catch(error)         {
            console.log(`Error clicking on Login link: ${error}`);
            throw error;   
         }


      }


          //enter product name inthe search box
    async enterProductNameInSearchBox(productName:string)
    {
             try
             {
                await this.textsearchbox.fill(productName);
             }  
             catch(error)
             {
                console.log(`Error entering product name in search box: ${error}`);
                throw error;   
             }

    }

    //click on search button
    async clickOnSearchButton()
    {   
         try{
            await this.btnsearch.click();
         }
         catch(error)
         {
            console.log(`Error clicking on search button: ${error}`);
            throw error;   
         }


    }


}