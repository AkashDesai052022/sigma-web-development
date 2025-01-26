// async function getData() {
// simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 2000);
//   });

// settle means resolve or reject
// resolve means promise has setteled successfully 
// reject means promise has not settled successfully

async function getData() {
  // simulate getting data from a server
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
//   let data = await x.text()
  console.log(data);
  return data
}



// data.then((v)=>{
//     console.log(data);
//     console.log("process data");
// })



async function main() {
  console.log("loading modules");
  console.log("Do something else");
  console.log("load data");
  let data = await getData();
  console.log(data);
  console.log("process data");
}
main();
