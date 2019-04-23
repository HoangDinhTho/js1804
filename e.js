
/**
 * n = 123
 * function in ra dãy các số chia hết cho 2
 * function in ra dãy các số không chia hết cho 2
 * function in ra dãy các số chia cho 4 dư 2, ví dụ: 2, 6, 10, 14 ....
 * 
 */
function soChan(n){
    for(let i=0; i<=n; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
function soLe(n){
    for(let i=0; i<=n; i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}
function soChia4Du2(n){
    for(let i=0; i<=n; i++){
        if(i%4==2){
            console.log(i);
        }
    }
}
let n = 10;
// soChia4Du2(n);

function inSo(n, fn){
    for(let i=0; i<=n; i++){
        const dk = fn(i)
        if(dk){
            console.log(i);
        }
    }
}
//so le
function kiemtraSoLe(x){
    return x%2!==0
}
inSo(n,kiemtraSoLe);

inSo(n,function(x){
    return x%2==0
})
inSo(n, i=>i%4==2)


// *
// * *
// * * * 
// * * * *
// * * * * *

// * * * * *
// * * * *
// * * *
// * *
// *

//         *
//       * *
//     *   *
//   *     *
// * * * * *
