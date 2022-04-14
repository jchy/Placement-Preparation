// Ex.1
// function x(){
//     var a = 7;
//     return function y(){
//         console.log(a);
//     }
// }
// x()();
// 7

// Ex.2
// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },1000);
//     console.log("Hello World");
// }
// x();
// Hello World
// 1 (After one second)

// Ex.3
// function fun(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Running buggy setTimeout function");
// }
// fun();
// Here since i is of var type so it will be global variable and reference of i
// will be shared with teh setTimeout function and within nano/milli seconds all these 5 setTimeout functions will be
// invoked with the times 1000, 2000, 3000, 4000 and 5000 respectively;
// So when after 1 sec the first setTimeout will come in call stack for execution
// the value of i have been 6 so it will print 6 and since all of the setTimeout functions have reference to i
// so all the setTimeout functions will print 6;

// Ex.4
// Method.1 To fix teh above bug we can make i local scopped by changine it from var to let type
// function tun(){
//     for(let i = 1; i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Running Perfect setTimeout function");
// }
// tun();

// Method.2 to fix this issue
// function closureFun(a){
//     setTimeout(function(){
//         console.log(a);
//     }, a*1000);
// }
// function func(){
//     for(var i = 1; i<=5; i++){
//         function closureFun(a){
//             setTimeout(function(){
//                 console.log(a);
//             }, a*1000);
//         }
//         closureFun(i);
//     }
//    console.log("Running Perfect setTimeout function");
// }
// func();

// write function for sum(5)(10)(2)
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// const res = sum(5)(10)(2);
// console.log(res);

// How to use use strict
// 'use strict';
// function test(){
//     console.log(this);
// }
// test();
// The above code show the usage of strict here if we don't use strict here
// then "this" inside the test function will point the Global object but if we use strict then
// "this" will point the local object(I Guess);

// Create nested key value pairs using a given string
// Method : 1
// var str = 'key,value,pair,javascript';
// var arr = str.split(',');
// var obj = {};
// obj[arr[arr.length-1]] = {};
// for (var i=arr.length-2; i>=0; i--){
//     obj[arr[i]] = {...obj};
//     delete obj[arr[i+1]];
// }
// console.log(obj);
// let len = 0;
// for(let key in obj){
//     len++;
//     console.log(key,obj[key]);
// }
// console.log(len);

// Method:~ 2
// Using Recursion
// let str = "key,value,pair,javascript";
// const arr = str.split(",");
// let obj = {};
// function rec(arr, i=0, obj={}){
//     if(i===arr.length){
//         return obj;
//     }
//     else{
//         obj[arr[i]] = rec(arr, i+1);
//         return obj;
//     }
// }
// console.log(rec(arr));

// Method:~ 3
// recursion
// var str = 'key,value,pair,javascript'
// var arr = str.split(',')
// var obj = {}
// var rec = (arr, i=0, obj={}) => !arr[i] ? obj : {[arr[i]] : rec(arr, i+1)};
// // var rec = (arr, i=0, obj={}) => i===arr.length ? obj : {[arr[i]] : rec(arr, i+1)};
// console.log( rec(arr) )
