const { By, Key } = require('selenium-webdriver');
const BasePage = require('../base/basePage');
const elements = require('./pageElements');


class MainPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async searchQuery(query) {
        await this.inputElement(elements.main.searchBox, query, By.xpath);
    }

    async clickSearchButton() {
        await this.clickElement(elements.main.searchButton, By.xpath);
    }

    async validateTitle(expectedTitle) {
        const title = await this.getTitle();
        BasePage.assertText(expectedTitle, title);
    }

    async searchAndValidate(query, expectedTitle) {
        await this.searchQuery(query);
        await this.clickSearchButton();
        await this.validateTitle(expectedTitle);
    }
}

module.exports = MainPage;