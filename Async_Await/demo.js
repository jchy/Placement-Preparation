const mypromise = (name) => {
    return new Promise((resolve, reject)=>{
        if(name==="John"){ 
            resolve("Name is matched. Hence promise is resolved! 😄😀😀 ");
        }
        else{
            reject("Name is not matched, so promise is rejected! 😭😭😭")
        }
    })
}

const appendGreetToRes = (res) =>{
    return "Welcome to the append response world! You are luck!!! Thank you " + res;
}

const printRes=(res)=>{
    console.log(res);
}

// mypromise("John")
// .then((res)=>{
//     return appendGreetToRes(res);
// })
// .then((res)=>{
//     printRes(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

const handlePromise = async () => {
    try {
        const res = await mypromise("Johni");
        const msg = appendGreetToRes(res);
        printRes(msg);
    } 
    catch(err){
        console.log(err);
    }
}
handlePromise();