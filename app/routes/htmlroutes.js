var path = require("path");

module.exports = function(server) {
    server.get("/", (request, response) => {
        response.sendFile(path.join(__dirname, "../html/index.html"));
    });
    
    
    
    server.get("/survey", (request, response) => {
        response.sendFile(path.join(__dirname, "../html/search.html"));
    });




}