const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Recipe
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
