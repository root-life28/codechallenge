// module scaffolding

const handle = {};

handle.notFoundHandler = (requestProperties, callBack) => {
    callBack(404, {
        massage: 'Requested URL not found',
    });
};

module.exports = handle;
