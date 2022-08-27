const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//getting routers
const transactionsRouter = require('./routes/transactions');
const usersRouter = require('./routes/users');

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes
app.use('/transactions', transactionsRouter);
app.use('/users', usersRouter);

//error handling
app.use((req, res, next)=>{
    const error = new Error('Endpoint not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;