var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    var totalDifference = 0;

    for (var i = 0; i < friendsData.length; i++) {
      console.log(friendsData[i]);
      totalDifference = 0;

      for (var j = 0; j < friendsData[i].scores[j]; j++) {
        totalDifference += Math.abs(
          parseInt(userScores[j]) - parseInt(friendsData[i].scores[j])
        );

        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friendsData[i].name;
          bestMatch.photo = friendsData[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friendsData.push(userData);
    res.json(bestMatch);
  });
};
