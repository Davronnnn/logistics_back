const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Client = sequelize.define('Client', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	name: { type: DataTypes.STRING },
	company_name: { type: DataTypes.STRING },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: 'client' },
});
