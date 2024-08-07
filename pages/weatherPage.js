const { By, Key } = require('selenium-webdriver');
const BasePage = require('../base/basePage');
const elements = require('./pageElements');


class WeatherPage extends BasePage {

    constructor(driver) {
        super(driver);
    }
    
    async clickWeatherLinkText() {
        await this.clickElement(elements.weather.weatherLinkText, By.xpath);
        await this.switchToWindow(1);
        await this.isDisplayed(elements.weather.weatherLogo, By.xpath);
    }

    async checkWeatherMainTaps() {
        await this.isDisplayed(elements.weather.compareForecastsText, By.xpath);
        await this.isDisplayed(elements.weather.findDustText, By.xpath);
        await this.isDisplayed(elements.weather.mapText, By.xpath);
        await this.isDisplayed(elements.weather.videoText, By.xpath);
        await this.isDisplayed(elements.weather.weatherReports, By.xpath);
    }
}

module.exports = WeatherPage;