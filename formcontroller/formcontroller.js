var bodyparser=require("body-parser");
var urlencodedparser=bodyparser.urlencoded({extended:false});
// var multer=require('multer');
// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// db =  mongoose.createConnection('mongodb://localhost/student');
// var Schema = mongoose.Schema;
var user = require('./connection.js');
module.exports=function(app){
app.post('/Rform',urlencodedparser,function(req, res) {
  console.log("started");
var user1 = new user({
  fname:req.body.fname,
lname:req.body.lname,
uemail:req.body.uemail});
console.log(user1);
console.log("inserted");
// res.sen
user1.save(function(err,data){
console.log(req.body);
  console.log(data);
  if (err)
  {
    throw err;
    console.log("error in executing");
  }
  else
    {
      console.log(data);
  console.log('hello how are you');
    res.render("welcome");


    }

});
// user1.save();

// make this available to our users in our Node applications

});
};
