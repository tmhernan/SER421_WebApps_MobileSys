
var answer = 0;
var num = 0;
var stack = 0;
var recursive = 0;


class PreCalc{
    
    constructor(Number){
        this.Number = 0; 
        this.calcStack = [0]; 
    }

    push(Number){
            //if array is empty
            if (this.calcStack.length == 0){
                this.calcStack[0] = Number;

            //if array has content
            }else{
                this.calcStack.unshift(Number)
            }
    }

    pop(){
        if (this.calcStack === undefined || this.calcStack.length == 0){
            console.log("Array is empty or undefined. Cannot pop.")
            return;
        }

        var first = this.calcStack[0]
        this.calcStack.shift();

        return first;
    }

    print(){
        if (this.calcStack === undefined || this.calcStack.length == 0){
            console.log("Array is empty or undefined")
            return;
        }
        
        var array = ""
        console.log("array starting at index 0 from left to right:")
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
    
        //RECURSION FOR NESTED OBJECTS
        if (operation.hasOwnProperty('expr')){
            var expr2 = operation["expr"] 
            recursive++
            this.calc(expr2)
            recursive--
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


        //IF PUSH
        if(op == "push" && operation.hasOwnProperty('number')){
            this.push(num)
            stack = num
        }else if (op == "push" && operation.hasOwnProperty('number') == false){
            stack = answer
            this.push(stack)
        }

        //IF POP
        if(op == "pop" && recursive < 1 ){
            this.pop(this.calcStack[0])
            var first = this.calcStack[0]
            stack = first
        }else if(op == "pop" && recursive > 0 ){
            var first = this.calcStack[0]
            stack = first
            this.pop(this.calcStack[0])
        }


        //IF PRINT
        if(op == "print"){
            this.print();
        }

        //IF ADD/SUB - CALCULATE
        if (op == 'add'){
                answer = stack + num
                //console.log(answer + " = " + stack+ " + "+ num )
        }
        if (op == 'subtract'){
                answer = stack - num
                //console.log(answer + " = " + stack+ " - "+ num )
        }

        //IF EXP CALCULATION
        if (operation.hasOwnProperty('exp')){
            var expExpression = operation["exp"]
            var opNumber = expExpression["number"]
            var expOperation = expExpression["op"]

            //IF ADD/SUB - CALCULATE
            if (expOperation == 'add'){
                answer = answer + opNumber
                //console.log(answer + " = " + answer+ " + "+ opNumber )
            }
             if (expOperation == 'subtract'){
                answer = answer - opNumber
                //console.log(answer + " = " + answer+ " - "+ opNumber )
            }

        }               
        console.log(answer)
        return answer
    }
}


function exec(array){  
    console.log("in exec")

    for (var i=0; i < array.length; i ++){
        var expected = array[i].expected;
        var a = new PreCalc()

        console.log((a.calc(array[i])) + " : " + expected + "\n"); 
    }
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

