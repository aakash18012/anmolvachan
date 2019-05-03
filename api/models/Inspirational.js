const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Inspirational Quote
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
