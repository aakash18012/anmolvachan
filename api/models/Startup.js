const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Startup Quotes
let Startup = new Schema({
  quote: {
    type: String
  },
  author: {
    type: String
  }
},{
  collection: 'startup'
});

module.exports = mongoose.model('Startup', Startup);
