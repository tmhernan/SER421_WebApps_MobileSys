

class FAQ{

    //NOT WORKING/ ADDS CLASS NAME TO OBJECT
    constructor(question, answer, tag, author, date, id){
        this.question = question;
        this.answer = answer;
        this.tag = tag;
        this.author = author;
        this.date = date;
        this.id = id;
    }

    generateID(){
        const dec = 10000;
        const maxMul = 2000000000000
        const minMul = 1000000000000
        var randomNum = Math.floor(Math.random() * (maxMul * dec - minMul * dec) + minMul * dec)/(dec)

        //PASS THE JS OBJECT IN THIS METHOD AND CHECK TO SEE IF THE RANDOM NUMBER EXISTS
        //RECURSIVE CALL UNTIL ID IS UNIQUE

        return randomNum;
    }

    getDate(){

        var day = new Date();
        var dayString = day.toISOString()
        //console.log(dayString)

        return dayString;
    }

    add(question, answer, tag, author){

//NEED TO ADD THE FOLLOWING ERROR HANDLING:        
        // 1. if any of these are null AKA EMPTY return error message
        
        // 2. CHECK TO SEE IF THERE IS A DUPLICATE OBJECT
            //if so return error message
        const fs = require('fs');
        const jsonFile = fs.readFileSync('QA.json')
        const object = JSON.parse(jsonFile);

        //GENERATE DATE
        var day = this.getDate();

        //GENERATE ID
        var id = this.generateID();
        
        //GENERATE OBJECT
        var newFAQ = {
            question: question,
            answer: answer,
            tag: tag,
            author: author,
            date: day,
            id: id

        }
        //console.log(object)

        object.push(newFAQ)
        var objectJson = JSON.stringify(object, null, 2)

        //console.log(object)

        //WRITE NEW OBJECT CONTENTS INTO .JSON FILE
        fs.writeFileSync('QA.json', objectJson)
    }
}

var a = new FAQ();

a.add('hello', 'hello', 'hello', 'hello');
