var answer = 0;

/////////////////////////////////////PUT IN TESTING FILE

console.log("TESTING recursion calc()")


console.log(calc('{"op" : "add", "number" : 5}'));
console.log(calc('{"op" : "subtract", "number" : 2}'));
console.log(calc('{"op" : "add", "number" : 19}'));

console.log(calc('{"op": "subtract", "expr" : {"op" : "add", "number" : 15}}'));

console.log(calc('{"op": "add", "expr" : {"op" : "add", "expr" : {"op" : "subtract", "number" : 3}}}'));


console.log("TESTING exec()");


var	expA =	[
    {   "exp":	{"op":"add","number": 0},"expected":  0} , // answer 0 + num 0 = 0
    {"exp":	{"op":"add","number":-1},"expected":-1}, // answer 0 + num -1 = -1
    {"exp":	{"op":"subtract","number":-1},"expected": 0}, // answer -1 - num -1 = 0
    {"exp":	{"op":"add","number":5},"expected": 5},
    {"exp":	{"op":"subtract","number":10},"expected":	-5},
    {"exp":	{"op":"add","number":15},"expected":	10}
]

let val = exec(expA);

/////////////////////////////////////PUT IN TESTING FILE


function exec(array){  
    //clear answer between testing calls
    answer = 0

    for (var i=0; i < array.length; i ++){

        var exp = array[i].exp;

        var expected = array[i].expected;

        //console.log(array[i])
        //console.log(expected)

        console.log((calc(exp)) + " : " + expected); 

        answer = expected

    }
}


function calc(String){  
    
    console.log("here 2")
    
    //SET NUMBER BEING ADDED/SUB TO ZERO
    var num = 0;   

    //SECOND FUNCTION
    function totalSum(String){ //{"op": "subtract", "expr" : {"op" : "add", "number" : 15}}
        //parse string so it's a javascript object
        if (isJson(String)){ //{"op": "subtract", "expr" : {"op" : "add", "number" : 15}
            var operation = JSON.parse(String);
        } else {
            operation = String;
        }    
    
        //DEBUG
        console.log("true or false: " + operation.hasOwnProperty('expr'))    

        //RECURSION FOR NESTED OBJECTS
        if (operation.hasOwnProperty('expr')){
            
            expr2 = operation["expr"]; //"expr" : {"op" : "add", "number" : 15}
            
            console.log(expr2)

            totalSum(expr2);

            console.log("number1 is: " + num)
            console.log("answer1 is: " + answer)
            console.log(operation.op)    
        }



        //get operation
        var op = operation.op;
        
        //if object has "number" property get it
        if(operation.hasOwnProperty('number')){
            num = operation.number
        //if not, number should equal answer (from previous calcuation)
        }else{
            num = answer
        }
        console.log("operation1 is: " + op)
        console.log("number1 is: " + num)
        console.log("answer1 is: " + answer)

        //calculate
        if (op == 'add'){
            //if(answer == 0){
            //    answer = answer + num;                
            //} else {
                answer = answer + num;
            //}
        }
        
        if (op == 'subtract'){
            //if(answer == 0){
            //    answer = answer - num;                
            //} else {
                answer = answer - num;
            //}
        }

        console.log("operation2 is: " + op)
        console.log("number2 is: " + num)
        console.log("answer2 is: " + answer)
            
    }
    //console.log("number is: " + num)
    //console.log("answer is: " + answer)

    totalSum(String);
    //end of TOTAL SUM METHOD

    return answer;

}


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}