##Demo test

**Test target: **
https://linka-weather-application.herokuapp.com/

I have created a simple weather app, just for learning reasons and to get familiar with Node.js and Express.js

How does it work? Users should to type in address and get the weather forecast in return. If the address is not valid they will get an error message in return.

How it works on back-end? The user address is sent to mapbox.com and there its geocoded, after that it is sent to darksky.net where geocode is translated to actual forecast. 

**Tests:**
- Have been written according to Page Object Pattern
- All DOM strings and config settings are held in separate files.

There are 2 tests cases:
**ID:1**  Is testing UI input for an array of valid locations. If a response from the application contains name of the searched location that means the forecast was available. Test is passed.

**ID:2**  Is testing UI input for an array of invalid locations. If response form application contains the word "unavailable" that means that invalid location has caused an error and that is ok. Test is passed.

To run tests you need to:
- node.js to be installed on your machine.
- Chrome to be installed on your machine.
- download this repository
- navigate to it in command line
- start testing with: npm test