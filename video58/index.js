function nice(name) {
    console.log("hey " + name + " you are so nice!")   
}
nice("akash")
nice("anup")

function sum ( a, b){
    // console.log(a+b)
    return a + b
}
let result = sum(3,56) // here i can store is sum in variable using return keyword in function
let result1 = sum(3,5) // here i can store is sum in variable using return keyword in function
let result2 = sum(3,6) // here i can store is sum in variable using return keyword in function
// and i can reuse this function as many times 
console.log("the total sum of given numbers is", result) 
console.log("the total sum of given numbers is", result1) 
console.log("the total sum of given numbers is", result2) 

// you can give a default parameter in function 
function sum2 (a, b, c=4){
    return a + b + c;
}
let result4 = sum2(3,5)
console.log(result4)

// arrow funciton 
// the advantage of arrow function is that you can store function inside a variable 
const func1 = (x)=>{
    console.log('here I am arrow function', x)
}
func1(45)
func1(5)
func1(4)