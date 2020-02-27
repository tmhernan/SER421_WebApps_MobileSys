// /euro POST
// /pound POST
// /pop GET
// /history GET
// Operand: 8 was converted from USD to 6.24 POUND IP: ::1 User-Details: Mozilla..etc...

var history = [];

var usToEuro = function(dollars) {
    //add to stack
    var euros = dollars * 0.9;

    var historyObj = {
        operand: 'Euro',
        dollar: dollars,
        currency: euros
    };

    const fs = require('fs');
    const jsonFile = fs.readFileSync('./t.json');
    console.log('json file is');
    console.log(jsonFile);
    console.log(jsonFile.buffer.byteLength);

    if (jsonFile.buffer.byteLength > 0) {
        var answers = JSON.parse(jsonFile);
        console.log(answers);
    } else {
        var answers = [];
    }

    answers.push(historyObj);
    console.log(answers);

    var activity = JSON.stringify(answers, null, 2);

    fs.writeFileSync('./t.json', activity);

    return euros;
};

var usToPound = function(dollars) {
    var pounds = dollars * 0.78;

    var historyObj = {
        operand: 'Pound',
        dollar: dollars,
        currency: pounds
    };

    const fs = require('fs');
    const jsonFile = fs.readFileSync('./t.json');
    console.log('json file is');
    console.log(jsonFile);

    if (jsonFile.buffer.byteLength > 0) {
        var answers = JSON.parse(jsonFile);
        console.log(answers);
    } else {
        var answers = [];
    }

    answers.push(historyObj);
    console.log(answers);

    var activity = JSON.stringify(answers, null, 2);
    fs.writeFileSync('./t.json', activity);

    return pounds;
};

var history = function() {
    const fs = require('fs');
    const jsonFile = fs.readFileSync('./t.json');
    console.log('json file is');
    console.log(jsonFile);
    console.log(jsonFile.buffer.byteLength);

    if (jsonFile.buffer.byteLength > 0) {
        var answers = JSON.parse(jsonFile);
    } else {
        var answers = null;
    }

    return answers;
};

var pop = function() {
    const fs = require('fs');
    const jsonFile = fs.readFileSync('./t.json');
    console.log('json file is');
    console.log(jsonFile);

    //iterate through and put in array then pop then add to file

    if (jsonFile.buffer.byteLength > 0) {
        var answers = JSON.parse(jsonFile);

        var answersSize = answers.length;
        console.log('printing anaswers');
        console.log(answers);

        var updatedAns = answers.pop();
        console.log('printing anaswers');
        console.log(answers);

        var activity = JSON.stringify(answers, null, 2);
        fs.writeFileSync('./t.json', activity);

        console.log('printing history');
        var result = this.history;

        return answers;
    } else {
        var result = null;
        return result;
    }
};

exports.usToEuro = usToEuro;
exports.usToPound = usToPound;
exports.pop = pop;
exports.history = history;

/*
console.log(usToEuro(5));
console.log(usToEuro(10));
console.log(usToPound(10));
console.log(history());

console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(usToEuro(5));
console.log(history());

//console.log(pop());
*/
