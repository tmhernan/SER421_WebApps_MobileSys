var express = require('express');
var router = express.Router();
var questionModule = require('../questionModule')

router.post('/question/2', function(req, res, next) {
    

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

    //save answer to question one in session
    req.session.question1 = req.body.question1
    
    //get name of user saved in session
    var name = req.session.name
    var answer1 = req.session.question1
    
    var questionObj = questionModule.getQuestion(2)
    var question = questionObj.question
    var options = questionObj.options

  
    res.render('question2', {question : question, options : options, name: name, answer1: answer1});
    }

});

module.exports = router;

