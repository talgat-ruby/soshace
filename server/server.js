import express from 'express';
import mongodb from 'mongodb';

const app = express();
const url = 'mongodb://localhost/soshace';

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

mongodb.MongoClient.connect(url, function(err, db) {
	app.get('/api/categories', (req, res) => {
		db.collection('categories').find({}).toArray((err, categories) => {
			res.json(categories);
		});
	});

	app.listen(3001, () => console.log('Server is running on localhost:3001'));
});

