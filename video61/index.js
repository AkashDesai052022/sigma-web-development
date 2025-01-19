// solution of given exercise

let random = Math.floor(Math.random()*10);
console.log(random);

let a = prompt("enter first number");
let b = prompt("enter operation");
let c = prompt("enter last number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};
if (random > 5) {
  // gives correct calculation
  console.log(`the result is ${eval(`${a} ${b} ${c}`)}`);
} else {
  b = obj[b];
  console.log(`the result is ${eval(`${a} ${b} ${c}`)}`);
}
