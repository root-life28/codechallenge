// dependencies
const crypto = require('crypto');

const utilities = {};
const environments = require('./environments');

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// hash string
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        console.log(environments, process.env.NODE_ENV);
        const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};

utilities.createRandomString = (strlen) => {
    let length = strlen;
    length = typeof strlen === 'number' && strlen > 0 ? strlen : false;

    if (length) {
        const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let output = '';
        for (let i = 0; i < length; i += 1) {
            const randomChar = possibleCharacters.charAt(
                // eslint-disable-next-line comma-dangle
                Math.floor(Math.random() * possibleCharacters.length)
            );
            output += randomChar;
        }

        return output;
    }
    return false;
};
// export module
module.exports = utilities;
