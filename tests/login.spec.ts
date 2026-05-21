/**
 * Test Case: Login with Valid Credentials
 * * Tags: @master @sanity @regression
 * * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/loginpage';
import { MyAccountPage } from '../pages/myaccountpage';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => 
{ 
    config = new TestConfig();    //load config url and credentials
    await page.goto(config.appUrl);  //navigate tot he appurl
   
   //initialize page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);

});


test.afterEach(async ({ page }) =>
{
    await page.close();  //close the browser after each test
});






test('user login test @master @sanity @regression', async () => {
        

        //navigate to login page via home page
        await homePage.clickOnMyAccount();  //click on my account link
        await homePage.clickOnLogin();  //click on login link
        //Enter valid credentials and log in

        await loginPage.enterEmailAddress(config.email);  //enter email address
        await loginPage.enterPassword(config.password);
        await loginPage.clickLoginButton();  //click on login button

        //Verify successful login by checking 'My Account' page presence
        const headingText = await myAccountPage.getMyAccountHeadingText();  //get the heading text of my account page
        expect(headingText).toBe('My Account');  //assert that the heading text is 'My Account'


       //npx playwright test tests/login.spec.ts --headed






});