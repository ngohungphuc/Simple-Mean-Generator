/*
 * @Author: hoangphucvu
 * @Date:   2016-10-20 13:55:32
 * @Last Modified by:   Ngo Hung Phuc
 * @Last Modified time: 2016-11-11 21:18:36
 */

var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.server.controller');

//handle 404 error when turn on html5 mode in angular
router.get('*', indexController.All);

module.exports = router;