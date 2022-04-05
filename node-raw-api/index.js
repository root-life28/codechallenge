/*
 *Title: Uptime Monitoring Application
 *Description:A RESTFul API to monitor up or down time of user defined link

 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environments = require('./helpers/environments');

// app object - module scaffolding

const app = {};

// server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environments.port, () => {
        console.log(`listening to port number ${environments.port}`);
    });
};

// server request response
app.handleReqRes = handleReqRes;
// start the server

app.createServer();
