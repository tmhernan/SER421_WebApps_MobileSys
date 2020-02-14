var http = require('http');
var url = require('url');
var qstring = require('querystring');

//DONT CARRY PASSWORD OVER
function studentHome(username, res){
   fs.readFile('./html/student.html', function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': 'foo='+ username
    });
    res.end(data);
  })
}

//DONT CARRY PASSWORD OVER
function instructorHome(username, res){
    var page = '<head><title>External Example</title></head>' +
      '<body>' +
      '<form method="post">' +
      'City: <input name="city"><br>' +
      '<input type="submit" value="Weather">' +
      '</form>' +
      '</body></html>';
      
      page = '<html>' + 
            '<h1>Welcome ' + username + '!</h1>' +
            '<p>username:' + username + '</p>' +
            '<p>role: instructor</p>' + page;
    res.end(page);
}


function login(username, res){
    fs.readFile('./html/hi.html', function (err,data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        res.end(data);
      })
}

http.createServer(function (req, res) {

    console.log(req.method);
  if (req.method == "POST"){
    var reqData = '';
    req.on('data', function (chunk) {
      reqData += chunk;
    });
    req.on('end', function() {
        var postParams = qstring.parse(reqData);
        var user = postParams.username;
        var pass = postParams.password;
        var role = postParams.role;
        var no = 'no';

        console.log(postParams)

        //LOGIN
        if(user === pass && user != '' && role === 'student'){
            studentHome(user, res);
        }else if(user === pass && user != '' && role === 'instructor'){ 
            instructorHome(user, res)
        }else{
            login(no, res)
        }
    });
  } else{
    login(null, res);
  }

}).listen(3000, 'localhost', 3, function() { 
                console.log('I am now ready!'); 
});
