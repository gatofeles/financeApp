const express = require('express');
const router = express.Router();
const Transaction = require("../models/transaction");
const mongoose = require("mongoose");

router.get('/', (req, res, next)=>{
     Transaction.find().exec().then(trans => {
        console.log(trans);
        res.status(200).json({
            transactions:trans
        });
    }).catch(err=>{res.status(500).json({
        transactions:"Get failed. Reason: "+err.message});
    });
    
});

router.get('/:tranId', (req, res, next)=>{
    Transaction.findById(req.params.tranId).exec().then(tran => {

    if(tran){
        res.status(200).json({
            transactions:tran
       });
    }
    else{
        res.status(404).json({
            transactions:"No transaction found with that Id."
       });
    }   
    }).catch(err=>{res.status(500).json({
        transactions:"Get failed. Reason: "+err.message});
    });
});

router.post('/', (req, res, next)=>{
    const transaction = new Transaction({
        _id: mongoose.Types.ObjectId(),
        cost: req.body.cost,
        title: req.body.title,
        description: req.body.description,
        date: mongoose.now().getUTCDate()
    });

    transaction.save().then(result =>{
        console.log(result);
        res.status(201).json({
            message: "Transaction Successfully created",
            response: transaction
        }
            );
    }).catch(err=>{res.status(500).json({
        transactions:"Post failed. Reason: "+err.message});
    });
});

router.put('/:tranId',(req, res,next)=>{
    Transaction.updateOne({_id: req.params.tranId},
       {$set:{ cost: req.body.cost,
        title: req.body.title,
        description: req.body.description
       }} ).exec().then(result => {
        res.status(200).json({
            message:"Transaction successfully updated.",
            results:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"Update operation failed. Reason: "+err.message
        })
    });
});

router.delete('/:tranId',(req, res,next)=>{
    Transaction.remove({_id: req.params.tranId}).exec().then(result => {
        res.status(200).json({
            message:"Transaction successfully deleted.",
            results:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"Delete operation failed. Reason: "+err.message
        })
    });
});

module.exports = router;