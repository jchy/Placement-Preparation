// NOTE : 
// CASE.1 * IF we don't describe the boolean capture filed it will by default implement the bubbling behavior
// CASE.2 * If wedefine the 3rd filed as false it will again implement the bubbling behavior
// CASE.3 * If we make 3rd field true it will implement the capturing behavior
// CASE.4 * IF capturing and bubbling both behavior are present then capturing will be executed first then bubbling will be executed


// CASE.1 Default Bubbling Behaviour
// document.querySelector('#grandparent').addEventListener('click', ()=>{
//     console.log('Grandparent is clicked');
// })

// document.querySelector('#parent').addEventListener('click', ()=>{
//     console.log('Parent is clicked');
// })

// document.querySelector('#child').addEventListener('click', ()=>{
//     console.log('Child is clicked');
// })


//CASE.2 Bubbling behaviour by making 3rd field false
// document.querySelector('#grandparent').addEventListener('click', ()=>{
//     console.log('Grandparent is clicked');
// }, false)

// document.querySelector('#parent').addEventListener('click', ()=>{
//     console.log('Parent is clicked');
// }, false)

// document.querySelector('#child').addEventListener('click', ()=>{
//     console.log('Child is clicked');
// }, false)


//CASE.3 Capturing behaviour by making 3rd field true
// document.querySelector('#grandparent').addEventListener('click', ()=>{
//     console.log('Grandparent is clicked');
// }, true);

// document.querySelector('#parent').addEventListener('click', ()=>{
//     console.log('Parent is clicked');
// }, true);

// document.querySelector('#child').addEventListener('click', ()=>{
//     console.log('Child is clicked');
// }, true);


//CASE.4 Capturing and bubbling behaviour to demonstrate that capturing will be executed before bubbling
document.querySelector('#grandparent').addEventListener('click', ()=>{
    console.log('Grandparent is clicked');
}, true);

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent is clicked');
}, false);

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child is clicked');
}, true);
// Since here child and grand parent are in capturing so it will be executed before bubbling behaviour