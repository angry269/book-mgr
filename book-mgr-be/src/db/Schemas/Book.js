const mongoose = require('mongoose');
const { getMate } = require('./helpers');
const BookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    producer: String,
    DateInProducer: String,
    classify: String,
    count: Number,
    meta: getMate(),
});
mongoose.model('Book', BookSchema);