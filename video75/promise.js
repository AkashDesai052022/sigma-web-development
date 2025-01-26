let prm1 = new Promise((resolve, reject) => {
  let a = Math.random() * 10;
  if (a < 5) {
    reject("a random number is not supporting you 1");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 1");
      resolve("harry 1");
    }, 1000);
  }
});

let prm2 = new Promise((resolve, reject) => {
  let a = Math.random() * 10;
  if (a < 5) {
    reject("a random number is not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("harry 2");
    }, 1000);
  }
});
let prm3 = new Promise((resolve, reject) => {
  let a = Math.random() * 10;
  if (a < 5) {
    reject("a random number is not supporting you 3");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 3");
      resolve("harry 3");
    }, 1000);
  }
});
let prm4 = new Promise((resolve, reject) => {
  let a = Math.random() * 10;
  if (a < 5) {
    reject("a random number is not supporting you 4");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 4");
      resolve("harry 4");
    }, 1000);
  }
});

// all 
// allSettled : gives status and value of promise (fullfilled or rejected)
// race
// any


let p3 = Promise.any([prm1, prm2, prm3, prm4])
p3.then((a)=>{
    // document.body.append(a)   
    console.log(a);
}).catch((err)=>{
    // document.body.append(err)
    console.log(err);
})

