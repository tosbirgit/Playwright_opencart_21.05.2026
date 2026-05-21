import { test, expect, Page,Locator } from '@playwright/test';
import { TestConfig } from '../test.config';

export class RegistrationPage
{
    
    //locators
    private readonly page:Page;
    private readonly textfirstname:Locator;
    private readonly textlastname:Locator;
    private readonly textemail:Locator;
    private readonly texttelephone:Locator;
    private readonly textpassword:Locator;
    private readonly textconfirmpassword:Locator;
    private readonly checkboxprivacy:Locator
    private readonly btncontinue:Locator;
    private readonly confmsg:Locator;


    constructor(page:Page)
    {
        this.page=page; 

        //initializing locators with the default locators
        this.textfirstname=this.page.getByPlaceholder('First Name');
        this.textlastname=this.page.getByPlaceholder('Last Name');
        this.textemail=this.page.getByPlaceholder('E-Mail');
        this.texttelephone=this.page.getByPlaceholder('Telephone');
        this.textpassword=this.page.locator('#input-password');
        this.textconfirmpassword=this.page.getByPlaceholder('Password Confirm');
        this.checkboxprivacy=this.page.locator('input[name="agree"][type="checkbox"]');
        this.btncontinue=this.page.getByRole('button', { name: 'Continue' });
        this.confmsg=this.page.locator('#content').getByRole('heading', { name: 'Your Account Has Been Created!' });
    


    }


    //actions and methods

    //enter first name
    async enterFirstName(firstname:string)
    {
        await this.textfirstname.fill(firstname);
    }   

    //enter last name
    async enterLastName(lastname:string)
    {
        await this.textlastname.fill(lastname);
    }   

    //enter email
    async enterEmail(email:string)
    {
        await this.textemail.fill(email);
    }   


    //enter telephone
    async enterTelephone(telephone:string)
    {
        await this.texttelephone.fill(telephone);
    }

    //enter password
    async enterPassword(password:string)
    {
        await this.textpassword.fill(password);
    }

    //enter confirm password
    async enterConfirmPassword(confirmpassword:string)
    {
        await this.textconfirmpassword.fill(confirmpassword);
    }   
    
    //click on privacy policy checkbox
    async clickOnPrivacyPolicyCheckbox()
    {
        await this.checkboxprivacy.check();
    }

    //click on continue button
    async clickOnContinueButton()
    {
        await this.btncontinue.click();
    }   

    //get confirmation message
    async getConfirmationMessage()
    {
        return await this.confmsg.textContent();
    }


      
    //complete registration process
    async register(firstname:string,lastname:string,email:string,telephone:string,password:string,confirmpassword:string)
    {
        await this.enterFirstName(firstname);
        await this.enterLastName(lastname);
        await this.enterEmail(email);
        await this.enterTelephone(telephone);
        await this.enterPassword(password);
        await this.enterConfirmPassword(confirmpassword);
        await this.clickOnPrivacyPolicyCheckbox();
        await this.clickOnContinueButton();
        await expect(this.confmsg).toBeVisible();
    }





}