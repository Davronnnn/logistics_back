// const Product = require('../../models/product.model'); //

// getProducts
const getProducts = async (req, res) => {
	res.json({ message: 'editProduct' }); // try {
	// 	const products = await Product.find();
	// 	res.json(products);
	// } catch (err) {
	// 	res.status(500).json({ message: err.message });
	// }
};

// getProduct
const getProduct = async (req, res) => {
	res.json({ message: 'editProduct' }); // try {
	// 	const product = await Product.findById(req.params.id);
	// 	res.json(product);
	// } catch (err) {
	// 	res.status(500).json({ message: err.message });
	// }
};

// createProduct
const createProduct = async (req, res) => {
	res.json({ message: 'editProduct' }); // const product = new Product({
	// 	name: req.body.name,
	// 	price: req.body.price,
	// });
	// try {
	// 	const newProduct = await product.save();
	// 	res.status(201).json(newProduct);
	// } catch (err) {
	// 	res.status(400).json({ message: err.message });
	// }
};

// editProduct
const editProduct = async (req, res) => {
	res.json({ message: 'editProduct' });
	// return

	// try {
	// 	const product = await Product.findById(req.params.id);
	// 	if (product == null) {
	// 		return res.status(404).json({ message: 'Cannot find product' });
	// 	}
	// 	if (req.body.name != null) {
	// 		product.name = req.body.name;
	// 	}
	// 	if (req.body.price != null) {
	// 		product.price = req.body.price;
	// 	}
	// 	const updatedProduct = await product.save();
	// 	res.json(updatedProduct);
	// } catch (err) {
	// 	res.status(500).json({ message: err.message });
	// }
};

// deleteProduct
const deleteProduct = async (req, res) => {
	res.json({ message: 'editProduct' }); // try {
	// 	const product = await Product.findById(req.params.id);
	// 	if (product == null) {
	// 		return res.status(404).json({ message: 'Cannot find product' });
	// 	}
	// 	await product.remove();
	// 	res.json({ message: 'Deleted Product' });
	// } catch (err) {
	// 	res.status(500).json({ message: err.message });
	// }
};

module.exports = {
	getProducts,
	getProduct,
	createProduct,
	editProduct,
	deleteProduct,
};
