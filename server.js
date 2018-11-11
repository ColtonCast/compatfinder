
var bodyParser = require("body-parser");
var express = require("express");
var http = require("http");
var fs = require("fs");
var server = express();
const cTable = require('console.table');



server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());




require("./app/routes/apiroutes")(server);
require("./app/routes/htmlroutes")(server);


var PORT = process.env.PORT || 8080;

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

// server.get('*', (req, res) => {
//     res.redirect('/')
//     console.log("you done redirected");
// })
