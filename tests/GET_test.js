const baseInstance = require('../utility/baseInstance.js');
const chai = require('chai');
const assert = chai.assert;
const globalData= require('../utility/globalData.js')

Feature('Transactions');
const createInst = new baseInstance().instance;

Scenario('Given user can see all the transactions', async () => {
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


Scenario('Given user can see any transactions', async () => {
 return await createInst.get("/transactions/" + globalData.transcationId)
      .then(function (response) {
         assert(response.status == 200, "Status code is not 200");
         assert.equal(response.data.id,globalData.transcationId,"Transcation id is not same")
         assert.isObject(response.data)
         assert.isNotArray(response.data)
         assert.isString(response.data.id)
         assert.isString(response.data.description)
         assert.isString(response.data.type)
         assert.isString(response.data.amount)
      }
      ) .catch(error => { throw error});
});
