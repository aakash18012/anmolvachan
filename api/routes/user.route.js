const express = require('express');
const app = express();
const userRoutes = express.Router();
// Require Recipe model in our routes module
let Users = require('../models/Users');
let Life = require('../models/Life');
let Bhagvatgeeta = require('../models/Bhagvatgeeta');
let Inspirational = require('../models/Inspirational');
let Relationships = require('../models/Relationships');
let Startup = require('../models/Startup');
let Success = require('../models/Success');
let Movies = require('../models/Movies');
let Book = require('../models/Book');

userRoutes.route('/signup').post(function (req, res) {
console.log(req.path)
  Book.collection.insert(req.body, function (err, docs) {
    if (err){
      res.status(400).send("unable to save to database");
      return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
      res.status(200).json({'user': 'Quots added successfully'});
    }
  });
/* let user = new Life(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'user': 'User added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });*/
});
// Defined get data(index or listing) route
userRoutes.route('/login').post(function (req, res) {
  Users.find(function (err, user){
   console.log(req.body.userName,req.body.password,user);
   var data=validate(req.body.userName,req.body.password,user);
   console.log(data);
    if(err){
      console.log(err);
    }
    else {
     res.json(data);
    }
  });
});

function validate(userName,password,users){
  var errorvalueData={
    errorvalue:null,
    user:null,
    message:'',
  };
    if (users) {
             const verified = users.some( (obj) => {
               if ( (obj.userName === userName) === false ) {
                 if ( (obj.password ===  password) === false) {
                   errorvalueData.errorvalue=3;
                   errorvalueData.message='both wrong';
                   return false;
                 }else {
                   errorvalueData.errorvalue=1;
                   errorvalueData.message='username wrong';
                   return false;
                 }
               }else
               if ((obj.password ===  password) === true) {
                 errorvalueData.errorvalue=0;
                 errorvalueData.message='Successfull login';
                 errorvalueData.user=obj;
                 return true;
               } else {
                 errorvalueData.errorvalue=2;
                 errorvalueData.message='password wrong';
                 return true;
               }
             })

               return errorvalueData;

           }else {
            errorvalueData.errorvalue=3;
            errorvalueData.message='both wrong';
             return errorvalueData;

           }



}

module.exports = userRoutes;
