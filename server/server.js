import express from 'express';
import mongodb from 'mongodb';

const app = express();
const url = 'mongodb://localhost/soshace';

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

mongodb.MongoClient.connect(url, (err, db) => {
	db.collection('categories').drop();
	db.collection('categories').insertMany([
		{ name: 'Category 1' }, 
		{ name: 'Category 2' }, 
		{ name: 'Category 3' }, 
		{ name: 'Category 4' }
	]);

	db.collection('products').drop();
	db.collection('products').insertMany([{
		name: 'Hello',
		purchasePrice: 2000,
		sellPrice: 2500,
		category: 'Category 1'
	},{
		name: 'Product2',
		purchasePrice: 2200,
		sellPrice: 2700,
		category: 'Category 2'
	},{
		name: 'Product3',
		purchasePrice: 2200,
		sellPrice: 3000,
		category: 'Category 1'
	},{
		name: 'Product1',
		purchasePrice: 2200,
		sellPrice: 3000,
		category: 'Category 3'
	},{
		name: 'Product2',
		purchasePrice: 2200,
		sellPrice: 2700,
		category: 'Category 4'
	},{
		name: 'Product3',
		purchasePrice: 2200,
		sellPrice: 3000,
		category: 'Category 1'
	},{
		name: 'Product1',
		purchasePrice: 2200,
		sellPrice: 3000,
		category: 'Category 2'
	},{
		name: 'Product2',
		purchasePrice: 2200,
		sellPrice: 2700,
		category: 'Category 3'
	},{
		name: 'Product3',
		purchasePrice: 2200,
		sellPrice: 3000,
		category: 'Category 4'
	},{
		name: 'Product1',
		purchasePrice: 2200,
		sellPrice: 3000,
		category: 'Category 3'
	}]);

	app.get('/api/categories', (req, res) => {
		db.collection('categories').find({}).toArray((err, categories) => {
			res.json(categories);
		});
	});

	app.get('/api/products', (req, res) => {
		db.collection('products').find({}).toArray((err, products) => {
			res.json(products);
		});
	});

	app.listen(3001, () => console.log('Server is running on localhost:3001'));
});

