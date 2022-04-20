const getRollNumber = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => resolve(res.json()))
        .catch(err => reject("Following error occured while loading : ",err))
        .finally(()=>{
            console.log("Successfully executed the getRollNumber promise");
        })
    },2000);
})


const displayData = (userData) => {
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

// async function printStudentsDetail(){....}
const printStudentsDetail = async() =>{
    const userData = await getRollNumber;
    console.log(userData);
    await displayData(userData);
}
printStudentsDetail();