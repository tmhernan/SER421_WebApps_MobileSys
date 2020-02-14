var express = require('express');
var router = express.Router();
var fs = require('fs');
var commentModule = require('../comment')


router.get('/', function(req, res, next) {
  var file;
  fs.readFile('./files/article.txt', function (err,data) {
      if (err) throw err;
      file = data
      console.log(file)
      return file;
  })
  
  var comments = commentModule.getComments();
  
  res.render('index', {file: file, comments: comments});

});

module.exports = router;
