const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const BasePage = require('../base/basePage');
require('chromedriver');
const config = require('../config/config');

let driver;

// setUp() : 각 테스트 케이스 시작 전 실행되는 백그라운드 로직
async function setUp() {
    const options = new chrome.Options();
    options.addArguments('--start-maximized'); // 브라우저를 최대화 모드로 시작
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    const basePage = new BasePage(driver);
    await basePage.openBrowser(config.url);
}

// tearDown() : 각 테스트 케이스 종료 후 실행되는 로직
async function tearDown() {
    if (driver) {
        await driver.quit();
    }
}

function getDriver() {
    return driver;
}

module.exports = {
    setUp,
    tearDown,
    getDriver
};