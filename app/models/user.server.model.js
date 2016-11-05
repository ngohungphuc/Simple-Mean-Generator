/*
* @Author: hoangphucvu
* @Date:   2016-10-20 11:08:23
* @Last Modified by:   phuc.ngo
* @Last Modified time: 2016-11-04 08:41:13
*/
//demo for models
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	username:{type:String,unique:true},
	password:{type:String},
	level:{type: Number}
});

var User = mongoose.model('users',userSchema);

module.exports = User;