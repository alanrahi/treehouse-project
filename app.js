//problem: we need a simple way to look at a user's badge count and points
//solution: use node.js to connect to treehouse's api to get profile information to print out
var profile = require("./profile.js")
var users = process.argv.slice(2);


//var users = ["alanrahi","jahsieault","mtburnett","nicolaswolf","lindseyvoskowsky","brycejohnson2","portlandcodeschool","davidhasenjaeger","kalikiger"];
users.forEach(profile.get);

//profile.get("alanrahi");
//profile.get("jahsieault");


