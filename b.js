// array
// let arr = [12,2,3,5,6,1];
// arr['key'] = 'value';
// arr.name = 'Teo'; 
// console.log(arr);
// console.log(typeof arr); // obj
// console.log(Array.isArray(arr)); // true

// let arr02 = new Array(3,5,6);
// for, forEach, fill, filler, 

let arr = [12,9,25,2,6,121,1,6,49];
// đếm số chính phương trong mảng và in ra các số đó
// let newArr = arr.filter(value=>{
//     return Math.sqrt(value) === parseInt(Math.sqrt(value))
// })

let newArr = arr.filter(value=>Math.sqrt(value) === parseInt(Math.sqrt(value)))

console.log(newArr)



function a(number){
    console.log(number);
    return;
}
// console.log(a(5)); // 5
// let number = arr.filter(value=>value===6);
// let number = arr.filter(value=>{
//     return value===6;
// });

// console.log(number);

// arr.splice(2,2,9,9); // same fill
// arr.splice(2,2,[9,9]);
// console.log(arr);


arr.fill(9,2,4); // replace value start->end
// console.log(arr)


// arr.forEach(function(value,index){
//     console.log(value +':'+ index);
// })

// // arrow function
// arr.forEach((value, index)=>{
//     console.log(value);
// })

// arr.forEach(value=>console.log(value))


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }



// let obj = {};
// console.log(typeof obj);
// obj['key'] = 'value';
// obj.name = 'Teo'; 
// console.log(obj);


