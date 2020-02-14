var express = require('express');
var router = express.Router();
var questionModule = require('../questionModule')

router.post('/question/last', function(req, res, next) {
    
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
    
    //get name of user saved in session
    var name = req.session.name
    var answer1 = req.session.question1
    var answer2 = req.session.question2
    var answer3 = req.session.question3
    var answer4 = req.session.question4
    var answer5 = req.body.question5

    var matches = questionModule.saveUserSurvey(name, answer1, answer2, answer3, answer4, answer5)

    res.render('lastpage', {name: name, matches: matches});

    //clear session data
    req.session.destroy();

    }

});

module.exports = router;