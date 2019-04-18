// array
// let arr = [12,2,3,5,6,1];
// arr['key'] = 'value';
// arr.name = 'Teo'; 
// console.log(arr);
// console.log(typeof arr); // obj
// console.log(Array.isArray(arr)); // true

// let arr02 = new Array(3,5,6);
// for, forEach, fill, filler, map, push, pop, shift, unshift, sort, splice, reduce, findIndex
let arr = [12,2,3,5,6,1];
arr.forEach(function(value,index){
    console.log(value +':'+ index);
})

// arrow function
arr.forEach((value, index)=>{
    console.log(value);
})

arr.forEach(value=>console.log(value))


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }



// let obj = {};
// console.log(typeof obj);
// obj['key'] = 'value';
// obj.name = 'Teo'; 
// console.log(obj);


