
userActivity = [];

//after a user adds comment then list them out in html view
//user can't use and id already in use
//also adds to user activity
var addComment =
function(id, comment){
    var commentsFile = getComments();

    for (const element of commentsFile){
        if (element.id === id){
            var newComment = ''
            return false;
        }               
    }
    
    //push to user activity arr
    const fs = require('fs');
    const jsonFile = fs.readFileSync('./files/useractivity.json')
    var allUserActivity = JSON.parse(jsonFile)


    var track ={
        id: id,
        method: 'add',
        comment: comment
    }

    allUserActivity.push(track)
    var activity = JSON.stringify(allUserActivity, null, 2)
    fs.writeFileSync('./files/useractivity.json', activity)



    //add to comments
    var newComment = {
        id: id,
        comment: comment
    }

    commentsFile.push(newComment)

    var objectToJson = JSON.stringify(commentsFile, null, 2)
    fs.writeFileSync('./files/comments.json', objectToJson)
    
    
    /*
    //ADD TO USER ACTIVITY
    //read user activity, add to user activity, write to user activity
    var track ={
        id: id,
        method: 'add',
        comment: comment
    }
    console.log(track)
    const jsonFile = fs.readFileSync('./files/useractivity.json')

    var userAct;
    //if json file is empty
    if (jsonFile === undefined){
        console.log(track)
        userAct.push(track)
        var userObjectToJson = JSON.stringify(userAct, null, 2)
        fs.writeFileSync('./files/useractivity.json', userObjectToJson)
        return;
    }

    userAct = JSON.parse(jsonFile)

    userAct.push(track)

    var userObjectToJson = JSON.stringify(userAct, null, 2)
    fs.writeFileSync('./files/useractivity.json', userObjectToJson)
    */
    return;
}

//pops stack
//undoes whatever user just did whether it's add or delete
//also clears last activity from user activity
var undo = 
function(){
    var size;
    
    //read useractivity json and take last element
    const fs = require('fs');
    const jsonFile = fs.readFileSync('./files/useractivity.json')
    //user activity object
    var userAct = JSON.parse(jsonFile)

    console.log(userAct.length)//undefined

    //get last user activity item
    var lastUserActivity = userAct[userAct.length -1]

    console.log(lastUserActivity)
    
    //pop from comments if add
    if(lastUserActivity.method === "add"){
        const fs = require('fs');
        //pop from userctivity
        var newArr = userAct.pop(lastUserActivity)

        if(newArr === undefined){
            fs.writeFileSync('./files/useractivity.json', '')
            return;
        }

        console.log(newArr)
        var activity = JSON.stringify(newArr, null, 2)
        console.log(activity)
        fs.writeFileSync('./files/useractivity.json', activity)

        //then, pop from comments
        const jsonFile = fs.readFileSync('./files/comments.json')
        const comments = JSON.parse(jsonFile)

        for(element of comments){
            if(element.id === lastUserActivity.id){
                comments.pop(lastUserActivity)
                break;
            }
        }

        return;
    }
    //add to comments if it's delete
    if(lastUserActivity.method === "delete"){
        const fs = require('fs');
        //pop from user activity
        var newArr = userAct.push(lastUserActivity)
        var activity = JSON.stringify(newArr, null, 2)
        fs.writeFileSync('./files/useractivity.json', activity)

        //then, push to comments
        const jsonFile = fs.readFileSync('./files/comments.json')
        const comments = JSON.parse(jsonFile)

        for(element of comments){
            if(element.id === lastUserActivity.id){
                comments.push(lastUserActivity)
                break;
            }
        }


        return;
    }
}

//check if id exists
//also adds to user activity as delete action
var deleteComment =
function(id){
    const fs = require('fs');
    var commentsFile = getComments();

    for (const element of commentsFile){
        if (element.id === id){
            commentsFile.pop(element)
            var objectJson = JSON.stringify(commentsFile, null, 2)
            fs.writeFileSync('./files/comments.json', objectJson)
            console.log('Deleted object id: ' + element.id)
            
            var track ={
                id: element.id,
                method: 'delete',
                comment: element.comment
            }

            //push to user activity arr
            userActivity.push(track)
            var activity = JSON.stringify(userActivity, null, 2)
            fs.writeFileSync('./files/useractivity.json', activity)

            return;
        }
    }
    return false;
}

//deletes all user activity
function reset(){


}

var getComments = 
 function(){
    const fs = require('fs');
    const jsonFile = fs.readFileSync('./files/comments.json')

    if (jsonFile.length === 0 || jsonFile.length === undefined){
        var parsedComments = ''
        
    }else{

        var parsedComments = JSON.parse(jsonFile)
    }

    return parsedComments
}


//returns array of user activity
var listuseractivity =
    function(){
        const fs = require('fs');
        const jsonFile = fs.readFileSync('./files/useractivity.json')

        if (jsonFile.length === 0 || jsonFile.length === undefined){
            var userActivity = ''
            
        }else{
    
            var userActivity = JSON.parse(jsonFile)



        }


        return userActivity
    }

exports.getComments = getComments;
exports.addComment = addComment;
exports.deleteComment = deleteComment;
exports.listuseractivity = listuseractivity;
exports.undo = undo;


//console.log(getComments())
//console.log(addComment(55556, "hi4"))
console.log(addComment(1874444, "hi4"))
//console.log(deleteComment(5))
//console.log(listuseractivity())
//console.log(undo())