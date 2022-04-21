let count = 0;

const incrementCount = ()=>{
    const div = document.getElementById('container');
    div.textContent = count++;
}

const debounce = (fn, limit) =>{
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, args);
        },limit);
    }
}

let btn = document.getElementById('incr-btn');
btn.addEventListener('click',()=>{
    console.log("click")
    debounce(incrementCount, 500);
})