console.log("TESTING calc()")


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