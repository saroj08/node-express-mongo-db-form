var express = require('express');
var router = express.Router();
 var bodyparser=require("body-parser");
var urlencodedparser=bodyparser.urlencoded({extended:false});
var multer=require('multer');
 //var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// db =  mongoose.createConnection('mongodb://localhost/student');
var user2 = require('./connection.js');
router.get("/",function(req,res){
  res.render("form",{title:" "});
});
router.post("/form",urlencodedparser,function(req,res)
{

  var user1 = req.body.uname;
  console.log(user1);
    user2.find({ fname: user1 }, function(err, user) {

      if (err)
      {
        throw err
      }
        else if(user.length)
        {
          res.end("welcome to our website");
        }
        else
        {

          res.render("form",{title:"Invalid username "});
        }

    //   function(err,docs){
		// 	console.log(docs);
    //   if(err)
    //   {
    //    throw error;
    //   }
		// 	else if( docs.length){
     //
     //
		// 		res.render("form",{title:"Invalid username "});
     //
     //
		// 	}
    //   else{
		// 		//res.render('register',{'message':'Usermail already exists try with another'});
		// 		res.end("welcome to our website");
    //   }
     //
		});

});
module.exports= router;
