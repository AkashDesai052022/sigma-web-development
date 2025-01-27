async function main (){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// below code is known as IIFE(immediately invoked funciton expression)
(async function sleep(){
    // let a = await main()
    // console.log(a);
    // let b = await main()
    // console.log(b);

    // let [x, y] = [2, 4]
    // console.log(x, y); // 2 4

    // let [x, y, ...rest] = [2, 4, 8,5,6,9]
    // console.log(x, y); // 2 4
    // console.log(rest); // [8, 5, 6, 9]

//     let obj = {
//         a: 1, 
//         b: 2, 
//         c: 3,
//     } 
//    const {a, b, c} = obj
//    console.log(a, b, c);
function sum (a, b, c, d, e){
    return a+b+c+d+e
}
let arr = [1, 4, 5, 6, 7]
console.log(sum(...arr));
console.log(sum(arr[0],arr[1],arr[2],arr[3],arr[4]));

const a = "the";
const b = "no"
const c = {a, b}
console.log(c);

})()