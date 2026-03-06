const getCartByUser = (req, res) => {
    const userId = req.params.userId;
    res.status(200).send(`Fetching cart for user with ID: ${userId}`);
};

const addToCart = (req, res) => {
    const userId = req.params.userId;
    res.status(201).send(`Adding product to cart for user with ID: ${userId}`);
};

module.exports = {
    getCartByUser,
    addToCart
};