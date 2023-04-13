const pool = require('./db').pool;

const createClientTable = async () => {
	const query = `
    CREATE TABLE IF NOT EXISTS clients (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      company_name VARCHAR(255) NOT NULL
    )
  `;
	await pool.query(query);
};

const initClientTable = async () => {
	await createClientTable();
};

const getAllClients = async () => {
	const query = 'SELECT * FROM clients ORDER BY id ASC';
	const result = await pool.query(query);
	return result.rows;
};

module.exports = { initClientTable, getAllClients, createClientTable };
