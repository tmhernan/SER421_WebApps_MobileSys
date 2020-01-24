
var answer = 0;
var num = 0;
var stack = 0;


class PreCalc{
    
    constructor(Number){

        this.Number = 0; //initialzing number to zero
        this.calcStack = [0]; //creating array/stack
    }

    push(Number){

        console.log("in push")

            console.log("in push loop")
            console.log(this.calcStack.length)

            //if array is empty
            if (this.calcStack.length == 0){
                this.calcStack[0] = Number;
                //console.log("array is empty")
                //console.log(this.calcStack[i])

            
            //if array has content
            }else{

                this.calcStack.unshift(Number)

                //console.log("array is not empty")
            }
    }

    pop(){

        if (this.calcStack === undefined || this.calcStack.length == 0){
            console.log("Array is empty or undefined. Cannot pop.")
            return;
        }

        this.calcStack.shift(Number);

        var first = this.calcStack[0]
        stack = first

        return this.Number;

    }

    print(){

        //if array is empty or undefined:

        if (this.calcStack === undefined || this.calcStack.length == 0){
            console.log("Array is empty or undefined")
            return;
        }
        
        console.log("start of array")
        for(var i in this.calcStack){
            console.log("element in position " + [i] + " is: ")
            console.log(this.calcStack[i])
        }
        console.log("end of array")


    }

    
    calc(String){


        if (isJson(String)){ //{"op": "subtract", "expr" : {"op" : "add", "number" : 15}
            var operation = JSON.parse(String);
        } else {
            operation = String;
        }    
    
        //DEBUG
        console.log("true or false: " + operation.hasOwnProperty('expr'))    
        console.log(operation)
        console.log(operation.expr)


        //RECURSION FOR NESTED OBJECTS
        if (operation.hasOwnProperty('expr')){
            
            var expr2 = operation["expr"] 
            console.log(expr2)

            this.calc(expr2);

            console.log("number1 is: " + num) 
            console.log("answer1 is: " + answer)
            console.log(operation.op)    
        }
                



        //get operation
        var op = operation.op;
        


        //ASSIGN NUMBER
        if(operation.hasOwnProperty('number'))
            num = operation.number
        //if not, number should equal answer (from previous calcuation)


        console.log("operation1 is: " + op)
        console.log("number1 is: " + num)
        console.log("answer1 is: " + answer)
        console.log("stack1 is: " + stack)

        //ADD PUSH
        if(op == "push" && operation.hasOwnProperty('number')){
            console.log("op is equal to push")
            this.push(num)
            stack = num
        }else if (op == "push"){
            stack = answer
            this.push(stack)
        }

        if(op == "pop"){
            console.log("op is equal to pop")
            this.pop(num)
        }




        //CALCULATE
        if (op == 'add'){
            //if(answer == 0){
            //    answer = answer + num;                
            //} else {
                answer = stack + num;
            //}
        }
        
        if (op == 'subtract'){
            //if(answer == 0){
            //    answer = answer - num;                
            //} else {
                answer = stack - num;
            //}
        }
               
        
        console.log("number is: " + num)
        console.log("answer is: " + answer)
        console.log("stack is: " + stack)

    
        //end of TOTAL SUM METHOD
    

        return answer;

    };//END OF CALC

}//END OF OBJECT


function exec(array){  
    console.log("in exec")

    for (var i=0; i < array.length; i ++){

        var exp = array[i].exp;

        var expected = array[i].expected;

        var a = new PreCalc()

        console.log((a.calc(exp)) + " : " + expected); 

        answer = expected

    }

    //clear answer between testing calls
    answer = 0
}


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

var	expA =	[
    {   "exp":	{"op":"add","number": 0},
        
        "expected":  0} ,
    {"exp":	{"op":"add","number":-1},"expected":-1},
    {"exp":	{"op":"subtract","number":-1},"expected": 0},
    {"exp":	{"op":"add","number":5},"expected": 5},
    {"exp":	{"op":"subtract","number":10},"expected":	-5},
    {"exp":	{"op":"add","number":15},"expected":	10}
]

let val = exec(expA);

//intialize object
var a = new PreCalc(0);

//print stack
a.print();
a.calc({"op" : "add", "number" : 5})
a.print();
a.calc({"op" : "push", "number" : 5})
a.print();
a.calc({"op" : "pop"})
a.print();
a.calc({"op" : "push", "expr" : {"op" : "subtract", "number" : 2}})
a.print();

