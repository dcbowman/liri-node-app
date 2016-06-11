//pulls info for twitter keys
var keys = require('./keys.js');
//var request = require('request');


var action = process.argv[2]; 
var value = process.argv.slice(3).join('+');

//the switch-case will direct which function to use based on user input
switch(action){
    case 'my-tweets':
        twitter(value);
        break;
    case 'spotify-this-song':
        spotifySong(value);
        break;
    case 'movie-this':
        movieSearch(value);
        break;
    case 'do-what-it-says':
        random(value);
        break;
	}

//function spotifySong(){
	//var spotify = require('spotify');
 
	//spotify.search({ type: 'track', query: value }, function(err, data) {
    //if ( err ) {
       // console.log('Error occurred: ' + err);
        //return;
    //}
 
    //console.log(JSON.parse(body)["artist", "name", "preview_url", "album"])
	//});

	//}

//function twitter(){
	//var keys = require('./keys.js');
	
//}


function movieSearch(){

var request = require('request');
// request to the OMDB API with the movie specified 
	
	var queryUrl = 'http://www.omdbapi.com/?t=' + value +'&y=&plot=short&r=json&tomatoes=true';

// This line is just to help us debug against the actual URL.  
	console.log(queryUrl);

	request(queryUrl, function (error, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!error && response.statusCode == 200) {

		// Parse the body of the site and recover just the imdbRating
	
		console.dir("Title: " + JSON.parse(body)["Title"]);
		console.dir("Release Year: " + JSON.parse(body)["Year"]);
		console.dir("Rating: " + JSON.parse(body)["imdbRating"]);
		console.dir("Country: " + JSON.parse(body)["Country"]);
		console.dir("Language: " + JSON.parse(body)["Language"]);
		console.dir("Plot: " + JSON.parse(body)["Plot"]);
		console.dir("Actors: " + JSON.parse(body)["Actors"]);
		console.dir("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
		console.dir("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);




	


	}
	});
}