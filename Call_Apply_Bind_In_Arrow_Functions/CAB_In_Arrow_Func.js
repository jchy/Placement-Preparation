//  Call, Bind, and Apply with Arrow function in JavaScript.

function printMyAddresses(age,graduation, gender, myname){
    // console.log(this);
    // Here this will point only to the address object
    console.log("Personal Details  :~ \n");
    console.log("Name is : ", myname.firstName + " "+ myname.lastName);
    console.log("Age : ", age);
    console.log("Graduation Major : ", graduation);
    console.log("Gender : ", gender);
    console.log("\n");
    console.log("My address is : ");
    console.log("Stree : ", this.street);
    console.log("Village  : ", this.village);
    console.log("Post  : ", this.post);
    console.log("District  : ", this.district);
}
const address = {
    street : "A53 Oppo",
    village : "ABC Complex",
    post : "XYZ Gadori",
    district : "Varanasi",
}
const myname = {
    firstName : "David",
    lastName : "Guetta"
}
// printMyAddresses.call(address, 23, "B.Com", "Male", myname);
// printMyAddresses.apply(address, [23, "B.Com", "Male", myname]);
const returnedFuncionOfBind = printMyAddresses.bind(address, 23, "B.Com", "Male", myname);
returnedFuncionOfBind();


// What is function borrowing?
// Whe we borrow a function from an object it's called function borrowing
const date = new Date();
const borrowDemonstration = {
    creator : "Jchy",
    date  : date.toGMTString(),
    // date  : date.toLocaleDateString(),
    // date  : date.toDateString(),
    copyright : "this content is under strict copyright policy of Jchy",
    borrowFunc : function (){
        console.log("Creator of this function is : " + this.creator);
        console.log("This function is created @" + this.date + "\n");
    } 
}

borrowDemonstration.borrowFunc();

const instaPost = {
    creator : "Amit",
    date : date.toLocaleDateString(),
}
borrowDemonstration.borrowFunc.call(instaPost);


// Let’s see a simple implementation of call with a regular function.
const data = {
    a:10
}
function add(b){
    console.log("Sum of a and b is : ", this.a+b);
}
add.call(data, 20);

// And now the same thing with Arrow function.
const data2 = {
    x : 15
}
const add2 = (y) => {
    console.log("Sum of x and y is : ", this.x+y)
}
// add2.call(data2, 18);
add2.apply(data2, [18]);
// OutPut will be NaN
// As we can see above, the context of data is not passed in case of arrow function. 
// The reason being Arrow function doesn't have this of their own. We can still use 
// it to pass arguments, the first argument gets ignored.

// NOTE: There is a catch here with these methods. As you might be aware that a function 
// has a property called arguments that holds the value of arguments passed to the function. 
// This is well supported in case of regular funciton but an arrow function does not have 
// this property, hence you cannot use arguments in the arrow function.

// We use bind to bind the value of this at the time of creating the method and pass arguments 
// while calling it. But, since the Arrow function doesn’t have an argument property of its own, 
// the bind will fail with Arrow function.
const data3 = {
    x : 15
}
const add3 = (y) => {
    console.log("Sum of x and y is : ", this.x+y);
}
const Add3 = add3.bind(data3, 18);
Add3();
