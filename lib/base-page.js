const {By, Key, until} = require('selenium-webdriver');
import {config} from "../config/config";

export default class BasePage {
	constructor( driver, url = null ) {
		this.driver = driver;
		this.url = url;
	}

	static async Visit(driver = driver,some) {
		return driver.get( some.url );
	}
	static async Find(driver,selector) {
		await driver.wait(until.elementLocated(By.css(selector)),config.explicitWaitMS);
		return  driver.findElement(By.css(selector)); 
    }
	static async Press(driver,selector) {
		await driver.wait(until.elementLocated(By.css(selector)),config.explicitWaitMS);
		const searchFor = await driver.findElement(By.css(selector))
		await driver.wait(until.elementIsVisible(searchFor),config.explicitWaitMS)
		await driver.findElement(By.css(selector)).click(); 
	}
    static async Write(driver,selector,keys) {
		await driver.wait(until.elementLocated(By.css(selector)),config.explicitWaitMS);
		return  driver.findElement(By.css(selector)).sendKeys(keys); 
	}
	static async Gone(driver,selector) {
		await driver.wait(until.elementLocated(By.css(selector)),config.explicitWaitMS);
		const element = await driver.findElement(By.css(selector));
		return await driver.wait(until.elementIsNotVisible(element),config.explicitWaitMS);
	}
		
}