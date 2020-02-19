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



function setTimer(){

    var idleMessages = dictionary.entries

    for(const element of idleMessages){
      
      var key = element.key
      
      var answer = element.answer

        for(const item of key){

          var answerSize = answer.length
          console.log(answerSize)
          var replacementIndex = Math.floor(Math.random() * answerSize)

          if (item === "idle"){

            var alertMessage = answer[replacementIndex]

            alert(alertMessage)

          }
        }
    }
}


function getName(){
  return document.getElementById("fName").value
}

function getNameCookie(){
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

//if user has name in cookies
function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
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
  

  }else{
    
    //console.log(review);
    var words = review.split(" ")


    if (newEntries === ''){
      var entries = dictionary.entries
    }else{
      var entries = newEntries.entries
    }
    console.log(entries)

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
              //Generate a random # index
              var userWord = words[i]
              var replacementIndex = Math.floor(Math.random() * answerSize)
              console.log(replacementIndex)
              
              var newWord = answer[replacementIndex];
             
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

    return newWordsStr
  }



}