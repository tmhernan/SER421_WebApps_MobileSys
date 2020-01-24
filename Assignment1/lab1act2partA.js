
var answer = 0;


function exec(array){  
    
    answer = 0;

    for (var i=0; i < array.length; i ++){

        var exp = array[i].exp;
        var expected = array[i].expected;
        var a = new Calc()

        console.log((a.calc(exp)) + " : " + expected); 
    }
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


function Calc(){
    this.calc = function(String){  

        if (isJson(String)){
            var operation = JSON.parse(String);
        } else {
            operation = String;
        }
        
        var op = operation.op;
        var num = operation.number

        if (op == 'add'){
            if(answer == 0){
                return answer = num;                
            } else {
                return answer = answer + num;
            }
        }
        if (op == 'subtract'){
            if(answer == 0){
               return answer = num;                
            } else {
                return answer = answer - num;
            }
        }
    }
};
