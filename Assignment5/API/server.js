// /euro POST
// /pound POST
// /pop GET
// /history GET

// Operand: 8 was converted from USD to 6.24 POUND IP: ::1 User-Details: Mozilla..etc...

var express = require('express');
var app = express();
var converter = require('./converter');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));

port = process.env.PORT || 8080;

app.post('/euro', function(req, res) {
    console.log('hello');
    console.log('request being received is: ' + req.body.value);

    var userRes = req.body.value;

    var contollerRes = converter.usToEuro(userRes);
    console.log('Logic is: ' + contollerRes);
    var data = JSON.stringify({ value: contollerRes });
    console.log('Data is' + data);

    res.send(data);
});

app.post('/pound', function(req, res) {
    console.log('hello');
    console.log('request being received is: ' + req.body.value);

    var userRes = req.body.value;
    var contollerRes = converter.usToPound(userRes);
    console.log('Logic is: ' + contollerRes);
    var data = JSON.stringify({ value: contollerRes });
    console.log('Data is' + data);

    res.send(data);
});

app.get('/history', function(req, res) {
    console.log('hello');
    console.log('request being received is: ' + req.body.value);
    var contollerRes = converter.history();
    var con = JSON.stringify(contollerRes);
    console.log('Logic is: ' + con);
    //var data = JSON.stringify(contollerRes);
    //console.log('Data is' + data);

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    console.log(ip);

    var dataObj = {
        history: contollerRes,
        ip: ip
    };
    var data = JSON.stringify(dataObj);

    console.log(data);

    res.send(data);
});

app.get('/pop', function(req, res) {
    console.log('hello');
    //console.log('request being received is: ' + req.body.value);
    var contollerRes = converter.pop();
    console.log('Logic is: ' + contollerRes);
    var data = JSON.stringify(contollerRes);
    console.log('Data is' + data);

    res.send(data);
});

app.listen(port);

console.log('Server started on port: ' + port);
