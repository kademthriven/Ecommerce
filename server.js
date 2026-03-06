const express = require('express');
const app = express();
const port = 4000;

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.static('public'));
app.use(express.json());

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Centralized error handler (should be after all routes)
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});