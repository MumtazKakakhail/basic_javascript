// Function declaration.

let name = "ali"
console.log(name);
function addTwoNumbers() {
    console.log("function example");
}
console.log(addTwoNumbers());
// Function expressions.

let functionExpressionExample = function() {
    console.log("functionExpressionExample");
    
}
console.log(functionExpressionExample());
// Function Parameters and Arguments

function multiplyTwoNumbers(a,b, c) { // params a= 2, b=3 
    console.log(a*b *c);
}
console.log(multiplyTwoNumbers(2,3, 7)); // ()arg


// Return statement.

function firstName(name) {  
    return name  
    console.log(name);
}
console.log(firstName("saima")); 