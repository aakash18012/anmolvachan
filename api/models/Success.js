const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Success Quotes
let Success = new Schema({
  quote: {
    type: String
  },
  author: {
    type: String
  }
},{
  collection: 'success'
});

module.exports = mongoose.model('Success', Success);
