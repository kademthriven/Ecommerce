const express = require('express');
const router = express.Router();

// GET /users
router.get('/', (req, res) => {
    res.status(200).send("Fetching all users");
});

// POST /users
router.post('/', (req, res) => {
    res.status(201).send("Adding a new user");
});

// GET /users/:id
router.get('/:id', (req, res) => {
    res.status(200).send(`Fetching user with ID: ${req.params.id}`);
});

module.exports = router;