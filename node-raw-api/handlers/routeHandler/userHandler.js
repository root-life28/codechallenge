/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
// dependencies
const data = require('../../lib/data');
const { hash } = require('../../helpers/utilities');
const { parseJSON } = require('../../helpers/utilities');

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {
    let firstName = typeof requestProperties.body.firstName === 'string';
    if (firstName) {
        firstName =
            requestProperties.body.firstName.trim().length > 0
                ? requestProperties.body.firstName
                : false;
    }
    let lastName = typeof requestProperties.body.lastName === 'string';
    if (lastName) {
        lastName =
            requestProperties.body.lastName.trim().length > 0
                ? requestProperties.body.lastName
                : false;
    }
    let phone = typeof requestProperties.body.phone === 'string';
    if (phone) {
        phone =
            requestProperties.body.phone.trim().length === 11
                ? requestProperties.body.phone
                : false;
    }
    // eslint-disable-next-line operator-linebreak
    let password = typeof requestProperties.body.password === 'string';
    if (password) {
        password =
            requestProperties.body.password.trim().length > 0
                ? requestProperties.body.password
                : false;
    }
    // eslint-disable-next-line operator-linebreak
    let tosAgreement = typeof requestProperties.body.tosAgreement === 'boolean';
    if (tosAgreement) {
        tosAgreement = requestProperties.body.tosAgreement
            ? requestProperties.body.tosAgreement
            : false;
    }

    if (firstName && lastName && phone && password && tosAgreement) {
        // make sure that the user doesn't already exists
        data.read('users', phone, (err1) => {
            if (err1) {
                const userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hash(password),
                    tosAgreement,
                };
                // store the user to db
                data.create('users', phone, userObject, (err2) => {
                    if (!err2) {
                        callback(200, {
                            message: 'User was created successfully!',
                        });
                    } else {
                        callback(500, { error: 'Could not create user!' });
                    }
                });
            } else {
                console.log(err1);
                callback(500, {
                    error: 'There was a problem in server side!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'You have a problem in your request',
        });
    }
};

// @TODO: Authentication
handler._users.get = (requestProperties, callback) => {
    // check the phone number if valid
    let phone = typeof requestProperties.queryStringObject.phone === 'string';
    if (phone) {
        phone =
            requestProperties.queryStringObject.phone.trim().length === 11
                ? requestProperties.queryStringObject.phone
                : false;
    }

    if (phone) {
        // lookup the user
        data.read('users', phone, (err, u) => {
            const user = { ...parseJSON(u) };
            if (!err && user) {
                delete user.password;
                callback(200, user);
            } else {
                callback(404, {
                    error: 'Requested user was not found!',
                });
            }
        });
    } else {
        callback(404, {
            error: 'Requested user was not found!',
        });
    }
};

// @TODO: Authentication
handler._users.put = (requestProperties, callback) => {
    let firstName = typeof requestProperties.body.firstName === 'string';
    if (firstName) {
        firstName =
            requestProperties.body.firstName.trim().length > 0
                ? requestProperties.body.firstName
                : false;
    }
    let lastName = typeof requestProperties.body.lastName === 'string';
    if (lastName) {
        lastName =
            requestProperties.body.lastName.trim().length > 0
                ? requestProperties.body.lastName
                : false;
    }
    let phone = typeof requestProperties.body.phone === 'string';
    if (phone) {
        phone =
            requestProperties.body.phone.trim().length === 11
                ? requestProperties.body.phone
                : false;
    }
    // eslint-disable-next-line operator-linebreak
    let password = typeof requestProperties.body.password === 'string';
    if (password) {
        password =
            requestProperties.body.password.trim().length > 0
                ? requestProperties.body.password
                : false;
    }
    if (phone) {
        if (firstName || lastName || password) {
            // loopkup the user
            data.read('users', phone, (err1, uData) => {
                const userData = { ...parseJSON(uData) };

                if (!err1 && userData) {
                    if (firstName) {
                        userData.firstName = firstName;
                    }
                    if (lastName) {
                        userData.firstName = firstName;
                    }
                    if (password) {
                        userData.password = hash(password);
                    }

                    // store to database
                    data.update('users', phone, userData, () => {
                        callback(200, {
                            message: 'User was updated successfully!',
                        });
                    });
                } else {
                    callback(400, {
                        error: 'You have a problem in your request!',
                    });
                }
            });
        } else {
            callback(400, {
                error: 'You have a problem in your request!',
            });
        }
    } else {
        callback(400, {
            error: 'Invalid phone number. Please try again!',
        });
    }
};

// @TODO: Authentication
handler._users.delete = (requestProperties, callback) => {
    // check the phone number if valid
    let phone = typeof requestProperties.queryStringObject.phone === 'string';
    if (phone) {
        phone =
            requestProperties.queryStringObject.phone.trim().length === 11
                ? requestProperties.queryStringObject.phone
                : false;
    }

    if (phone) {
        // lookup the user
        data.read('users', phone, (err1, userData) => {
            if (!err1 && userData) {
                data.delete('users', phone, () => {
                    callback(200, {
                        message: 'User was successfully deleted!',
                    });
                });
            } else {
                callback(500, {
                    error: 'There was a server side error!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'There was a problem in your request!',
        });
    }
};

module.exports = handler;
