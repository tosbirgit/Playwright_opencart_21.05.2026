# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> user login test
- Location: tests\login.spec.ts:45:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "My Account"
Received: null
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login with Valid Credentials
  3  |  * * Tags: @master @sanity @regression
  4  |  * * Steps:
  5  |  * 1) Navigate to the application URL
  6  |  * 2) Navigate to Login page via Home page
  7  |  * 3) Enter valid credentials and log in
  8  |  * 4) Verify successful login by checking 'My Account' page presence
  9  |  */
  10 | 
  11 | import { test, expect } from '@playwright/test';
  12 | import { HomePage } from '../pages/HomePage';
  13 | import { LoginPage } from '../pages/loginpage';
  14 | import { MyAccountPage } from '../pages/myaccountpage';
  15 | import { TestConfig } from '../test.config';
  16 | 
  17 | let homePage: HomePage;
  18 | let loginPage: LoginPage;
  19 | let myAccountPage: MyAccountPage;
  20 | let config: TestConfig;
  21 | 
  22 | test.beforeEach(async ({ page }) => 
  23 | { 
  24 |     config = new TestConfig();    //load config url and credentials
  25 |     await page.goto(config.appUrl);  //navigate tot he appurl
  26 |    
  27 |    //initialize page objects
  28 |     homePage = new HomePage(page);
  29 |     loginPage = new LoginPage(page);
  30 |     myAccountPage = new MyAccountPage(page);
  31 | 
  32 | });
  33 | 
  34 | 
  35 | test.afterEach(async ({ page }) =>
  36 | {
  37 |     await page.close();  //close the browser after each test
  38 | });
  39 | 
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | test('user login test', async () => {
  46 |         
  47 | 
  48 |         //navigate to login page via home page
  49 |         await homePage.clickOnMyAccount();  //click on my account link
  50 |         await homePage.clickOnLogin();  //click on login link
  51 |         //Enter valid credentials and log in
  52 | 
  53 |         await loginPage.enterEmailAddress(config.email);  //enter email address
  54 |         await loginPage.enterPassword(config.password);
  55 |         await loginPage.clickLoginButton();  //click on login button
  56 | 
  57 |         //Verify successful login by checking 'My Account' page presence
  58 |         const headingText = await myAccountPage.getMyAccountHeadingText();  //get the heading text of my account page
> 59 |         expect(headingText).toBe('My Account');  //assert that the heading text is 'My Account'
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  60 | 
  61 | 
  62 |        //npx playwright test tests/login.spec.ts --headed
  63 | 
  64 | 
  65 | 
  66 | 
  67 | 
  68 | 
  69 | });
```