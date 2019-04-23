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
        }
        console.log(s)
    }
}
veHinh2();


//         *
//       * *
//     *   *
//   *     *
// * * * * *
