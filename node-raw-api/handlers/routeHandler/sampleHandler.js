// module scaffolding

const handle = {};

handle.sampleHandler = (requestProperties, callBack) => {
    console.log(requestProperties);
    callBack(200, {
        massage: 'This is sample url',
    });
};

module.exports = handle;
