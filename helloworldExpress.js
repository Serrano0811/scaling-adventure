// Combining all the dependencies we need for this app
var express = require('express'),
	app = express(),
	engines = require('consolidate'),
	MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

// Setting templates to render properly
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Connecting to the MongoDB database server
MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {

	assert.equal(null, err);
	console.log("Successfully connected to MongoDB");

	app.get('/', function(req, res) {

		db.collection('movies').find({}).toArray(function(err, docs) {
			res.render('movies', { 'movies': docs }); // Remember that in this line "docs" is the variable passed to the callback in case it succeded producing the array
		});
	});

	// At the end to send back a 404 status in case the methos above passed
	app.use(function(req, res) {
		res.sendStatus(404);
	});

	var server = app.listen(3000, function() {
		var port = server.address().port;
		console.log('Express server listening on port %s', port);
	});

});