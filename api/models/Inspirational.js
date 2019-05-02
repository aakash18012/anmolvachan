const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Recipe
let Inspirational = new Schema({
  quote: {
    type: String
  },
  author: {
    type: String
  }
},{
  collection: 'inspirationals'
});

module.exports = mongoose.model('Inspirational', Inspirational);
