const { By, Key } = require('selenium-webdriver');
const BasePage = require('../base/basePage');
const elements = require('./pageElements');


class MainPage extends BasePage {

    constructor(driver) {
        super(driver);
    }

    async checkLoginSection() {
        await this.isDisplayed(elements.main.loginSection, By.xpath);
    }
    
    async moveToMapPage() {
        await this.clickElement(elements.main.mapIcon, By.xpath);
        await this.switchToWindow(1);
        await this.isDisplayed(elements.main.mapPageLogo, By.xpath);
    }

    async searchAndValidate(query, expectedTitle) {
        await this.inputElement(elements.main.searchBox, query, By.xpath);
        await this.clickElement(elements.main.searchButton, By.xpath);
        const title = await this.getTitle();
        BasePage.assertText(expectedTitle, title);
    }
}

module.exports = MainPage;