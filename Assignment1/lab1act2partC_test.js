
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


//1
console.log("\n\n\nstart of call 1")
a.calc({"op" : "add", "number" : 5})
a.print();

//2
console.log("\n\n\nstart of call 2")
a.calc({"op" : "push", "number" : 5})
a.print();

//3
console.log("\n\n\nstart of call 3")
a.calc({"op" : "pop"})
a.print();

//4
console.log("\n\n\nstart of call 4")
a.calc({"op" : "push", "expr" : {"op" : "subtract", "number" : 2}})
a.print();

//5
console.log("\n\n\nstart of call 5")
a.calc({"op" : "push", "expr" : {"op" : "add", "number" : 19}})
a.print();

//6
console.log("\n\n\nstart of call 6")
a.calc({"op" : "pop"})
a.print();

//7
console.log("\n\n\nstart of call 7")
a.calc({"op" : "print"})

//8
console.log("\n\n\nstart of call 8")
a.calc({"op" : "push", "expr" : {"op" : "add", "expr": {"op" : "pop"}}})
a.print();

//9
console.log("\n\n\nstart of call 9")
a.calc({"op" : "print"})

//10
console.log("\n\n\nstart of call 10")
a.calc()
a.print({"op" : "pop"});

//11
console.log("\n\n\nstart of call 11")
a.calc({"op" : "pop"})
a.print();

//12
console.log("\n\n\nstart of call 12")
a.calc({"op" : "pop"})
a.print();
