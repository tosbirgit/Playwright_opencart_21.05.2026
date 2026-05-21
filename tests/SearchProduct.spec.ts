/*
1)navigate to the application URL
2)Enter the product name in the search box
3)Click on the search button
4)Verify that the search product is displayed in the search results
*/

import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage'; 

test('Search Product Test', async ({ page }) => 
{
    // 1. Navigate to the application URL
    const config = new TestConfig();
    await page.goto(config.appUrl);   //navigate to the app url;

    // 2. Enter the product name in the search box
    const homePage = new HomePage(page);
    await homePage.enterProductNameInSearchBox(config.productName);  //enter product name in search box
    await homePage.clickOnSearchButton();  //click on search button

    // 3. Verify that the search product is displayed in the search results

    const searchResultsPage = new SearchResultsPage(page);
    const isSearchResultsPageExists = await searchResultsPage.isSearchResultsPageExists();
    expect(isSearchResultsPageExists).toBe(true);  //assert that search results page exists


    const isProductavail = await searchResultsPage.isProductExist(config.productName);
    expect(isProductavail).toBe(true);  //assert that the product is displayed in search results

});

//npx playwright test tests/SearchProduct.spec.ts --headed