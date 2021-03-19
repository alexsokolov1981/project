'use strict';
        
function mathAdd (a, b){
return a + b; 
}
function mathSubt (a, b){
return a - b; 
}
function mathMul (a, b){
return a * b; 
}
function mathDiv (a, b){
return a / b; 
}

function mathOperation (arg1,arg2, operation) {
switch (operation){
    case "+": mathAdd(arg1,arg2,);
    case "-": mathSubt(arg1,arg2,);
    case "*": mathMul(arg1,arg2,);
    case "/": mathDiv(arg1,arg2,);
    default: throw new Error ("Операция " + operation + " не предусмотрена");
}
}

console.log(mathOperation (5, 6, "+"));