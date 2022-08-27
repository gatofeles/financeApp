const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message:"users"
    });
});

router.post('/', (req, res, next)=>{
    const user = {
        username : req.body.username,
        password : req.body.password,
        email : req.body.email
    };
    
    res.status(200).json({
        message:"User successfully created",
        users: user});
});

router.get('/:userId', (req, res, next)=>{
    res.status(200).json({
        message:"users "+req.params.tranId
    });
});

module.exports = router;