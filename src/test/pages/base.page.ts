import {Page, chromium} from "playwright";

export  class BasePage {
    private  readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string){
        await this.page.goto(url);
    }

    async tearDown() {
        await this.page.close();
    }
}
