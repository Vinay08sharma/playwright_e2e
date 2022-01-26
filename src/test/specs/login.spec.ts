import {BasePage} from "../pages/base.page";
import {Browser, BrowserContext, chromium, Page} from "playwright";
import {expect, expect as chaiExpect} from 'chai';
import { join } from 'path';
import {HomePage} from "../pages/home.page";
import {dropDownValues} from "../resources/customTypes";
import { TestUrl } from "../resources/urls";
import * as path from "path";
import * as data from "../data/creds.json";

declare const page: Page;
declare const reporter: any;

let basePage: BasePage;
let homePage : HomePage;

let currentDateTime = new Date().toISOString();

let credentials = data.credentials;
describe('Sign In', () => {

    beforeAll(async ()  => {
        await page.goto(TestUrl.BASE);
        basePage = new BasePage(page);
        homePage = new HomePage(page);
    })

    it('Verify login functionality', async ()=> {
        reporter
            .description('Login Functionality')
            .severity("Critical")
            .story('US_001')
        await basePage.navigateTo(TestUrl.BASE);
       await homePage.enterUserName(credentials.username);
       await  homePage.enterPasswordField(credentials.password);
       await homePage.selectRole(dropDownValues.Teacher);
       await homePage.clickOnSignInButton();
       const isBrandNameVisible = await homePage.isBrandNameVisible();
       expect(isBrandNameVisible,
           'Expected the presence of brand name, Unable to login').to.be.true;
    })

    afterAll(async () => {
        // await page.screenshot({path: join(process.cwd(),`screenshots/screenshot_${currentDateTime}.png`)})
        const screenshot = await page.screenshot();
        reporter.addAttachment("Login",screenshot,"image/png")
        // await context.close();
        // await browser.close();
    })
})
