// var express = require("express");
// var app = express();
// var apiRoutes = require("./app/routes/apiRoutes");
var friendsData = require("../data/friends");


module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  //api post requests
  

  app.post("/api/friends", function (req, res) {
    console.log(req.body.scores);

    var newFriend = req.body;

    //loop through scores

    newFriend.scores.forEach(function(score) {
      if (score.scores == "1 (Strongly Disagree)") {
        score.scores = 1;
      }
      else if (score.scores == "5 (Strongly Agree)") {
        score.scores = 5;
      }
      else {
        score.scores = parseInt(score.scores);
      }
    });
  
    

    //best match friend
    var newFriend = req.body;

    var bestMatch = {};
    var matchesFriend = 0;

    var highMatchedScore = 40;

    // looping through all friends

    for (var friend = 0; friend < friendsData.length; friend++) {
      var totDiffScore = 0;

      // looping through individual friends

      for (var score = 0; score < friendsData[friend].scores.length; score++) {
        var diff = Math.abs(friendsData[friend].scores[score] = newFriend.scores[score]);
        totDiffScore += diff;
      }
      console.log(totDiffScore, friendsData[friend].name);

      if (totDiffScore < highMatchedScore) {
        matchesFriend = friend;
        highMatchedScore = totDiffScore;
      }
    }

    bestMatch = friendsData[matchesFriend];
    friendsData.push(newFriend);

    res.json(bestMatch);
  





// app.post("/api/clear", function() {
//   // Empty out the arrays of data
//   friendData = [];
  

  console.log(friendsData);
// });
})
};


