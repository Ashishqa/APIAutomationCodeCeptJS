const axios = require('axios');
const config = require('../config/config.js')
let url = new config().baseUrl;
class baseInstance {

    get instance() {
        return  axios.create({
            baseURL: url,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
    }

}

module.exports = baseInstance;