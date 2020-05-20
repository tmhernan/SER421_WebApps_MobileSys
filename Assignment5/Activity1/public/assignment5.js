/*
Calls to (converter) API using AJAX.

Note: Sents user agent information to be displayed.

https://www.w3schools.com/jsref/prop_nav_useragent.asp
The userAgent property returns the value of the 
user-agent header sent by the browser to the server.

The value returned, contains information about the name, 
version and platform of the browser.
*/

function postToServerEuro() {
    let dollar = document.getElementById('number').value;
    let req = new XMLHttpRequest();

    req.open('POST', '/euro', true);
    req.setRequestHeader('Content-type', 'application/json');

    console.log('in post to server');
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            console.log('State: ' + req.readyState);
            if (req.status === 200) {
                let resJson = JSON.parse(req.responseText);
                console.log(resJson);
                console.log(resJson.value);
                if (resJson.value === null) {
                    alert('Input must be a number!');
                } else {
                    document.getElementById('result').innerHTML = resJson.value;
                }
            } else {
                console.log('failure');
                document.getElementById('result').innerHTML = 'Error retrieving response from server';
            }
        }
    };

    var data = JSON.stringify({ value: dollar });
    console.log('Data is' + data);
    req.send(data);

    return req;
}

function postToServerPound() {
    let dollar = document.getElementById('number').value;
    let req = new XMLHttpRequest();

    console.log('in post to server for pound');

    req.open('POST', '/pound', true);
    req.setRequestHeader('Content-type', 'application/json');

    console.log('in post to server');
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            console.log('State: ' + req.readyState);
            if (req.status === 200) {
                let resJson = JSON.parse(req.responseText);
                console.log(resJson);
                console.log(resJson.value);
                if (resJson.value === null) {
                    alert('Input must be a number!');
                } else {
                    document.getElementById('result').innerHTML = resJson.value;
                }
            } else {
                console.log('failure');
                document.getElementById('result').innerHTML = 'Error retrieving response from server';
            }
        }
    };

    obj = { value: dollar };
    var data = JSON.stringify(obj);
    req.send(data);

    return req;
}

function getFromServerHistory() {
    let req = new XMLHttpRequest();

    console.log('in history to server');

    req.open('GET', '/history', true);
    req.setRequestHeader('Content-type', 'application/json');

    console.log('in post ljljlkjlkto server');
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            console.log('State: ' + req.readyState);
            if (req.status === 200) {
                console.log(req.responseText);
                let resJson = JSON.parse(req.responseText);
                console.log(resJson);
                //if (typeof resJson  === null) {
                //    document.getElementById('resultList').innerHTML = 'no history to show';
                //} else {
                var list = resJson.history;

                var nav = navigator.userAgent;
                console.log(nav);

                // Operand: 8 was converted from USD to 6.24 POUND IP: ::1 User-Details: Mozilla..etc...
                var htmlStr = '<ol>';

                for (const element of list) {
                    htmlStr +=
                        '<li>' +
                        'Operand: ' +
                        element.dollar +
                        ' was converted from USD to ' +
                        element.currency +
                        ' ' +
                        element.operand +
                        ' IP Address is: ' +
                        resJson.ip +
                        ' User-Details: ' +
                        nav +
                        '</li>';
                }
                htmlStr += '</ol>';
                console.log(htmlStr);
                document.getElementById('resultList').innerHTML = htmlStr;
            } else {
                console.log('failure');
                document.getElementById('result').innerHTML = 'Error retrieving response from server';
            }
        }
    };

    req.send();

    return req;
}

function getFromServerPop() {
    let req = new XMLHttpRequest();

    console.log('in history to server');

    req.open('GET', '/pop', true);
    req.setRequestHeader('Content-type', 'application/json');

    console.log('in post to server');
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            console.log('State: ' + req.readyState);
            if (req.status === 200) {
                let resJson = JSON.parse(req.responseText);
                console.log(resJson);
                //document.getElementById('result').innerHTML = resJson.value;
            } else {
                console.log('failure');
                document.getElementById('result').innerHTML = 'Error retrieving response from server';
            }
        }
    };

    req.send();

    return req;
}
