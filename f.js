//  cho h = 5
// *             y=1; x=1
// * *           y=2; x=1,2
// * * *         y=3; x=1 2 3
// * * * *       y=4; x=1,2,3,4
// * * * * *
//                x<=y

/**
 * y: truc tung: chieu cao
 * x: truc hoanh: chieu rong
 */
function veHinh1(){
    for(let y = 1; y<=5; y++){
        let s = '';
        for(let x = 1; x<=5; x++){
            if(x<=y){
                s += '* '
            }
        }
        console.log(s)
    }
}
// veHinh1();



// h=5
// * * * * *  y=1; x=12345
// * * * *    y=2; x=1234
// * * *      y=3; x=123
// * *        y=4; x=12
// *          y=5; x=1
//            x <= h-y+1 
function veHinh2(h=5){
    for(let y = 1; y<=5; y++){
        let s = '';
        for(let x = 1; x<=5; x++){
            if(x<=h-y+1){
                s += '* '
            }
            else s +=' '
        }
        console.log(s)
    }
}
// veHinh2();


//         *    y=1; x=    5;
//       * *    y=2; x=  4 5;
//     *   *    y=3; x= 3  5;
//   *     *    y=4; x=2   5;
// * * * * *    y=5; x=12345;
//              x=h || y=h || x= h-y+1
function veHinh3(h=5){
    for(let y = 1; y<=5; y++){
        let s = '';
        for(let x = 1; x<=5; x++){
            if(x==h || y==h || x == h-y+1){
                s += ' *'
            }
            else s +='  '
        }
        console.log(s)
    }
}
// veHinh3();

function veHinh(h=5,fn){
    for(let y = 1; y<=5; y++){
        let s = '';
        for(let x = 1; x<=5; x++){
            const dk = fn(x,y,h)
            if(dk){
                s += ' *'
            }
            else s +='  '
        }
        console.log(s)
    }
}
// ve hinh 1
// veHinh(5,function(x,y){
//     return x<=y;
// });
//hinh 2
// veHinh(5,function(x,y,h){
//     return x<=h-y+1;
// });
//hinh3
veHinh(5,(x,y,h)=>x==h || y==h || x == h-y+1);