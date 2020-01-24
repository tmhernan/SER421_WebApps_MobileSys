var answer = 0;

function exec(array){  
    answer = 0

    for (var i=0; i < array.length; i ++){

        var exp = array[i].exp;
        var expected = array[i].expected;
        console.log((calc(exp)) + " : " + expected); 

        answer = expected

    }
}

function calc(String){  
    
    //SET NUMBER BEING ADDED/SUB TO ZERO
    var num = 0;   

    //SECOND FUNCTION
    function totalSum(String){ 
        if (isJson(String)){ 
            var operation = JSON.parse(String);
        } else {
            operation = String;
        }     

        //RECURSION FOR NESTED OBJECTS
        if (operation.hasOwnProperty('expr')){
            
            expr2 = operation["expr"]; 
            totalSum(expr2); 
        }

        //get operation
        var op = operation.op;
        
        //get number
        if(operation.hasOwnProperty('number')){
            num = operation.number
        //if not, number should equal answer (from previous calcuation)
        }else{
            num = answer
        }


        //calculate
        if (op == 'add'){
                answer = answer + num;
        }
        
        if (op == 'subtract'){
                answer = answer - num;
        }          
    }
    totalSum(String);

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