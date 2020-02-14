var express = require('express');
var router = express.Router();
var questionModule = require('../questionModule')

router.post('/question/5', function(req, res, next) {
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



    //save answer from question 4 in session
    req.session.question4 = req.body.question4
    
    //get name of user saved in session
    var name = req.session.name
    
    var questionObj = questionModule.getQuestion(5)
    var question = questionObj.question
    var options = questionObj.options

  
    res.render('question5', {question : question, options : options, name: name});
    
    }
});

module.exports = router;