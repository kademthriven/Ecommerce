
const getCartByUser = (req, res, next) => {
    try {
        const userId = req.params.userId;
        res.status(200).send(`Fetching cart for user with ID: ${userId}`);
    } catch (err) {
        next(err);
    }
};


const addToCart = (req, res, next) => {
    try {
        const userId = req.params.userId;
        res.status(201).send(`Adding product to cart for user with ID: ${userId}`);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getCartByUser,
    addToCart
};