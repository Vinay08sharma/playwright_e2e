import {BasePage} from "../pages/base.page";
import {Browser, BrowserContext, chromium, Page} from "@playwright/test";
import {expect, expect as chaiExpect} from 'chai';
import { join } from 'path';
import {HomePage} from "../pages/home.page";
import {dropDownValues} from "../customTypes";
import * as path from "path";
// @ts-ignore
import * as data from "../data/creds.json";

let browser: Browser;
let context: BrowserContext;
let page: Page;
let basePage: BasePage;
let homePage : HomePage;

let currentDateTime = new Date().toISOString();

let credentials = data.credentials;

describe('Sign In', () => {

    beforeAll(async ()  => {
        browser = await chromium.launch({
            headless: false
        })
        context = await browser.newContext({
            recordVideo: { dir: './videos/'}
        });
        page = await context.newPage();
        basePage = new BasePage(page);
        homePage = new HomePage(page);
    })

    it('Verify login functionality', async ()=> {
        await basePage.navigateTo('https://www.rahulshettyacademy.com/loginpagePractise/');
       await homePage.enterUserName(credentials.username);
       await  homePage.enterPasswordField(credentials.password);
       await homePage.selectRole(dropDownValues.Teacher);
       await homePage.clickOnTermsCheckBox();
       await homePage.clickOnSignInButton();
       const isBrandNameVisible = await homePage.isBrandNameVisible();
       expect(isBrandNameVisible,
           'Expected the presence of brand name, Unable to login').to.be.true;
    })



    afterAll(async () => {
        await page.screenshot({path: join(process.cwd(),`screenshots/screenshot_${currentDateTime}.png`)})
        await context.close();
        await browser.close();
    })
})
