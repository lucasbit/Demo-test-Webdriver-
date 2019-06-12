import BasePage from "../base-page";
import {loca_InputPage} from "../locators";
const {Builder, By, Key, until} = require('selenium-webdriver');

export default class InputPage extends BasePage {
    static async WriteToInput(driver,data,validData__ErrorText) {
        // clearing input field
        const inputField = await BasePage.Find(driver,loca_InputPage.inputField);
        await inputField.clear();
        // typing into input and submiting
        await BasePage.Write(driver,loca_InputPage.inputField,data)
        await BasePage.Press(driver,loca_InputPage.searchBtn);
        // finding and waiting for element to contain error or succes message
        const msgPop = await BasePage.Find(driver,loca_InputPage.succesMsgCityName);
        await driver.wait(until.elementTextContains(msgPop,validData__ErrorText));
        // geting text from element i changeing it to lower case
        const msgPopText = await msgPop.getText();
        const msgPopTextSmall = await msgPopText.toLowerCase();
        // returning text from element (error or succes)
        return await msgPopTextSmall

    }
}
