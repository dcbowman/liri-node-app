//pulls info for twitter keys
var keys = require('./keys.js');
//var request = require('request');


var action = process.argv[2]; 
var value = process.argv[3];

//the switch-case will direct which function to use based on user input
switch(action){
    case 'my-tweets':
        twitter();
        break;
    case 'spotify-this-song':
        spotifySong();
        break;
    case 'movie-this':
        movieSearch();
        break;
    case 'do-what-it-says':
        random();
        break;
	}

function spotifySong(){
	var spotify = require('spotify');
 
	spotify.search({ type: 'track', query: value }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log(JSON.parse(body)["artist", "name", "preview_url", "album"])
	});

	}

function twitter(){
	var keys = require('./keys.js');
	
}


function movieSearch(){
	var request = require('request');

// Store all of the arguments in an array 
	var nodeArgs = value;

// Create an empty variable for holding the movie name
	var movieName = "";

// Loop through all the words in the node argument

	for (var i=2; i<nodeArgs.length; i++){

	if (i>2 && i< nodeArgs.length){

		movieName = movieName + "+" + nodeArgs[i];
	}

	else {

		movieName = movieName + nodeArgs[i];
	}
	}

// Then run a request to the OMDB API with the movie specified 
	var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json';

// This line is just to help us debug against the actual URL.  
	console.log(queryUrl);

	request(queryUrl, function (error, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!error && response.statusCode == 200) {

		// Parse the body of the site and recover just the imdbRating
	s
		console.log("Release Year: " + JSON.parse(body)["Year"])
	}
	});
}