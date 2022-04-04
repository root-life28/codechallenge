// module scaffolding

const handle = {};

handle.notFoundHandler = (requestProperties, callBack) => {
    console.log(requestProperties);
    callBack(404, {
        massage: 'Requested URL not found',
    });
};

module.exports = handle;
