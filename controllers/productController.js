const productService = require("../services/productService");
const path = require("path");

// GET /products
exports.getAllProducts = (req, res) => {
    const result = productService.getAllProducts();
    console.log(result);
    res.status(200).sendFile(path.join(__dirname, "../view/product.html"));
};

// GET /products/:id
exports.getProductById = (req, res) => {
    const id = req.params.id;
    const result = productService.getProductById(id);
    res.status(200).send(result);
};

// POST /products
exports.addProduct = (req, res) => {
    // const result = productService.addProduct();
    const data = req.body; // Assuming product data is sent in the request body
    res.status(201).json({ value: data.productName });
};