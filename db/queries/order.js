const pool = require('./db').pool;

const createOrderTable = async () => {
	const query = `
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      client_id INTEGER REFERENCES clients(id) NOT NULL,
      currier_id INTEGER REFERENCES curriers(id) NOT NULL,
      destination VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      where_from VARCHAR(255) NOT NULL,
      price_offer INTEGER NOT NULL
    )
  `;
	await pool.query(query);
};

module.exports = { createOrderTable };
const pool = require('./db').pool;
const { createOrderTable } = require('./orderQueries');


const initOrderTable = async () => {
	await createOrderTable();
};

const getAllOrders = async () => {
	const query = 'SELECT * FROM orders ORDER BY id ASC';
	const result = await pool.query(query);
	return result.rows;
};

module.exports = { initOrderTable, getAllOrders };