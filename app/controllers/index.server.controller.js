/*
* @Author: hoangphucvu
* @Date:   2016-10-20 13:55:32
* @Last Modified by:   phuc.ngo
* @Last Modified time: 2016-11-04 09:06:53
*/

var User = require('../models/user.server.model');
exports.Index = function(req,res){
	res.render('site/index', { title: 'Trang Chủ' });
};
