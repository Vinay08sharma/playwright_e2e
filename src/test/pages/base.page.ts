import {Page, chromium} from "@playwright/test";

export  class BasePage {
    private  readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string){
        const browser = await chromium.launch({
            headless: false,
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await this.page.goto(url);
        return this;
    }

    async tearDown() {
        await this.page.close();
    }
}
