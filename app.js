var express=require ("express");
var app=express();
var formController=require("./formcontroller/formcontroller");
var loginController = require("./formcontroller/login");
var connection = require("./formcontroller/connection");
app.set('view engine','ejs');
app.use(express.static("./public"));
// app.set("views","./views");

app.use("/", loginController);
// app.use("/register",connection);
formController(app);

app.listen(8000);
console.log("listening at port");
// module.exports = app;
app.get('/',function(req,res,next){
  console.log("got");
res.render('form',{title:""});
});
app.get('/register',function(req,res,next){
  console.log("register");
var welcome="WELCOME TO OUR WEBSITE";
  res.render("register",{title:welcome});
});
// app.get('/form',function(req,res){
//   console.log("got");
// res.render('form');
// });
