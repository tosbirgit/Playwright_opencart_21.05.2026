/*
1.NAVIGATE TO THE application URL
2.go to login page from home page
3.login with valid credentials
4.verify 'my account' page
4.click on logout link
5.click on continue button
5.verify that user is logged out successfully by checking the presence of login link on the page 

*/

import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/loginpage';
import { MyAccountPage } from '../pages/myaccountpage';
import { logoutpage } from '../pages/logoutpage';


test('Logout test', async ({ page }) => 
{
    // 1. NAVIGATE TO THE application URL
    const config = new TestConfig();
    await page.goto(config.appUrl);   //navigate to the app url;

   //go to login page from home page
    const homePage = new HomePage(page);
    await homePage.clickOnMyAccount();  //click on my account link
    await homePage.clickOnLogin();  //click on login link

    //login with valid credentials
    const loginPage = new LoginPage(page);
    await loginPage.login(config.email, config.password); //perform login action using the login method in login page object
        
    //verify 'my account' page
    const myAccountPage = new MyAccountPage(page);
    const myAccountHeadingText = await myAccountPage.getMyAccountHeadingText();
    expect(myAccountHeadingText).toBe('My Account');  //assert that the heading text is 'My Account'

    //click on logout link
    await myAccountPage.clickLogoutLink();  //click on logout link  


    //click on continue button
    const logoutPage = new logoutpage(page);

    if(await logoutPage.iscontinueButtonVisible()) //check if continue button is visible
        {
          await logoutPage.clickcontinueButton();  //click on continue button
        }  
      
      //verify that user is logged out successfully by checking the presence of login link on the page
      const isLoginLinkVisible = await homePage.isLoginLinkVisible();
        expect(isLoginLinkVisible).toBe(true);  //assert that login link is visible, indicating that the user is logged out successfully    
});


//npx playwright test tests/Logout.spec.ts --headed