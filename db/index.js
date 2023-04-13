// const Pool = require('pg').Pool;
const { Sequelize } = require('sequelize');

// const pool = new Pool({
// 	user: 'admin',
// 	host: 'localhost',
// 	database: 'api',
// 	password: 'password',
// 	port: 5432,
// });

module.exports = new Sequelize(
	// process.env.DB_NAME, // Название БД
	// process.env.DB_USER, // Пользователь
	// process.env.DB_PASSWORD, // ПАРОЛЬ
	'api',
	'admin',
	'password',
	{
		dialect: 'postgres',
		// host: process.env.DB_HOST,
		host: 'localhost',
		// port: process.env.DB_PORT,
		port: 8000,
	}
);

// new Sequelize();
// const getUsers = (request, response) => {
// 	pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
// 		if (error) {
// 			throw error;
// 		}
// 		response.status(200).json(results.rows);
// 	});
// };
// module.exports = {
// 	getUsers,
// 	pool,
// };
