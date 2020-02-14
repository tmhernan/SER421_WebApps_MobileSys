var express = require('express');
var router = express.Router();
var questionModule = require('../questionModule')

router.post('/question/4', function(req, res, next) {
    var currentTime = new Date();
    var oldTime = req.session.time;
    var oldTimeOjb = new Date(oldTime)

    console.log(currentTime);
    console.log(oldTimeOjb)
    var timeDiff = currentTime-oldTimeOjb
    console.log(timeDiff)


    if (timeDiff > 30000){
        res.render("nameerror")
    }else{
    //saving the time from when user answered first question
    req.session.time = new Date();    



    //save answer from question 2 in session
    req.session.question3 = req.body.question3
    
    //get name of user saved in session
    var name = req.session.name
    
    var questionObj = questionModule.getQuestion(4)
    var question = questionObj.question
    var options = questionObj.options

  
    res.render('question4', {question : question, options : options, name: name});
    }
});

module.exports = router;