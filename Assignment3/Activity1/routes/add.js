var express = require('express');
var router = express.Router();
var commentModule = require('../comment')


router.post('/add', function(req, res, next) {
  console.log('submitted')
  console.log(req.body.id)
  console.log(req.body.comment)

  var newComment = commentModule.addComment(req.body.id, req.body.comment);
 
  if (newComment == false){
    res.render('cannotadd');
  }else{
    res.render('addcomment', {newComment : newComment});
  }

});

module.exports = router;
