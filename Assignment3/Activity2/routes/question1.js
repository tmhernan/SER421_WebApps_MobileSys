var express = require('express');
var router = express.Router();
var questionModule = require('../questionModule')

router.post('/question/1', function(req, res, next) {

    req.session.time = new Date();


    var name = req.body.username
        req.session.name = name
        var questionObj = questionModule.getQuestion(1)
        var question = questionObj.question
        var options = questionObj.options
        res.render('question1', {question : question, options : options, name: name});

});

module.exports = router;

