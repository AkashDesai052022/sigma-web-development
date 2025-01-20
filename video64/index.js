let obj1 = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};
let obj2 = {
  1: "Engine",
  2: "Food",
  3: "Garments",
};
let obj3 = {
  1: "Hub",
  2: "Bros",
  3: "Limited",
};

let random1 = Math.floor(Math.random()*3) + 1
let random2 = Math.floor(Math.random()*3) + 1
let random3 = Math.floor(Math.random()*3) + 1

// console.log(`${random1} ${random2} ${random3}`)
console.log(obj1[random1] +" " + obj2[random2] + " " + obj3[random3])