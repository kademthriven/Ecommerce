// Get all products
const getAllProducts = () => {
    return "Fetching all products";
};

// Get product by ID
const getProductById = (id) => {
    return `Fetching product with ID: ${id}`;
};

// Add new product
const addProduct = () => {
    return "Adding a new product";
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};