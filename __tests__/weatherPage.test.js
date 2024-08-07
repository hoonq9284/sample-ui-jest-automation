const { setUp, tearDown, getDriver } = require('../pages/commonPage');
const WeatherPage = require('../pages/weatherPage');
const { describe, beforeEach, afterEach, test } = require('@jest/globals');

describe('[NAVER] 날씨 페이지', () => {
    let weatherPage;

    beforeEach(async () => {
        await setUp();
        const driver = getDriver();
        weatherPage = new WeatherPage(driver);
    });

    afterEach(async () => {
        await tearDown();
    });

    test('날씨 페이지로 이동하기', async () => {
        await weatherPage.clickWeatherLinkText();
    });

    test('날씨 페이지 메인 탭 목록 확인하기', async () => {
        await weatherPage.clickWeatherLinkText();
        await weatherPage.checkWeatherMainTaps();
    });
});