
var checkUsername = 
    function(username){
        console.log(username)
        const fs = require('fs');
        const jsonFile = fs.readFileSync('./files/answers.json')
        var answers = JSON.parse(jsonFile)

        for(const element of answers){
            console.log(element.username)
            if(element.username === username){
                return false;
            }
        }
        return true;
    }

var getQuestion =
    function(id){

        const fs = require('fs');
        const jsonFile = fs.readFileSync('./files/questions.json')
        var questions = JSON.parse(jsonFile)

        var returnedQ;
        for (const element of questions){
            console.log(element)
            if(element.id === id){
                console.log(element.id)
                console.log(element.options)
                returnedQ = element;
                break;
            }
        }
        return returnedQ;
    }

var saveUserSurvey =
    function(username, answer1, answer2, answer3, answer4, answer5){

        var useranswers = [];
        var exists = false;


        const fs = require('fs');
        const jsonFile = fs.readFileSync('./files/answers.json')
        var answers = JSON.parse(jsonFile)
        console.log(username)
        console.log(answers)

        for(const element of answers){
            if(element.username === username){
                exists = true;
                //if user is retaking survey
                //pop their old answers off
                answers.pop(element);
                break;
            }
        }


        //Find matches first
        if (answers.length){
            var matchNum = 0;
            for (const element of answers){
                console.log(element.one)
                if (element.one === answer1){
                    matchNum++
                }
                if (element.two === answer2){
                    matchNum++
                }
                if (element.three === answer3){
                    matchNum++
                }
                if (element.four === answer4){
                    matchNum++
                }
                if (element.five === answer5){
                    matchNum++
                }

                var matchname = element.username

                var match = {
                    matchname: matchname,
                    match : matchNum            
                }
                console.log("inside loop, match: ")
                console.log(match)
                
                if (matchNum >= 1){
                    console.log("inside push")
                    useranswers.push(match)
                }
                console.log(useranswers)
                
                matchNum = 0
            }
            console.log(useranswers)
        }
        //push the new user's survey answers
        console.log("New User Information")
        var answerObj = {
            username: username,
            one: answer1,
            two: answer2,
            three: answer3,
            four: answer4,
            five: answer5
        }
        console.log(answerObj)

        answers.push(answerObj)
        
        var objectToJson = JSON.stringify(answers, null, 2)
        fs.writeFileSync('./files/answers.json', objectToJson)

        //save match usernames and count to a javascript array
        //and return it 
        return useranswers;
    }   

    exports.getQuestion = getQuestion;
    exports.saveUserSurvey = saveUserSurvey;
    exports.checkUsername = checkUsername;

    //console.log(saveUserSurvey("Tiffany1", "yes", "late", "no", "rachel", "vanilla"))

    //console.log(getQuestion(2))
    //console.log(checkUsername("tiffany"))