const baseInstance = require('../utility/baseInstance.js');
const chai = require('chai');
const assert = chai.assert;
const globalData = require('../utility/globalData.js');
const utils = require('../utility/utils.js')

Feature('Transactions');

const createInst = new baseInstance().instance;
const randomData= new utils().getRandomIntInclusive(15,20);

Scenario('Given user can create new transcation with request body', async () => {
    var payload = '{"description": "Testing Description","amount": '+randomData+',"type": "Type 99 Testing"}';
   await createInst.post("/transactions",payload)
        .then(function (response) {
            assert(response.status == 201, "Status code is not 201");
            assert.isObject(response.data)
            assert.isNotArray(response.data)
            assert.isString(response.data.id)
            assert.isString(response.data.description)
            assert.isString(response.data.type)
            assert.isNumber(response.data.amount)
            assert.equal(response.data.description,'Testing Description','Description is not updated')
            assert.equal(response.data.amount,randomData,'Amount is not updated')
            assert.equal(response.data.type,'Type 99 Testing','Type is not updated')  
        }
        ).catch(error => { throw error });
}
);

Scenario('Given user can create new transcation without request body', async () => {
   await createInst.post("/transactions")
        .then(function (response) {
            assert(response.status == 201, "Status code is not 201");
            assert.isObject(response.data)
            assert.isNotArray(response.data)
            assert.isString(response.data.id)
            assert.isString(response.data.description)
            assert.isString(response.data.type)
            assert.isNumber(response.data.amount)
            assert.isNotNull(response.data.description,'Description is null')
            assert.isNotNull(response.data.amount,'Amount is null')
            assert.isNotNull(response.data.type,'Type is null')
        }
        ).catch(error => { throw error });
}
);

