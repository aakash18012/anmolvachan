const express = require('express');
const app = express();
const recipeRoutes = express.Router();

// Require Recipe model in our routes module
let Recipe = require('../models/Recipe');
let Life = require('../models/Life');
let Bhagvatgeeta = require('../models/Bhagvatgeeta');

// Defined store route
recipeRoutes.route('/add').post(function (req, res) {

  let recipe = new Recipe(req.body);
  recipe.save()
    .then(recipe => {
      res.status(200).json({'recipe': 'recipe in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
recipeRoutes.route('/').get(function (req, res) {
  var c=Bhagvatgeeta;
  c.find(function (err, recipes){
    if(err){
      console.log(err);
    }
    else {
      res.json(recipes);
    }
  });
});

// Defined edit route
recipeRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Recipe.findById(id, function (err, recipe){
      res.json(recipe);
  });
});

//  Defined update route
recipeRoutes.route('/update/:id').post(function (req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
    if (!recipe)
      return next(new Error('Could not load Document'));
    else {
        recipe.person_name = req.body.person_name;
        recipe.recipe_name = req.body.recipe_name;
        recipe.recipe_gst_number = req.body.recipe_gst_number;

        recipe.save().then(recipe => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
recipeRoutes.route('/delete/:id').get(function (req, res) {
    Recipe.findByIdAndRemove({_id: req.params.id}, function(err, recipe){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = recipeRoutes;
