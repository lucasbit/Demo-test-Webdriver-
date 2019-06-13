import request from 'request';
import {expect} from 'chai';
import {testData} from '../utils/test-data';
import {config} from '../config/config';

import {assert as assert} from 'chai';

describe('Testing mapbox API', function() {
    // this time setting can be found i config file
    this.timeout(config.mochaApiTimeoutMS);

    it('ID:3 Testing API with valid data', (done)=> {
        for(let i = 0; i < testData.validLocations.length; i++){
            // creating variable and altering url according to current test data input
            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${testData.validLocations[i]}.json?access_token=pk.eyJ1IjoibHVjYXN2aXoiLCJhIjoiY2p0NW1xdXltMDZwYzN6cDlkdWpudmJlbCJ9.h7XJxKpK_6_bVc5z7HHjJA&limit=1`;
            // calling request with altered url and checking response status code and body
            request(url,function(error, response, body) {
                const bodyObj = JSON.parse(body);
                expect(bodyObj.query[0]).to.equal(testData.validLocations[i].toLocaleLowerCase());
                expect(response.statusCode).to.equal(200);  
            });
        }
    done();
    });

    it('ID:4 Testing API with invalid data', (done)=> {
        for(let i = 0; i < testData.invalidLocations.length; i++){
            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${testData.invalidLocations[i]}.json?access_token=pk.eyJ1IjoibHVjYXN2aXoiLCJhIjoiY2p0NW1xdXltMDZwYzN6cDlkdWpudmJlbCJ9.h7XJxKpK_6_bVc5z7HHjJA&limit=1`;

            request(url,function(error, response, body) {
                const bodyObj = JSON.parse(body);
                expect(bodyObj.features).to.deep.equal([]);
                expect(response.statusCode).to.equal(200);  
            });
        }
    done();
    });
});