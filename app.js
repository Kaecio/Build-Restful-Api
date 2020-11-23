const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRouters = require('./api/routes/orders');

app.use('/orders', orderRouters);
app.use('/products', productRoutes);

module.exports = app;