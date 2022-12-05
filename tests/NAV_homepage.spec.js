const {test, expect} = require('@playwright/test')
const { SWAPIHome } = require('../pageobjects/swapi_homepage')
const { APIHome } = require('../helpers/API_caller_page')

const SEARCH_ITEMS = [
    'people/1',
    'planets/3',
    'starships/9'
  ];

test.describe("Navigate to the SWAPI Home Page", () =>{
    test('Navigate to the SWAPI homepage', async ({ page }) => {
        test.setTimeout(40000)
        //New instance of the SWAPI Home page model
        const homePage = new SWAPIHome(page);
        //Navigate to the url
        await homePage.goto();
        //Wait for the navigation bar to load in
        await homePage.navBar.waitFor();
        //Test whether the url is correct
        await expect (page.url()).toBe(`${process.env.PAGE_URL}`)
        //Test the apis work through looping through the array above
        for (let i = 0; i < SEARCH_ITEMS.length; i++) {
          const API_getter = new APIHome(page);
          await API_getter.API_helper("https://swapi.py4e.com/api/" + SEARCH_ITEMS[i], 200);
          } 
 
        await page.keyboard.press('PageDown');
        
        //Type into api text field  
        await homePage.apiTextField.type(SEARCH_ITEMS[0]);
        //Click the request button
        await homePage.requestButton.click();        
        page.pause(1000);
        //Take a screenshot
        await page.screenshot({path: 'screenshot1.png'});   
        await homePage.apiTextField.clear();
        await homePage.apiTextField.type(SEARCH_ITEMS[1]);
        await homePage.requestButton.click();
        page.pause(1000);
        await page.screenshot({path: 'screenshot2.png'});
        await homePage.apiTextField.clear();
        await homePage.apiTextField.type(SEARCH_ITEMS[2]);
        await homePage.requestButton.click();
        page.pause(1000)
        await page.screenshot({path: 'screenshot3.png'}); 
        await page.close();     
        
  });
  
  });