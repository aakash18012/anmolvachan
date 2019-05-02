const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Recipe
let Book = new Schema({
  quote: {
    type: String
  },
  author: {
    type: String
  }
},{
  collection: 'books'
});

module.exports = mongoose.model('Book', Book);
