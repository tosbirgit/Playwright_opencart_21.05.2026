import {test, expect,Page} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/loginpage';
import { MyAccountPage } from '../pages/myaccountpage';
import { TestConfig } from '../test.config';    
import { ProductPage } from '../pages/ProductPage';
import {DataProviders} from '../utils/dataproviders';


//load json test data
const jsonpath= './testdata/logindata.json';
const jsontestdata=DataProviders.getTestdatafromjson(jsonpath);

for(const data of jsontestdata)
{
    test(`Login test with ${data.email} and ${data.password} @datadriven`, async ({page}) => {

      const config = new TestConfig();    //load config url and credentials
      await page.goto(config.appUrl);  //navigate tot he appurl
     
     //initialize page objects
      const homePage = new HomePage(page);
      await homePage.clickOnMyAccount();
      await homePage.clickOnLogin();  //click on login link


      const loginPage = new LoginPage(page);
      await loginPage.login(data.email,data.password);  //login with email and password from json data
      
      if(data.expected.toLowerCase() === 'success')
    {
        const myAccountPage = new MyAccountPage(page);
        await myAccountPage.getMyAccountHeadingText().then(headingText => {
            expect(headingText).toBe('My Account');  //assert that the heading text is 'My Account'
        }).catch(error => {
            console.error(`Error getting My Account heading text: ${error}`);
            throw new Error(`Error getting My Account heading text: ${error}`);  //throw an error if there is an error
        });

    }
   


    else if(data.expected.toLowerCase() === 'failure')
    {
        await loginPage.getErrorMessage().then(errorMessage => {
            expect(errorMessage).toContain('Warning: No match for E-Mail Address and/or Password.');  //assert that the error message is displayed
        }).catch(error => {
            console.error(`Error getting error message: ${error}`);
            throw new Error(`Error getting error message: ${error}`);  //throw an error if there is an error
        });




    }
})

}




//load csv test data
const csvpath= './testdata/logindata.csv';
const csvtestdata=DataProviders.gettestdatafromcsv(csvpath);

for(const data of csvtestdata)
{
    test(`Login test with csv ${data.email} and ${data.password} @datadriven`, async ({page}) => {

      const config = new TestConfig();    //load config url and credentials
      await page.goto(config.appUrl);  //navigate tot he appurl
     
     //initialize page objects
      const homePage = new HomePage(page);
      await homePage.clickOnMyAccount();
      await homePage.clickOnLogin();  //click on login link


      const loginPage = new LoginPage(page);
      await loginPage.login(data.email,data.password);  //login with email and password from json data
      
      if(data.expected.toLowerCase() === 'success')
    {
        const myAccountPage = new MyAccountPage(page);
        await myAccountPage.getMyAccountHeadingText().then(headingText => {
            expect(headingText).toBe('My Account');  //assert that the heading text is 'My Account'
        }).catch(error => {
            console.error(`Error getting My Account heading text: ${error}`);
            throw new Error(`Error getting My Account heading text: ${error}`);  //throw an error if there is an error
        });

    }
   


    else if(data.expected.toLowerCase() === 'failure')
    {
        await loginPage.getErrorMessage().then(errorMessage => {
            expect(errorMessage).toContain('Warning: No match for E-Mail Address and/or Password.');  //assert that the error message is displayed
        }).catch(error => {
            console.error(`Error getting error message: ${error}`);
            throw new Error(`Error getting error message: ${error}`);  //throw an error if there is an error
        });




    }
})

}