// map, push, pop, shift, unshift, sort, splice, reduce, findIndex

let arr = ['PHP', 'Nodejs', 'iOS', 'Android'];
// arr.push('Front-end'); // add last
// arr.unshift('Front-end'); // add first
// arr.pop(); // remove last
// arr.shift(); // remove first
arr.splice(1,0,'Front end','React','HTML');// add or remove
console.log(arr);


function a(...a){
    // console.log(a)
    a.map(e=>{
        console.log(e)
    })
}
a(2,4,5,6);

// arr.map(element=>{
//     console.log(element)
// });