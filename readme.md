##Demo test

**Test target: **
https://linka-weather-application.herokuapp.com/

I have created this simple weather app, just for learning reasons and to get familiar with Node.js and Express.js

How does it work? Users should to type in address, and get the weather forecast in return. If the address is not valid they will get an error message in return.

How does it work on back-end? The user address is sent to mapbox.com and there its geocoded, after that it is sent to darksky.net where geocode is translated to actual forecast. 

**Tests:**
- Contain 2 files, test_1.js that test UI with WebdriverJS, Mocha, Chai; test_2.js is a API test with Mocha, Chai, Request
- Have been written according to Page Object Pattern
- All DOM strings and config settings are held in separate files.

**file: test_1.js contains:**

    2 tests cases:
**ID:1**  Is testing UI input for an array of valid locations. If a response from the application contains name of the searched location that means the forecast was available. Test is passed.

**ID:2**  Is testing UI input for an array of invalid locations. If the response from the application contains the word "unavailable" that means that invalid location has caused an error and that is ok. Test is passed.

**file: test_2.js contains:**

**ID:3** Is testing mapbox API with an array of valid test data locations. Test is passed when status-code is 200 and the response body includes current test location.

**ID:4** Is testing mapbox API with an array of invalid test data locations. Test is passed when status-code is 200 and the response body includes [].

To run tests you need to:
- node.js to be installed on your machine.
- Chrome to be installed on your machine.
- download this repository
- navigate to it in command line
- start testing with: npm test or if you like to run specific test type: npm test -- test/test_2
- start testing with: npm test
