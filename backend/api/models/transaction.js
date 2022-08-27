const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: String,
    cost: Number,
    title: String,
    description: String,
    date: Date

});

module.exports = mongoose.model("Transaction", transactionSchema);