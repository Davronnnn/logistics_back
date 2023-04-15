const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
	// process.env.DB_NAME, // Название БД
	// process.env.DB_USER, // Пользователь
	// process.env.DB_PASSWORD, // ПАРОЛЬ
	'postgres',
	'admin',
	'postgres',
	{
		dialect: 'postgres',
		// host: process.env.DB_HOST,
		host: 'localhost',
		// port: process.env.DB_PORT,
		port: 5432,
	}
);
