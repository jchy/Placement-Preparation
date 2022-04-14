// Event deligation (an application of event bubbling)
let parent = document.querySelector('#parent');
parent.addEventListener("click", (e)=>{
    // console.log(e.target.id);
    window.location.href = "https://programera.in/" + e.target.id
});
// Behaviour Pattern ( an application of event bubbling )
let container = document.querySelector('#container');
container.addEventListener("keyup", (e)=>{
    if(e.target.dataset.uppercase !== undefined){
        e.target.value = e.target.value.toUpperCase();
    }
});