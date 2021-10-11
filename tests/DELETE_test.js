const baseInstance = require('../utility/baseInstance.js');
const chai = require('chai');
const assert = chai.assert;
const globalData = require('../utility/globalData.js');

Feature('Transactions');
const createInst = new baseInstance().instance;

Scenario('Given user search transaction id for deletion', async () => {
   return await createInst.get("/transactions")
      .then(function (response) {
         globalData.transcationId = response.data[0].id;
         assert(response.status === 200, "Status is not 200.");
         assert.isArray(response.data);
         assert.isNotNull(response.data[0].id)
         assert.isString(response.data[0].description)
         assert.isString(response.data[0].type)
         assert.isNotNull(response.data[0].amount)
      }
      ).catch(error => { throw error });

});

Scenario('Given user can delete any transaction', async () => {
   return await createInst.delete("/transactions/" + globalData.transcationId)
      .then(function (response) {

         assert(response.status == 200, "Status code is not 200");
         assert.equal(response.data.id, globalData.transcationId, "Transcation id is not same")
         assert.isObject(response.data)
         assert.isNotArray(response.data)
         assert.isString(response.data.id)
         assert.isString(response.data.description)
         assert.isString(response.data.type)
         assert.isNumber(response.data.amount)
      }
      ).catch(error => { throw error });
}
);

Scenario('Given user can not see deleted transaction', async () => {
   return await createInst.get("/transactions/" + globalData.transcationId)
      .then(function (response) {
         assert(response.status == 404, "Status code is not 404");
         assert.equal(response.data, 'Not found', "Response body message is not correct")
         assert.isString(response.data)
      }
      ).catch(error => { throw error });
});

