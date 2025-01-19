console.log("hey I am tutorial on loops")

let a = 100 ;
// console.log(a + 1)
// console.log(a + 2)
// console.log(a + 3)

for(let i = 0; i < 100; i++){
    console.log(a - i)
}
// emmet abbrivation of vscode
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

let obj = {
    name : "akash",
    age: 24,
    gender: "male"
}
for (const key in obj) {
        const element = obj[key];
    console.log(key, element)
}

// emmet abbrivation
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
 

for (const element of "akash" ) {
    console.log(element)
}

// while loop
let i = 0;
while (i<5) {
    console.log(i)
    i++
}