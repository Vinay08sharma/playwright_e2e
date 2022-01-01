import {Page} from "@playwright/test";

export class HomePage {
    private readonly page: Page;
    constructor(page: Page) {
      this.page = page;
    }

   private Selectors = {
        usernameField: "#username",
        passwordFiled: '#password',
       dropDown: 'select.form-control',
       terms: '#terms',
       signInButton: '#signInBtn',
       brandName: 'a.navbar-brand',
    }

    async enterUserName(username: string): Promise<void> {
        try {
          await this.page.fill(this.Selectors.usernameField,username);
        } catch (error) {
            throw new Error(`Error while entering the username in username field, Error: ${error}`);
        }
    }

    async enterPasswordField(password: string): Promise<void> {
        try {
            await this.page.fill(this.Selectors.passwordFiled,password);
        } catch (error) {
            throw new Error(`Error while entering the password in password field, Error: ${error}`);
        }
    }

    async clickOnSignInButton(): Promise<void> {
        try {
             await this.page.click(this.Selectors.signInButton);
        } catch (error) {
            throw new Error(`Error while clicking the SignInButton, Error: ${error}`);
        }
    }

   async selectRole(value:string) : Promise<void> {
        try {
            await this.page.selectOption(this.Selectors.dropDown,value);
        } catch (error) {
            throw new Error(`Error while selecting the value from dropdown, Error: ${error}`);
        }
   }

   async clickOnTermsCheckBox(): Promise<void> {
        try {
            await this.page.click(this.Selectors.terms);
        } catch (error) {
            throw new Error(`Error while clicking on the checkbox, Error: ${error}`);
        }
   }

   async isBrandNameVisible(): Promise<boolean>{
        try {
            await this.page.waitForNavigation({
                timeout: 5000
            });
            return await this.page.isVisible(this.Selectors.brandName);
        } catch (error) {
            throw new Error(`Error while getting the brand name, Error: ${error}`);
        }
   }
}
