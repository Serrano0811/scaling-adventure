var MongoClient = require('mongodb').MongoClient, // The dependency here for the mongodb module is to create an object to connect to the server
	assert = require('assert'); // The assert module is native of NodeJS we are using it to do just a bit of error checking.

// The connect function, first arg is the connection string:
// The connection string: it saying we are connecting to mongoDB locally using 27017 (default MongoDB port) and connect to the video databse
MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {
	// The callback function is the one handle the results

	// If the connection fails, this assert function will be call and the app will be terminated with the apropriate assert message,
	assert.equal(null, err);

	// If not, the flow continues
	console.log("Successfully connected to server");

	// Find some documents in our collection
	db.collection('movies').find({}).toArray(function(err, docs) {

		// Print the title of each document in the result set
		docs.forEach(function(doc) {
			console.log(doc.title); // The NodeJS driver with map the BSON to JSON and therefore we can use standard dot notation to access doc properties, in this case title property
		});
		db.close();
	});

	console.log("Called find()");
});