let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}
const res = sum(1)(2)(3)(4)(5)();
console.log(res);