const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Recipe
let Movies = new Schema({
  quote: {
    type: String
  },
  author: {
    type: String
  }
},{
  collection: 'movies'
});

module.exports = mongoose.model('Movies', Movies);
