//defines user inputs
var action = process.argv[2]; 
var value = process.argv.slice(3).join('+');
// connects to npm modules 
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
var keys = require('./keys.js');
var Twitter = require('twitter');

var client = new Twitter({

	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret
});

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

function spotifySong(){
	if(!value){
		value= "What's my age again"
	}
 
	spotify.search({ type: 'track', query: value, limit: 10 }, function(err, data) {
    if ( err ) {
       console.log('Error occurred: ' + err);
        return;
    }

   console.dir("Artist: "+ data.tracks.items[0].artists[0].name); //artist
   console.dir("Title: "+ data.tracks.items[0].name); //song name
   console.dir("Preview "+data.tracks.items[0].preview_url); //preview
   console.dir("Album "+ data.tracks.items[0].album.name); //album
 

     
	});

	}
function random(){

	//reads the file random.text
	fs.readFile("random.txt", "utf8", function(error, data) {

	//console.log(data);//ensures we pulled the correct data

	var dataArr = data.split(','); //puts data into an array

	console.log(dataArr); //ensures it's split 

	spotifySong(dataArr[0], dataArr[1]);//runs the spotfify funtion

	});//end of fs.read

	}//end of random

function twitter(){
	
	var params = {
		screen_name:'dcbowman1',
		count: 10
		};

   client.get('statuses/user_timeline', params,gotData);

    function gotData(error, data, response){
   	var tweets = data.statuses;
   	for (var i = 0; i < tweets.length; i++){
  		if (!error) {
    		console.log(tweets.text);
			}
  		}
	}
	
}


function movieSearch(){

	if (!value) //if there is no value
		{value = "Mr. Nobody";
		} //reassigns value to Mr. Nobody
	
	var queryUrl = 'http://www.omdbapi.com/?t=' + value +'&y=&plot=short&r=json&tomatoes=true';

// This line is just to help us debug against the actual URL.  
	console.log(queryUrl);

	request(queryUrl, function (error, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!error && response.statusCode == 200) {

		// Parse the body of the site and recover selected info
	
		console.dir("Title: " + JSON.parse(body)["Title"]);
		console.dir("Release Year: " + JSON.parse(body)["Year"]);
		console.dir("Rating: " + JSON.parse(body)["imdbRating"]);
		console.dir("Country: " + JSON.parse(body)["Country"]);
		console.dir("Language: " + JSON.parse(body)["Language"]);
		console.dir("Plot: " + JSON.parse(body)["Plot"]);
		console.dir("Actors: " + JSON.parse(body)["Actors"]);
		console.dir("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
		console.dir("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);

	}//end
	});
}