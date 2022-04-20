// console.log('4' + 5);
// console.log('4' - 5);
// console.log(+'4' + 5);

function add(a,b){
    return a + b;
}
let res = add(9,12);
console.log(res);
// Above is a regualr function which will be hoisted in global space and will be accesssable using window object
// It will also restrict our name availability since we won't be able to use the same name for some other variables

// IIFE Functions
let printName = (function(firstName, lastName){
    console.log('My name is : ', firstName +" "+ lastName);
})("Jaswant","Chaudhary");
// This function won't be hoisted in global space