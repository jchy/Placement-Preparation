/*
    Promises in javascript has 3 stages : 
    1 : Pending
    2 : Resolve => fulfiled
    3 : Reject : (Error)
*/

// Problem Statement :~ Fetch the data from jsonplaceholder after 2 sec and after 2 more
//  seconds display the fetched content on the screen

const getRollNumber = new Promise((resolve, reject) => {
    let name = "passing arguments to setTimeout as third parameter"
    setTimeout(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => resolve(response.json()))
        .catch((err) => reject(err))
        .finally(()=>{
            console.log("setTimeout is executed");
        })
        console.log(name);
    },2000, name)
});

const createCard = (userData) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const parent = document.getElementById("container");
            const div = document.createElement("div");
            div.textContent = `userId : ${userData.userId} "\n" title : ${userData.title} "\n" status : ${userData.completed}`;
            div.style.backgroundColor = "aqua";
            div.style.display = "inline";
            div.style.padding = "10px";
            div.style.borderRadius = "10px";
            parent.append(div);
        },2000,userData);
    })
}

getRollNumber
.then((userData) => {
   return userData;
})
.then((userData) => {
    createCard(userData);
})
.catch((err) =>{
    console.log("Following Error occured : ",err)
})
.finally(()=>{
    console.log("Everything is executed successfully")
})