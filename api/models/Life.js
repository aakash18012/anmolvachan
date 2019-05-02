const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Recipe
let Life = new Schema({
  quote: {
    type: String
  },
  author: {
    type: String
  }
},{
  collection: 'life'
});

module.exports = mongoose.model('Life', Life);
