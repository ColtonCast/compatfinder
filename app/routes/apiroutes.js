var path = require("path");
var fs = require("fs");

var friendslist = require("../data/friends");

module.exports = function(server) {


// server.post("/app/data/", (request, response) => {
//     response.json(friendslist)
//     console.log(friendslist, "friends list");

// })



server.get("/app/data", (request, response) => {
    response.sendFile(path.join(__dirname, "friends"));
    arraySearchnested(response);


});

function arraySearchnested(response) {


    fs.readFile('app/data/friends.json', 'utf8', function (err, data) {
        if (err) throw err;
        var data = JSON.parse(data);
        console.log("alllll the data : " , data , "end all the data")
        


            
        for (var i = 0; i < data.length; i++) {

            var jscores = [];
            jscores.push(data[i].scores);
            //console.log(jscores);


            for (var j = 0; j < data[i].scores; j++) {
                
                    console.log("wowzers")
                }
            }
        

    });


}
}
