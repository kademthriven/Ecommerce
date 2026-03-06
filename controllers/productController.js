const productService = require("../services/productService");

// GET /products
exports.getAllProducts = (req, res) => {
    const result = productService.getAllProducts();
    res.status(200).send(result);
};

// GET /products/:id
exports.getProductById = (req, res) => {
    const id = req.params.id;
    const result = productService.getProductById(id);
    res.status(200).send(result);
};

// POST /products
exports.addProduct = (req, res) => {
    const result = productService.addProduct();
    res.status(201).send(result);
};