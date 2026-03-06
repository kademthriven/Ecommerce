const getAllUsers = (req, res) => {
    res.status(200).send("Fetching all users");
};

const addUser = (req, res) => {
    res.status(201).send("Adding a new user");
};

const getUserById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(`Fetching user with ID: ${id}`);
};

module.exports = {
    getAllUsers,
    addUser,
    getUserById
};