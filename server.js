//  create server in express  on port 3000
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const db = require('./db');

const productRoutes = require('./routes/products/products.route.js');
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get('/users', db.getUsers);
// app.get('/', db.getUsers);

// app.use('/api', productRoutes);

app.listen(8000, () => {
	console.log('Server is running on port 8000');
});
