// let l = console.log
// l(2);

/**
 * Sum number
 * @param {number} a 
 * @param {number} b
 * @return number
 */
// let sum = function(a,b){
//     return a+b;
// }
// ES6 arrow function
// let sum = (a,b)=>a+b;
// const s = sum(4,3);
// console.log(s);

// function sum(a,b){
//     return a+b;
// }
// let s = sum(2,4);

// /**
//  * log a message
//  * @param {function} l 
//  */
// function log(l){
//     return l(1234);
// }
// log(console.log);

function log(l){
    return l;
}
// log(console.log)('Hello');

function tinhtong(){
    function sum(a,b){
        return a+b;
    }
    return sum;
}
let s = tinhtong()(2,4);
console.log(s);

function sum(a,b){
    return a+b;
}
function tinhtong02(sum){
    return sum;
}
console.log(tinhtong02(sum)(2,4))
