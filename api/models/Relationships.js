const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Relationships Quotes
let Relationships = new Schema({
  quote: {
    type: String
  },
  author: {
    type: String
  }
},{
  collection: 'relationships'
});

module.exports = mongoose.model('Relationships', Relationships);
