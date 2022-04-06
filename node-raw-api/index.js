/*
 *Title: Uptime Monitoring Application
 *Description:A RESTFul API to monitor up or down time of user defined link

 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environments = require('./helpers/environments');
const data = require('./lib/data');
// app object - module scaffolding
// create data
data.create('test', 'newFile', { name: 'Bangladesh', Language: 'Bangle' }, (err) => {
    console.log(err);
});

// update file data
// data.update('test', 'newFile', { name: 'Uk', Language: 'English' }, (err) => {
//     console.log(err);
// });

// delete file
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });
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
