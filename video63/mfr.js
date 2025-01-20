// for creating new array 

let arr = [1, 2, 3, 4, 5, 6]
// using for loop
// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     newArr.push(value **2)
// }

// using map method
let newArr = arr.map((e) =>{
    return e**2
})
console.log(newArr)


// filter method

let oldArr = arr.filter(e=>{
    if(e >=3){
        return true
    }
    return false
})
console.log(oldArr)  // this mehtod create a new array
console.log(arr) // does not change a OG array


console.log(arr.reduce((a, b)=>{
    return a * b
}))
