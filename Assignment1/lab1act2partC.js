
var answer = 0;
var num = 0;
var stack = 0;
var recursive = 0;


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

        var first = this.calcStack[0]

        this.calcStack.shift();

        this.print()

        return first;
    }

    print(){

        if (this.calcStack === undefined || this.calcStack.length == 0){
            console.log("Array is empty or undefined")
            return;
        }
        
        var array = ""
        console.log("\narray starting at index 0 from left to right:")
        for(var i in this.calcStack){
            array += this.calcStack[i] + ", "
        }
        console.log(array)
        console.log("end of array \n")
    }

    
    calc(String){


        if (isJson(String)){ 
            var operation = JSON.parse(String);
        } else {
            operation = String;
        }    
    
        //DEBUG
       //console.log("true or false: " + operation.hasOwnProperty('expr'))    
        console.log(operation)
        //console.log(operation.expr)


        //RECURSION FOR NESTED OBJECTS
        if (operation.hasOwnProperty('expr')){
            
            //answer = 0

            var expr2 = operation["expr"] 
            console.log(expr2)


            recursive++
            console.log("RECURSION AFTER INCREMENT")
            console.log(recursive)
            this.calc(expr2)
            recursive--
            console.log("RECURSION AFTER DEINCREMENT")
            console.log(recursive)

            console.log("\nunwinded number is: " + num) 
            console.log("unwinded answer is: " + answer + "\n")
            console.log(operation.op)
            //num = answer    
            //console.log("after recursion num: " + num+ " became answer: " + answer + "\n")

        }
        //ASSIGN NUMBER
        if(operation.hasOwnProperty('number')){
            num = operation.number
        }else{
            //num = answer
        }
        if (recursive == 0 && operation.hasOwnProperty('number') == false){
            num = 0
        }
                
        //GET OPERATION OF STRING
        var op = operation.op;
        
      
        console.log("operation before call is: " + op)
        console.log("number before call is: " + num)
        console.log("answer before call is: " + answer)
        console.log("stack before call is: " + stack)

        //IF PUSH
        if(op == "push" && operation.hasOwnProperty('number')){
            console.log("op is equal to push: " + num)
            this.push(num)
            stack = num
            console.log("after push w/ num stack is: " + stack + " and number is : " +  num)
        }else if (op == "push" && operation.hasOwnProperty('number') == false){
            stack = answer
            console.log("op is equal to push: " + stack)
            this.push(stack)
            console.log("after push stack is: " + stack + " and number is : " +  answer)

        }

        //IF POP
        if(op == "pop" && recursive < 1 ){
            console.log("op is equal to pop: " + this.calcStack[0])
            this.pop(this.calcStack[0])
            var first = this.calcStack[0]
            console.log("after pop, stack and first is: " + stack) //should be zero index on stack
            stack = first
        }else if(op == "pop" && recursive > 0 ){
            console.log("op is equal to pop: " + this.calcStack[0])
            var first = this.calcStack[0]
            stack = first
            this.pop(this.calcStack[0])
            console.log("after pop, stack and first is: " + stack) //neds to be prev value
        }


        //IF PRINT
        if(op == "print"){
            this.print();
        }

        //IF ADD/SUB - CALCULATE
        if (op == 'add'){
                answer = stack + num
                console.log(answer + " = " + stack+ " + "+ num )
        }
        
        if (op == 'subtract'){
                answer = stack - num
                console.log(answer + " = " + stack+ " - "+ num )
        }

        //IF EXP CALCULATION
        if (operation.hasOwnProperty('exp')){
            var expExpression = operation["exp"]
            var expectedNum = operation["expected"]

            var opNumber = expExpression["number"]
            var expOperation = expExpression["op"]

            //IF ADD/SUB - CALCULATE
            if (expOperation == 'add'){
                answer = answer + opNumber
                console.log(answer + " = " + answer+ " + "+ opNumber )
            }
        
             if (expOperation == 'subtract'){
                answer = answer - opNumber
                console.log(answer + " = " + answer+ " - "+ opNumber )
            }

        }               
        
        console.log("number at end of call is: " + num)
        console.log("answer at end of call is: " + answer)
        console.log("stack at end of cal is: " + stack )


        return answer;

    };//END OF CALC

}//END OF OBJECT


function exec(array){  
    console.log("in exec")

    for (var i=0; i < array.length; i ++){

        //var exp = array[i].exp;

        var expected = array[i].expected;

        var a = new PreCalc()

        console.log((a.calc(array[i])) + " : " + expected + "\n"); 

        //answer = expected

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

