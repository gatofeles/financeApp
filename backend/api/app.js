const express = require('express');
const app = express();
const transactionsRouter = require('./routes/transactions');

app.use('/transactions', transactionsRouter);

module.exports = app;