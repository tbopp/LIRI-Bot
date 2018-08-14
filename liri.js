require("dotenv").config();

// variable requiring twitter NPM
const Twitter = require('twitter');

const request = require('request');

// Storing code from keys.js file into a variable
const apiKeys = require("./keys.js");

// Creating variables to access stored keys in keys.js file
const client = new Twitter({
    consumer_key: apiKeys.twitter.consumer_key,
    consumer_secret: apiKeys.twitter.consumer_secret,
    access_token_key: apiKeys.twitter.access_token_key,
    access_token_secret: apiKeys.twitter.access_token_secret
  });

// const omdb = new OMDB_KEY({
//     OMDB_KEY: apiKeys.omdb.OMDB_KEY
// });


// creating function to handle a command from the user
const myTweets = function() {
    if (process.arg[2] == 'my-tweets') {
        const params = {screen_name: 'Bot1Liri'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
            console.log(tweets);
            }
        });
    }
};

// ^^ I think I need code to execute user auth but I'm having difficutly understanding the online documentation for how to do so.

// I also beleive I will need code to JSON.parse() the twitter API results into
// I should have chose a different LIRI command but I really was hoping to get twitter to work. :-/

// ...... Below is a previous attempt at OMDB. I'm not sure why I'm having a coding block on this. It was easy for me when I did it in class. 

// const movieName = "";
// for (i=3; i<process.argv.length; i++) {
//     movieName += process.argv[i];
// };

// const movieThis = function() {
//     if (!movieName == "") {
//         // Then run a request to the OMDB API with the movie specified
//         request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdb.OMDB_KEY,function(error, response, body) {

//         // If the request is successful (i.e. if the response status code is 200)
//         if (!error && response.statusCode === 200) {
//             // Parse the body of the site and recover just the imdbRating
//             // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//             console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//         }
//   });
//     } else {
//         movieName == "Mr. Nobody"; 
//     }; 
// }
