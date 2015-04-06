var http = require("http");


function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
	console.log(message);
}

function printError(error){
    console.error(error.message);
}


function get(username) {
	//connect to the API URL (http://teamtreehouse.com/username.json)
	var request = http.get("http://teamtreehouse.com/"+username+".json", function(res) {
		console.dir(res.statusCode);
	//read the data
		var body = "";
		res.on('data', function (chunk) {
	    body += chunk;
	  });
		res.on("end", function(){
			if(res.statusCode === 200) {
				 try {
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          //Parse Error
          printError(error);
        }
      } else {
        //Status Code Error
        printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[res.statusCode] + ")"});
      }
    });
  });
  
  //Connection Error
  request.on("error", printError);
}


module.exports.get = get;