var express = require('express');
var router = express.Router();
var commentModule = require('../comment')


router.post('/delete', function(req, res, next) {
  console.log('submitted')
  console.log(req.body.id)

  var deletedComment = commentModule.deleteComment(req.body.id);
 
  if (deletedComment === false){
    res.render('cannotdelete');
  }else{
    res.render('deletedcomment');
  }

});

module.exports = router;
