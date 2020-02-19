var newEntries = '';
var dictionary = {
  "dictionary_name": "default",
  "entries":
      [{
          "key": ["stupid", "dumb", "idiot", "unintelligent", "simple-minded", "braindead", "foolish", "unthoughtful"],
          "answer": ["educated", "informed", "schooled"]
      }, {
          "key": ["unattractive", "hideous", "ugly"],
          "answer": ["attractive", "beauteous", "beautiful", "lovely", "pretty", "ravishing"]
      }, {
          "key": ["ambiguous", "cryptic", "dark", "nebulous", "obscure", "unintelligible"],
          "answer": ["obvious", "plain", "unambiguous", "understandable", "unequivocal"]
      }, {
          "key": ["incapable", "incompetent", "inept", "unable", "unfit", "unqualified", "weak", "artless"],
          "answer": ["accomplished", "fit", "adept", "complete", "consummate"]
      }, {
          "key": ["emotionless", "heartless", "unkind", "mean", "selfish", "evil"],
          "answer": ["benevolent", "benignant", "gentle", "kind", "clement"]
      }, {
          "key": ["idle"],
          "answer": ["Can you reply something?", "You have been idle for more than 30 seconds", "Whats the matter with you? Submit something"]
      }]
}






function getName(){
  return document.getElementById("fName").value
}

//add dictionary to local storage
function addDictionary(){
  localStorage.setItem("dictionary", JSON.stringify(dictionary.entries))
}



function showNameCookie(){
  var  review = 'Review <br> Unabashedly whimsical childishness carried off with such intoxicating upbeat energy that its pure bliss to watch it with or without a child in tow.' 
  console.log("hello")
  var userN = getCookie("userName");
  console.log(userN)
  document.getElementById("firstName").innerHTML += userN + ", Welcome to Moview Review" + "<br>"+ "<br>" + review + "<br>";

}

function setCookie(cname, cvalue, exdays) {
  cvalue = getName();
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
}



function checkJson(json){
    try {
        JSON.parse(json);
    } catch (e) {
        return false;
    }
    return true;
}

function getReview(){

  var review = document.getElementById("review").value;

  //if review is empty
  if (review === ''){
    alert("Review is emtpy. Type Something.");

  
  }else if (review.charAt(0) == "{"){
    
    
    if(checkJson(review) == false){
      alert("Invalid JSON! Please enter a valid JSON!");
    }else if (checkJson(review) == true){
      //add word to dictionary

      //get json 
      var newDictionaryObj = JSON.parse(review)
      console.log(newDictionaryObj);

      //if json is not dictionary structure: more than one key
      var checkObjKeys = Object.keys(newDictionaryObj).length
      console.log(checkObjKeys)
      if (checkObjKeys > 1){
        alert("Could not find the proper key and the dictionary stays dumb");
        return;
      }

      //get valid json dictionary key and value
      var objKey = Object.keys(newDictionaryObj)[0]; //Key
      console.log(objKey)
      var objValue = Object.values(newDictionaryObj)[0]
      console.log(objValue)

      //parse dicitonary const
      var entries = dictionary.entries
      
      
      //parse entries key and answer
      for(const element of entries){
        //console.log(element)
        

        var key = element.key
        //console.log(key)
        
        var answer = element.answer
        //console.log(answer)


          //for every bad word in each key of entries
          searchKeys: for(const badWord of key){
            //console.log(badWord)
            //if the object key matches a bad word
            if(objKey === badWord){
              console.log("in nested loop")
              //copy old dictionary into new
              newEntries = dictionary
              console.log(newEntries)

              //get the answers for the key element that the bad word belongs in 
              var newEntriesAns = element.answer
              console.log(newEntriesAns)
              //push new value to the new dictionary array
              newEntriesAns.push(objValue)
              
              console.log(newEntriesAns)

              console.log(newEntries)

              alert("Word added to the dictionary and the dictionary is smarter");

              break searchKeys;
            }
          }
        }
    
    }//end of json object loop

  //IF IT IS A COMMAND
  }else if(review.charAt(0) == '/'){

    command(review);

  }else{
    
    //console.log(review);
    var words = review.split(" ")


    if (newEntries === ''){
      var entries = dictionary.entries
    }else{
      var entries = newEntries.entries
    }
    console.log(entries)
    var count = 0;

    //parse words
    for (var i = 0; i < words.length; i++){
      console.log(words[i])
      
      //parse entries key and answer
      for(const element of entries){
        //console.log(element)
        
        var key = element.key
        //console.log(key)
        
        var answer = element.answer
        //console.log(answer)

          //for every bad word in each key of entries
          searchKeys: for(const badWord of key){
            
            //console.log(badWord)
            //console.log(key)
            var answerSize = answer.length
            console.log(answerSize)

            //if the user's word matches the bad word
            if(words[i] === badWord){
              count++
              sessionStorage.setItem("count", JSON.stringify(count))

              //Generate a random # index
              var userWord = words[i]
              var replacementIndex = Math.floor(Math.random() * answerSize)
              console.log(replacementIndex)

              var newWord = answer[replacementIndex];            

              //replace the bad word w/ the new word
              words[i] = newWord
              
              console.log(userWord)
              console.log(words)

              break searchKeys;
            }
          }
      }
    }
    //loops end
    console.log(words)
    
    //put spaces between the words and return to string
    var newWordsStr = '';
    for(var j = 0; j< words.length; j++){
      newWordsStr += words[j] + " "
    }
    
    //debug new string
    console.log(newWordsStr)

    //return to textarea
    document.getElementById("review").value = newWordsStr;

    //SAVE COMMENT TO LOCAL STORAGE w/ user's name as a key
    localStorage.setItem(getCookie("userName"), JSON.stringify(newWordsStr))

    return newWordsStr
  }
}


//FUNCTION DOES LAST COMMENT EXIST?
function getLastReview(){
  
  //get user's name stored in cookies
  var use = getCookie("userName");
  console.log(use)

  //look up to see if a last review for that user exists
  var lastReviewJson = localStorage.getItem(use);
  console.log(lastReviewJson)
  
  //check if it's null and if it's not parse it
  if(!lastReviewJson === null){
    
    var lastReview = JSON.parse(lastReviewJson);

    //print out last comment review
    document.getElementById("review").value = showNameCookie() + lastReview;
  }

}


function command(review){

  var words = review.split(" ")
  console.log(words)

  //if cleared delete cookie name and last review
  if(words[0] === "/clear"){
    //remove from last review
    localStorage.removeItem(getCookie("userName"))
    //clear username
    document.getElementById("fName").value = ''
    
    //remove cookie/name of user
    document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    //clear history
    sessionStorage.removeItem("history")
    //clear history list
    document.getElementById("historyList").value = ''

    //clear last review
    localStorage.removeItem("review")

    //clear count
    sessionStorage.removeItem("count")

    //clear textarea box
    document.getElementById("review").value = ''

  
  }else if(words[0] === "/search"){
    var searchWord = words[1];
    console.log(searchWord)
    var searchDictionary = JSON.parse(localStorage.getItem("dictionary"))

    
    //add search to browser session storage for "/history" command
    if(sessionStorage.getItem("history") === null){
      var history = [];
      history.push(searchWord)
      sessionStorage.setItem("history", JSON.stringify(history))
    }else{
      var history = JSON.parse(sessionStorage.getItem("history"))
      history.push(searchWord)
      sessionStorage.setItem("history", JSON.stringify(history))
    }

    //parse entries key and answer
    for(const element of searchDictionary){
      console.log(element)
      
      var key = element.key
      console.log(key)
      
      var answer = element.answer
      console.log(answer)

        //for every bad word in each key of entries
        searchKeys: for(const badWord of key){        
          //if the search word matches the badword
          if (badWord === searchWord){
            //show all coresponding nice words for the badword
            document.getElementById("review").value = answer;
            break searchKeys;
          }
        }
      }


  //end of search loop
  }else if(words[0] === "/history"){
    var history = JSON.parse(sessionStorage.getItem("history"));
    console.log(history)

    var htmlStr = '<ol>'
    
    for (const word of history){

      htmlStr += '<li>' + word + '</li>'

    }
    htmlStr += '</ol>'
    console.log(htmlStr)
    document.getElementById("historyList").innerHTML = htmlStr;

  }else if (words[0] === "/count"){
    var badCount = JSON.parse(sessionStorage.getItem("count"))
    console.log(badCount)
    document.getElementById("review").value = "The number of rude words is " +  badCount;
  }else if (words[0] === "/list"){

  }
}