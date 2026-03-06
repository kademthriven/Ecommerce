const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/:userId", cartController.getCartByUser);
router.post("/:userId", cartController.addToCart);

module.exports = router;