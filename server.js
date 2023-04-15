require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const db = require('./db');

const router = require('./routes/index.js');

const { Client } = require('./models');
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/users', db.getUsers);
app.use('/api', router);

const start = async () => {
	try {
		await db.authenticate();
		await db.sync();
		app.listen(8000, () => console.log(`Server started on port ${8000}`));
	} catch (e) {
		console.log(e);
	}
};

start();
