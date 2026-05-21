
/**Test Case: Account Registration*
*Tags:* @master @sanity @regression
*Steps:*
 1) Navigate to application URL
 2) Go to 'My Account' and click 'Register'
 3) Fill in registration details with random data
 4) Agree to Privacy Policy and submit the form
 5) Validate the confirmation message
 */

 import { test, expect } from '@playwright/test';
 import { HomePage } from '../pages/HomePage';
 import { RegistrationPage } from '../pages/RegistrationPage';
 import { TestConfig } from '../test.config';
import { RandomDataGenerator } from '../utils/randomdatagenerator';

let homePage: HomePage;
let registrationPage: RegistrationPage;


test.beforeEach(async ({ page }) => 
{ 
    const config = new TestConfig();
    await page.goto(config.appUrl);  //navigate tot he appurl
     homePage = new HomePage(page);
     registrationPage = new RegistrationPage(page);

});


test.afterEach(async ({ page }) =>
{
    await page.close();  //close the browser after each test
});









test('Account Registration Tests @master @sanity @regression', async () => {
        

        //go to the ''my account'' and click on register link
          
        await homePage.clickOnMyAccount();  //click on my account link
        await homePage.clickOnRegister();  //click on register link



        //fill the registration form with random data
        
        await registrationPage.enterFirstName(RandomDataGenerator.getfirstname());
        await registrationPage.enterLastName(RandomDataGenerator.getlastname());
        await registrationPage.enterEmail(RandomDataGenerator.getemail());
        await registrationPage.enterTelephone(RandomDataGenerator.gettelephone());
        const randomPassword = RandomDataGenerator.getpassword();
        console.log(`Generated random password: ${randomPassword}`);
        await registrationPage.enterPassword(randomPassword);
        await registrationPage.enterConfirmPassword(randomPassword);
        await registrationPage.clickOnPrivacyPolicyCheckbox();
        await registrationPage.clickOnContinueButton();
        

        //validate the confirmation message
        expect(await registrationPage.getConfirmationMessage()).toBe("Your Account Has Been Created!");
        //page.waitForTimeout(3000); //wait for 3 seconds before closing the browser
    
    
    
     // npx playwright test tests/AccountRegistration.spec.ts --headed
    
    
    });