const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Client = sequelize.define('Client', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	company_name: { type: DataTypes.STRING },
	password: { type: DataTypes.STRING },
});

const Load = sequelize.define('Load', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	destination: { type: DataTypes.STRING },
	status: { type: DataTypes.STRING, defaultValue: 'active' },
	created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
	updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
	client: { type: DataTypes.INTEGER },
	// currier: { type: DataTypes.STRING, unique: true },
});

const Currier = sequelize.define('Currier', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	car_number: { type: DataTypes.STRING },
	status: { type: DataTypes.STRING, defaultValue: 'active' },
	car_size: { type: DataTypes.BIGINT, defaultValue: 0 },
	current_address: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

const Offer = sequelize.define('Offer', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	order: { type: DataTypes.INTEGER },
	currier: { type: DataTypes.STRING, unique: true },
	status: { type: DataTypes.STRING, defaultValue: 'active' },
	created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
	price_offer: { type: DataTypes.STRING },
});

Client.hasMany(Load);
Load.belongsTo(Client);

// Currier.hasMany(Load);
// Load.belongsTo(Currier);

Offer.hasOne(Load);
Load.belongsTo(Offer);

Currier.hasOne(Offer);
Offer.belongsTo(Currier);

module.exports = {
	Client,
	Load,
	Currier,
	Offer,
};
