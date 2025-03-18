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

 // Anonymous Functions

 let name1 = function () {
   console.log("Anonymous Functions");
 };
 name1();
 //Arrow Functions =>

 const lastName = (last_name) => {
   console.log(last_name, "last name");
 };
 lastName("AKhtar");

 // Callbacks and Higher Order Functions

 function example(callBacks) {
   // let callBack = example2()
   callBacks();
 }
 function example2() {
   console.log("hi there!");
 }
 example(example2);

 function printName(callBack) {
   let name3 = "saima";
   callBack(name3); // callback = myName()   
      }
 function myName(name3) {
   console.log("hi" , name3);
 }
 printName(myName);


 // sumOfTwoNumbers