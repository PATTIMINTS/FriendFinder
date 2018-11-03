var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");


var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(express.static(__dirname, + "/app/public"));



require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


// app.use(function(req, res, next) {
//   var err = new Error("Not Found!");
//   err.status = 404;
//   next(err);


// });





app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});