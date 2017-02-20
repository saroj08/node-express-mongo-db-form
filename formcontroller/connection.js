var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
db =  mongoose.connect('mongodb://localhost:27017/student');
var Schema = mongoose.Schema;
var userSchema = new Schema({
fname: String,
lname: String,
uemail:String

});

// the schema is useless so far
// we need to create a model using it
var user = mongoose.model('register', userSchema);
module.exports = user;
