let arr = [1, 2, 3, 4, 5, 6]

console.log(arr.reduce((a, b)=>{
    return a * b
}))


const factorialOf = integer => {
    let factorial = 1;
    for(let i = 1; i <= integer; i++) {
      factorial *= i;
    }
    return factorial;
  }
  console.log(factorialOf(5))


  
  var total = 1;
for(i = 5; i > 1; i--){
 total *= i;
}
console.log(total);