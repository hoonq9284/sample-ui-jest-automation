const { setUp, tearDown, getDriver } = require('../pages/commonPage');
const MainPage = require('../pages/mainPage');
const { describe, beforeEach, afterEach, test } = require('@jest/globals');

describe('[NAVER] 메인 페이지', () => {
    let mainPage;

    beforeEach(async () => {
        await setUp();
        const driver = getDriver();
        mainPage = new MainPage(driver);
    });

    afterEach(async () => {
        await tearDown();
    });

    test('검색 창에 "selenium" 입력하고 검증하기', async () => {
        await mainPage.searchAndValidate('selenium', 'selenium : 네이버 검색');
    });

    test('검색 창에 "jest" 입력하고 검증하기', async () => {
        await mainPage.searchAndValidate('jest', 'jest : 네이버 검색');
    });
});