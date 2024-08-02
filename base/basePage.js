const { By, until, Key } = require('selenium-webdriver');
const config = require('../config/config');
const waitTime = config.waitTime;

class BasePage {
    /**
     * @param {WebDriver} driver
     */
    constructor(driver) {
        this.driver = driver;
    }

    async openBrowser(url) {
        await this.driver.get(url);
    }

    async getTitle() {
        try {
            return await this.driver.getTitle();
        } catch (error) {
            console.log(`Title 가져오기 에러: ${error}`);
            throw error;
        }
    }

    async webDriverWait(locator, by) {
        try {
            await this.driver.wait(until.elementLocated(by(locator)), waitTime);
        } catch (error) {
            if (error.name === 'TimeoutError') {
                console.log(`TimeoutException 발생: 엘리먼트를 최대 ${waitTime}초 만큼 기다렸지만 찾을 수 없습니다. Locator: ${locator}`);
            }
        }
    }

    async switchToWindow(number) {
        const windows = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(windows[number]);
    }

    async highlight(element, { effectTime = 100, color = "#FF0000", border = 5 }) {
        const driver = element.getDriver();
        const originalStyle = await element.getAttribute('style');
        await driver.executeScript("arguments[0].setAttribute(arguments[1], arguments[2]);", element, 'style', `border: ${border}px solid ${color};`);
        await driver.sleep(effectTime);
        await driver.executeScript("arguments[0].setAttribute(arguments[1], arguments[2]);", element, 'style', originalStyle);
    }

    async findElement(locator, by) {
        await this.webDriverWait(locator, by);
        try {
            return await this.driver.findElement(by(locator));
        } catch (error) {
            console.log(`Exception : 지정한 로케이터 '${locator}'에 해당하는 엘리먼트를 DOM에서 찾을 수 없습니다. 상세 정보 - ${error}`);
            throw error;
        }
    }

    async isDisplayed(locator, by) {
        await this.webDriverWait(locator, by);
        const element = await this.findElement(locator, by);
        try {
            await this.element.isDisplayed();
            await this.highlight(element, highlightOptions);
        } catch (error) {
            console.log(`Error 발생: ${error}`);
            return false;
        }
    }

    async clickElement(locator, by, highlightOptions = { effectTime: 100, color: "#FF0000", border: 5 }) {
        await this.webDriverWait(locator, by);
        const element = await this.findElement(locator, by);
        try {
            await this.highlight(element, highlightOptions);  // 동적 하이라이트 인자
            await element.click();
        } catch (error) {
            console.log(`Click Error 발생: ${error}`);
            throw error;
        }
    }

    async inputElement(locator, text, by, highlightOptions = { effectTime: 100, color: "#FF0000", border: 5 }) {
        await this.webDriverWait(locator, by);
        const element = await this.findElement(locator, by);
        try {
            await this.highlight(element, highlightOptions);  // 동적 하이라이트 인자
            await element.sendKeys(text);
        } catch (error) {
            console.log(`Input Error 발생: ${error}`);
            throw error;
        }
    }

    async getElementText(locator, by) {
        await this.webDriverWait(locator, by);
        const element = await this.findElement(locator, by);
        try {
            return await element.getText();
        } catch (error) {
            console.log(`Text Error 발생: ${error}`);
            throw error;
        }
    }

    static assertText(expected, result) {
        if (result !== expected) {
            throw new Error(`예상 텍스트(Expected): ${expected}\n 실제 텍스트(result): ${result}`);
        }
    }
}

module.exports = BasePage;