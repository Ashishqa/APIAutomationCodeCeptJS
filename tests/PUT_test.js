const baseInstance = require('../utility/baseInstance.js');
const chai = require('chai');
const assert = chai.assert;
const globalData = require('../utility/globalData.js');
const utils = require('../utility/utils.js')

Feature('Transactions');

const createInst = new baseInstance().instance;
const randomData= new utils().getRandomIntInclusive(15,20);


Scenario('Given user search transaction id for updation', async () => {
    return await createInst.get("/transactions")
         .then(function (response) {
            globalData.transcationId = response.data[0].id;
            assert(response.status === 200, "Status is not 200.");
            assert.isArray(response.data);
            assert.isString(response.data[0].id)
            assert.isString(response.data[0].description)
            assert.isString(response.data[0].type)
            assert.isString(response.data[0].amount)
         }
         ) .catch(error => { throw error});
   
   });

Scenario('Given user can update any transaction', async () => {
    var payload = '{"amount": '+randomData+'}';
  return await  createInst.put("/transactions/" + globalData.transcationId, payload)
        .then(function (response) {
            assert(response.status == 200, "Status code is not 200");
            assert.equal(response.data.id, globalData.transcationId, "Transcation id is not same")
            assert.isObject(response.data)
            assert.isNotArray(response.data)
            assert.isString(response.data.id)
            assert.isString(response.data.description)
            assert.isString(response.data.type)
            assert.isNumber(response.data.amount)
            assert.equal(response.data.amount,randomData,'Amount is not updated')
        }
        ).catch(error => { throw error });
}
);

