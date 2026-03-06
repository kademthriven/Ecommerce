const productService = require("../services/productService");
const path = require("path");

// GET /products
exports.getAllProducts = (req, res, next) => {
    try {
        const result = productService.getAllProducts();
        console.log(result);
        res.status(200).sendFile(path.join(__dirname, "../view/product.html"));
    } catch (err) {
        next(err);
    }
};

// GET /products/:id
exports.getProductById = (req, res, next) => {
    try {
        const id = req.params.id;
        const result = productService.getProductById(id);
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
};

// POST /products
exports.addProduct = (req, res, next) => {
    try {
        // const result = productService.addProduct();
        const data = req.body; // Assuming product data is sent in the request body
        res.status(201).json({ value: data.productName });
    } catch (err) {
        next(err);
    }
};