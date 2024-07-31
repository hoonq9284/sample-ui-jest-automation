const { Builder } = require('selenium-webdriver');
require('chromedriver');
const MainPage = require('../pages/mainPage');
const { describe, beforeAll, afterAll, beforeEach, afterEach, test, expect } = require('@jest/globals');

describe('[NAVER] 메인 페이지', () => {
    let driver;
    let mainPage;

    // beforeEach : 각 TestCase가 실행되기 전에 사전에 실행되는 백그라운드 함수
    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        mainPage = new MainPage(driver);
        await mainPage.openMainPage();
    });

    // afterEach : 각 TestCase가 실행되고 난 뒤 후처리를 위해 실행되는 함수
    afterEach(async () => {
        if (driver) {
            await driver.quit();
        }
    });

    test('검색 창에 "selenium" 입력하고 검증하기', async () => {
        await mainPage.searchAndValidate('selenium', 'selenium : 네이버 검색');
    });

    test('검색 창에 "jest" 입력하고 검증하기', async () => {
        await mainPage.searchAndValidate('jest', 'jest : 네이버 검색');
    });
});