const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stock = new Schema({
  stock: { type: String, required: true, unique: true },
  likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Stock', Stock);