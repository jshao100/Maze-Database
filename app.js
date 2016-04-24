/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

var $ = require('jQuery');
var fs = require('fs');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

app.post('/save', function (req, res) {
	console.log('WORKS WOOT');

	var fileName = "./public/mazes/maze.txt";
	var file = fs.createWriteStream(fileName);
	file.on('error', function(err) { /* error handling */ });


	var rows = $('.maze').children('.maze-row').each(function() {});
	var cols;
	
	var i;
	var j;
	var str;
	for (i = 0; i < rows.length; i++) {
		cols = $(rows[i]).children('.maze-cell').each(function() {});	
		str = "";
		for (j = 0; j < cols.length; j++) {
			if (!("white").localeCompare((cols[j]).style.backgroundColor))			str += " ";
			else if (!("black").localeCompare((cols[j]).style.backgroundColor))	str += "X";
			else if (!("green").localeCompare((cols[j]).style.backgroundColor))	str += "S";
			else if (!("red").localeCompare((cols[j]).style.backgroundColor))		str += "E";
			else																						str += "?";
		}
		file.write(str + '\n');
	}	
	file.end();
});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
	console.log("server starting on " + appEnv.url);
});

