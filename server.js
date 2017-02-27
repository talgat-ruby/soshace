import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const upload = multer();
const url = 'mongodb://localhost/soshace';
const PORT = 3001;

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(url, (error, db) => {
	// db.collection('categories').drop();
	db.collection('categories').insertMany([
		{ name: 'Category 1' },
		{ name: 'Category 2' },
		{ name: 'Category 3' },
		{ name: 'Category 4' }
	]);

	// db.collection('products').drop();
	// db.collection('products').insertMany([{
	// 	name: 'Hello',
	// 	purchasePrice: 2000,
	// 	sellPrice: 2500,
	// 	category: 'Category 1'
	// },{
	// 	name: 'Product2',
	// 	purchasePrice: 2200,
	// 	sellPrice: 2700,
	// 	category: 'Category 2'
	// },{
	// 	name: 'Product3',
	// 	purchasePrice: 2200,
	// 	sellPrice: 3000,
	// 	category: 'Category 1'
	// },{
	// 	name: 'Product1',
	// 	purchasePrice: 2200,
	// 	sellPrice: 3000,
	// 	category: 'Category 3'
	// },{
	// 	name: 'Product2',
	// 	purchasePrice: 2200,
	// 	sellPrice: 2700,
	// 	category: 'Category 4'
	// },{
	// 	name: 'Product3',
	// 	purchasePrice: 2200,
	// 	sellPrice: 3000,
	// 	category: 'Category 1'
	// },{
	// 	name: 'Product1',
	// 	purchasePrice: 2200,
	// 	sellPrice: 3000,
	// 	category: 'Category 2'
	// },{
	// 	name: 'Product2',
	// 	purchasePrice: 2200,
	// 	sellPrice: 2700,
	// 	category: 'Category 3'
	// },{
	// 	name: 'Product3',
	// 	purchasePrice: 2200,
	// 	sellPrice: 3000,
	// 	category: 'Category 4'
	// },{
	// 	name: 'Product1',
	// 	purchasePrice: 2200,
	// 	sellPrice: 3000,
	// 	category: 'Category 3'
	// }]);

	app.get('/api/categories', (req, res) => {
		db.collection('categories').find({}).toArray((err, categories) => {
			res.json(categories);
		});
	});

	app.delete('/api/categories', (req, res) => {
		const categoryId = ObjectId(req.query.id);
		db.collection('categories').deleteOne({ '_id': categoryId }, (err, result) => {
			db.collection('products').updateMany({ 'category': categoryId }, {$set: { 'category': '' }}, () => {
				res.send(result);
			});
		});
	});

	app.post('/api/categories', (req, res) => {
		db.collection('categories').insertOne({ name: req.query.name }, (err, result) => {
			res.send(result);
		});
	});

	app.get('/api/products', (req, res) => {
		db.collection('products').find({}).toArray((err, products) => {
			res.json(products);
		});
	});

	app.delete('/api/products', (req, res) => {
		db.collection('products').deleteOne({ '_id': ObjectId(req.query.id) }, (err, result) => {
			res.send(result);
		});
	});

	app.post('/api/products', upload.array(), (req, res) => {
		const { category, name, purchasePrice, sellPrice } = req.body;
		const insertData = {
			category: category && ObjectId(category),
			name,
			purchasePrice: Number(purchasePrice),
			sellPrice: Number(sellPrice)
		};
		db.collection('products').insertOne(insertData, (err, result) => {
			res.send(result);
		});
	});

	app.put('/api/products', upload.array(), (req, res) => {
		const { _id, category, name, purchasePrice, sellPrice } = req.body;
		const replaceData = {
			category: category && ObjectId(category),
			name,
			purchasePrice: Number(purchasePrice),
			sellPrice: Number(sellPrice)
		};
		db.collection('products').replaceOne({ '_id': ObjectId(_id) }, replaceData, (err, result) => {
			res.send(result);
		});
	});

	app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));
});

