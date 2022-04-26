const myPromise = new Promise((resolve, reject) => {
    let a = 1+2;
    if(a===3){
        resolve("Promise is succeeded");
    }
    else{
        reject("Promise is not fulfilled ");
    }
});

myPromise
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})