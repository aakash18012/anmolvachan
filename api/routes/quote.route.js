const express = require('express');
const app = express();
const quoteRoutes = express.Router();

// Require Quote model in our routes module
let Life = require('../models/Life');
let Bhagvatgeeta = require('../models/Bhagvatgeeta');
let Success = require('../models/Success');
let Inspirational = require('../models/Inspirational');
let Startup = require('../models/Startup');
let Movies = require('../models/Movies');
let Book = require('../models/Book');
let Relationships = require('../models/Relationships');

// Defined store route
/*quoteRoutes.route('/add').post(function (req, res) {

  let quote = new Quote(req.body);
  quote.save()
    .then(quote => {
      res.status(200).json({'quote': 'quote in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});*/

// Defined get data(index or listing) route
quoteRoutes.route('/get/bhagvatgeeta').get(function (req, res) {
  let  modalType;
  switch(req.params.type) {
    case 'bhagvatgeeta':
      modalType=Bhagvatgeeta;
      break;
    case 'life':
      modalType=Life;
      break;
    case 'success':
      modalType=Success;
      break;
    case 'inspirational':
      modalType=Inspirational;
      break;
    case 'relationship':
      modalType=Relationships;
      break;
    case 'startup':
      modalType=Startup;
      break;
    case 'book':
      modalType=Book;
      break;
    case 'movie':
      modalType=Movies;
      break;
  }

  modalType.find(function (err, quotes){
    let responseJson={
      results:[],
      type:'',
    }
    if(err){
      responseJson.results=quotes;
      responseJson.type=req.params.type;
      console.log(err);
    }
    else {
      responseJson.results=quotes;
      responseJson.type=req.params.type;
      res.json(responseJson);

    }
  });
});

/*// Defined edit route
quoteRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  modalType.findById(id, function (err, quote){
      res.json(quote);
  });
});

//  Defined update route
quoteRoutes.route('/update/:id').post(function (req, res) {
    modalType.findById(req.params.id, function(err, quote) {
    if (!quote)
      return next(new Error('Could not load Document'));
    else {
        quote.quote_data = req.body.quote;

        quote.save().then(quote => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
quoteRoutes.route('/delete/:id').get(function (req, res) {
    modalType.findByIdAndRemove({_id: req.params.id}, function(err, quote){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});*/

module.exports = quoteRoutes;
