import webdriver from 'selenium-webdriver'; 
import {config} from '../config/config';
import {assert as assert} from 'chai';
import {testData} from '../utils/test-data';
import InputPage, {LocationInputPage} from "../lib/pages/input-page"
let driver;



describe('Testing Weather App UI', function() {
    // times below are located in config file in project root
    this.timeout(config.mochaTimeoutMS);
    this.slow(config.mochaSlowMS);
    const chromedriver = require('chromedriver').path;
  
    beforeEach(async () => {
        const builder = new webdriver.Builder().withCapabilities( webdriver.Capabilities.chrome() );
        driver = await builder.build();
        await driver.manage().window().setRect({width: 1200, height: 1000});
        //page adress below is located in config file in project root
        await driver.get(config.LocationInputPage);
    });
  
    afterEach(async () => {
       await driver.quit();  
    });

    it(`ID:1 Testing input field with valid data(array)`, async () => {
        // looping over array with valid test data
        for (let i = 0; i < testData.validLocations.length; i++) {
            // creating variable that contains text from message element
            const succesMsgText = await  InputPage.WriteToInput(driver,testData.validLocations[i],testData.validLocations[i])
            // checking if succes message contains name of valid location that was searched. 
            
        }
    });

    it(`ID:2 Testing input field with invalid(array) data`, async () => {
        // looping over array with invalid test data
        for (let i = 0; i < testData.invalidLocations.length; i++) {
            // creating variable that contain error message
            const errorMessage = await  InputPage.WriteToInput(driver,testData.invalidLocations[i],testData.errorMessage)
            // checking if errror message contain error phrase(can find it in utils/test-data)
            await  assert.equal(true,errorMessage.includes(testData.errorMessage.toLowerCase()),`Test data didn't cause error message to show up`)
        }
    }); 
});