/*
 *Title: Uptime Monitoring Application
 *Description:A RESTFul API to monitor up or down time of user defined link

 */

// dependencies
const http = require('http');

// app object - module scaffolding

const app = {};

// configuration
app.config = {
    port: 3000,
};

// server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port number ${app.config.port}`);
    });
};

// server request response
app.handleReqRes = (req, res) => {
    res.end('Hello Programmer');
};
// start the server

app.createServer();
