// Method : 1 using regular javascript
function  flattenArrayMethod1(arr) {
    return arr.reduce((acc,elem)=>{
        if(Array.isArray(elem)){
            acc = acc.concat(flattenArray(elem));
        }
        else{
            acc = [...acc, elem];
        }
        return acc;
    },[])
}

// Using ES6 Version 
const flattenArray = (arr) => {
    return arr.reduce((acc,elem)=>{
        if(Array.isArray(elem)){
            acc = acc.concat(flattenArray(elem));
        }
        else{
            // acc.push(elem);
            acc = [...acc, elem];
        }
        return acc;
    },[])
}
const arr = [1,[2,3,[4,5,6,[7,8,9,10]],11],12];
console.log(flattenArray(arr));



