// var express = require("express");
// var htmlRouter = express.Router();
var path = require("path");

module.exports = function (app){


app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/home.html"));

});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/survey.html"));
});

// default to home if no match

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/home.html"));
});

};