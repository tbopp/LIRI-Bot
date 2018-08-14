# LIRI-Bot
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Getting Started

NOTE: This app currently only takes one command for twitter: 'my-tweets'

### Prerequisites

To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.

   * [Twitter](https://www.npmjs.com/package/twitter)
   
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   
   * [Request](https://www.npmjs.com/package/request)

     * You'll use Request to grab data from the [OMDB API](http://www.omdbapi.com).

   * [DotEnv](https://www.npmjs.com/package/dotenv)

   Alternatively, you can quickly install all NPM packages with the following command:

```
NPM install -all
```
### Using the app

1. open terminal
2. navigate to root directory of app
3. run comand:
```
node liri.js my-tweets
```
Liri will return the past 20 most recent tweets as of the time of command line execution.

## Developer
This app was created by Tyrell Bopp (Mr.TyBopp@gmail.com).

Enjoy!