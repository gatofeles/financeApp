const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message:"transactions"
    });
});

router.post('/', (req, res, next)=>{
    
    let transaction = {
        userId : req.body.userId,
        cost : req.body.cost,
        title : req.body.title,
        description : req.body.description,
        date: req.body.date
    }; 

    res.status(201).json({
        message: "Transaction Successfully created",
        response: transaction
    }
        );
});

router.get('/:tranId', (req, res, next)=>{
    res.status(200).json({
        message:"transaction "+req.params.tranId
    });
});

module.exports = router;