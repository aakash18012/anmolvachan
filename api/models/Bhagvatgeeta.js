const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Bhagvatgeeta Quote
let Bhagvatgeeta = new Schema({
  quote: {
    type: String
  },
  author: {
    type: String
  }
},{
  collection: 'bhagvatgeeta'
});

module.exports = mongoose.model('Bhagvatgeeta', Bhagvatgeeta);
