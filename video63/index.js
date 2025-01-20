let arr = [1, 2, 3, 88, 5, 6, 7];
// index   0  1  2  3  4  5  6

arr[0] = 5666;  // that's why array's are mutable
let a = "akash"
a[0] = "k"
console.log(a) // and here strings cannot be change that's why they are immutable
console.log(arr)
console.log(typeof arr)  // object
console.log(arr.length)
console.log(arr[0])

// for converting array to string
console.log(arr.toString())
// to join all the elements of an array using a separator
console.log(arr.join(" and "))
// for removing last elements of an array
console.log(arr.pop()) // this can change in OG array
// console.log(arr) for confirming
// for adding in existing array
console.log(arr.push("akash")) // update an existing array
// console.log(arr)  for confirming
// for add an element in first place of an array
console.log(arr.unshift("jack"))
// for remove first element of an array 
console.log(arr.shift())
// for deleting an element of an array
console.log(delete(arr[0])) // this method only removes an element from an array but the length of an array still remains.
console.log(arr)
let num = ["sanjay", "anup"]
// for joining two or more arrays
console.log(arr.concat(num)) // this will create a new array ** concat create a new array it does not change an OG array 

// for sort an array
console.log(arr.sort())

// splice method for add an element to an array
let arr1 = [1, 2, 3];
console.log(arr1.splice(1,2,22,33)) 
console.log(arr1)  // ouput :  [1, 22, 33]

// slice mehod for remove a peice of an element of an array
console.log(arr1.slice(2))
console.log(arr1.slice(1,2)) 