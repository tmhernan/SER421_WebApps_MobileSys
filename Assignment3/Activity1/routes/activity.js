var express = require('express');
var router = express.Router();
var fs = require('fs');
var commentModule = require('../comment')


router.get('/view', function(req, res, next) {

    var userActions = commentModule.listuseractivity();

    console.log(userActions)

    res.render('useractivity', {userActions: userActions});


});

module.exports = router;
