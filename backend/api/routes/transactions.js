const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message:"transactions"
    });
});

router.get('/:tranId', (req, res, next)=>{
    res.status(200).json({
        message:"transaction "+req.params.tranId
    });
});

module.exports = router;