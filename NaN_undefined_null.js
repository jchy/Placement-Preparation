console.log(null === undefined)
// false
console.log(null == undefined)
// true
console.log(typeof(null));
// 'object'
console.log(typeof(undefined))
// 'undefined'
console.log(typeof(NaN));
// 'number'
console.log(NaN === null)
// false
console.log(NaN === undefined)
// false
console.log(NaN == undefined)
// false
console.log(NaN == null)
// false
console.log(NaN === NaN)
// false
console.log(NaN == NaN)
// false
console.log(null === null)
// true
console.log(null == null)
// true
console.log(undefined === undefined);
// true

// Way to create a Array object
console.log(typeof([]));
// object

const arr = [];
console.log(arr);
// []

let size = 3;
const arr2 = new Array(3).fill(0);
console.log(arr2);
// [ 0, 0, 0 ]

const arr3 = new Array(1,2,3,4,5);
console.log(arr3);
// [ 1, 2, 3, 4, 5 ]

// Hoisiting
var x = 100;
function fun(){
    x = i = 10;
}
fun();
console.log(x,i);
// 10 10


var x = 100;
function fun2(){
    var x = i = 10;
    // it will first search for type of variable of i inside the
    // function and then it will search in global space and if
    // it doesn't find it in global space then it will declare it of var type in global space
}
fun2();
console.log(x,i);
// 100 10

temp = 1000;
console.log(temp);
// 1000 (It will automatically define temp of var type)

// OBJECTS

const name = {
    0 : "Jchy",
    1 : "jaswant",
    2 : "chaudhary"
}
// console.log(name.1); 
// It will throw error beacuse we can't access a object value by dot operator if
// key is not a variable (in the given example it is a number which a fixed or constant value )
// In JavaScript we can't have a variable name with number or starting with number
// NOTE : Javascript engine will convert keys of type Number into string by default since Number can't be a name of variable
console.log(name);
// We access the value of the keys of Number type in an Object  by using the keys a index 
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);

// const Obj = {
//     1
// }
// console.log(Obj);
// Above code will give an error saying syntax error

// FUNCTIONS
function fun2oos(param1, param2, param3, param4){
    console.log(arguments);
    console.log(typeof(arguments));
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
}
fun2oos("xyz", "abc");
// OUTPUT
// * [Arguments] { '0': 'xyz', '1': 'abc' }
// object
// 2
// * xyz
// * abc
// * undefined
// * undefined
// In the above program "arguments" is a Javascript keyword which store the arguments in the form of
// and object in key value pair with string type indexes as their key like:~ [Arguments] { '0': 'xyz', '1': 'abc' }
// Arguments only keep those values as key value pairs which has been passed as arguments
// If there are 4 parameters in a funjction and only 2 arguments has been passed at the time of function call then
// arguments will store only 2 arguments as key value pair that's it

// OPERATOR PRECEDENCE
console.log(2 && 3 && 0 || 2 && 3 || 21 && 32);
// 3
console.log(2 && 3 && 6 && 8 && 9);
// 9
console.log(2 && 3 && 0 && 8 && 9);
// 0
console.log(0 || 0 || 0 || 10);
// 10



