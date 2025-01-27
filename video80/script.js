// let obj = {
//   a: 1,
//   b: "harry",
// };
// console.log(obj);

// let animal = {
//   eats: true,
//   bath: true,
// };
// let rabbit = {
//   jumps: true,
// };
// rabbit.__proto__ = animal // prototype means (the method of adding more properties to an object )


class Animal {
  constructor(name){
    this.name = name
    console.log("object is created...");
  }
  eats(){
    console.log('kha raha hoon');
  }
  jumps(){
   console.log("kood raha hoon");
  }
}

class lion extends Animal {
  constructor(name){
    super(name);
    console.log("objected is created ... and he is lion");
  }
}

 
let a = new Animal('bunny')
console.log(a);

let l = new lion('shera')
console.log(l);