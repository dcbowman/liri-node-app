//pulls info for twitter keys
var keys = require('./keys.js');
var request = require('request');


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