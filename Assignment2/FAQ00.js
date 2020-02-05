

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

    //get id
    getQA(objectfaq){
        
        var faqID = objectfaq.id
        console.log(faqID)
        
        return faqID
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
            tags: tag,
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

        console.log(newFAQ)
        return newFAQ
    }

    delete(id){

        const fs = require('fs');
        const jsonFile = fs.readFileSync('QA.json')
        const object = JSON.parse(jsonFile);

        for (const element of object){
            if(element.id === id){
                console.log(element.id)
                object.pop(element)
                var objectJson = JSON.stringify(object, null, 2)
                fs.writeFileSync('QA.json', objectJson)
                console.log('Deleted object id: ' + element.id)
                return;
            }
        }
        console.log('element not found')    
    }   

    editA(id, answer){
        const fs = require('fs');
        const jsonFile = fs.readFileSync('QA.json')
        const object = JSON.parse(jsonFile);
        //console.log(answer)
        //console.log(id)

            ///use regular for loop for this one
        for (var i = 0; i < object.length; i++){
            //console.log(answer)
            //console.log(object[i].id)
            //console.log(object[i].answer)
            if(object[i].id === id){
                if(object[i].answer !== answer){
                    object[i].answer = answer
                    //console.log(object[i].answer)
                    var objectJson = JSON.stringify(object, null, 2)
                    console.log("Edited answer: ")
                    console.log(object[i])
            
                    fs.writeFileSync('QA.json', objectJson)
                    return;
                }
            }
        }
        console.log('No change in answer. Update not made.')
    }

    editT(id, tags){
        const fs = require('fs');
        const jsonFile = fs.readFileSync('QA.json')
        const object = JSON.parse(jsonFile);
        console.log(tag)
        //console.log(id)

            ///use regular for loop for this one
        for (var i = 0; i < object.length; i++){
            if(object[i].id === id){
                console.log(object[i].tag)
                if(object[i].tags !== tags){
                    object[i].tags = tags
                    var objectJson = JSON.stringify(object, null, 2)
                    console.log("Edited answer: ")
                    console.log(object[i])
            
                    fs.writeFileSync('QA.json', objectJson)
                    return;
                }
            }
        }
        console.log('No change in tags. Update not made.')
    }

    filter(author, start, end, tags){
        const fs = require('fs');
        const jsonFile = fs.readFileSync('QA.json')
        const object = JSON.parse(jsonFile);

        for(var i=0; i < object.length; i++){
            
            var tagsArr = object[i].tags.split(',')
            object[i].tags = tagsArr.map(str => str.replace(/\s/g, '')); //remove whitespace in array

            var dateStr = object[i].date
            object[i].date = new Date(dateStr)
        }

        //console.log(object)

        var filteredArray; 

        //TAGS
        if(tags != null){
            var temp = tags.split(',') //user entered array
            var userTagArr = temp.map(el => el.trim()) //taking away whitespace of user entered array
           
            //console.log(userTagArr)
            //console.log(object)

            var filteredTags = object.filter((item) =>{
                for(var j = 0; j < userTagArr.length; j++){
                    if(item.tags.indexOf(userTagArr[j]) != -1){
                        console.log(userTagArr[j])
                        return true;
                    }
                }
            })
        }else{ //if tags is null just return original array which is object
            filteredTags = object
        }
        
        //REPLACE OBJECT WITH filteredTags
        if(author != null){ //takes care of tags not null or tags is null
            author = author.trim()
            var filteredAuth = filteredTags.filter(function(item){
                 //results included filtered tags or not
                return item.author.toLowerCase() == author.toLowerCase()
            })
         //if author is null but tags were not
        }else if(author == null && tags != null){
            
            filteredAuth = filteredTags

        //the author and tags is null
        }else{
            filteredAuth = object
        }

        //REPLACE OBJECT WITH filteredAuth
        //start and end date exist
        if (start != null && end != null){ //takes care of author combo and thus tag combos
            var startVal = new Date(start)
            var endVal = new Date(end)
            var filteredDates;
            if(startVal.getTime() > endVal.getTime()){
                var tempStartVal = startVal
                startVal = endVal
                endVal = tempStartVal
            }
            filteredDates = filteredAuth.filter(function(item){
                return item.date.getTime() >= startVal.getTime() &&
                        item.date.getTime() <= endVal.getTime()
            })
        //only end date exists
        }else if(end != null && start === null || start === undefined){ //takes care of author combo and thus tag combos
            var endVal = new Date(end)
            filteredDates = filteredAuth.filter(function(item){
                return item.date.getTime() <= endVal.getTime()
            })
        //only start date exists
        }else if(start != null && end === null || end === undefined){ //takes care of author combo and thus tag combos
            var startVal = new Date(start)
            filteredDates = filteredAuth.filter(function(item){
                return item.date.getTime() >= startVal.getTime() &&
                        item.date.getTime() <= endVal.getTime()
            })
        //if start and end date were both null    
        }else if(start == null && end == null){
            filteredDates = filteredAuth
        }

        console.log('The filtered list is: ')
        console.log(filteredDates)

        return filteredDates
    } 
}


var a = new FAQ();

var faq1 = a.add('yo', 'hello', 'hello', 'hello');
var faqID = a.getQA(faq1)
//a.delete(faqID);

var b = new FAQ();

b.editA(faqID, '0000000000000000000;o')
//b.editA(1603488478263.455, '0000000000000000000;o')
//b.editT(1603488478263.455, 'hello, hello, hellho;iuhuiho')

//Testing author - ignore case
//b.filter( 'Dr.h', null, null, null)

//testing filter - tag with whitespace
var c = new FAQ();
c.filter( null, null, null, ' blackbox')

//testing filter - author and tag
var d = new FAQ();
d.filter( 'dr.m', null, null, ' blackbox')

//testing filter - dates only with whitespace
var e = new FAQ();
e.filter( null, '07/01/2019', '  07/20/2019', null)