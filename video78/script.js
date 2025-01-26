let hack1 = ()=>{
    setTimeout(() => {
      let x = document.querySelector('#one')
      x.append('Initializing Hacking...')
    }, 2000);
}
let hack2 = ()=>{
    setTimeout(() => {
        let x = document.querySelector('#two')
      x.append('Reading your files...')
    }, 4000);
}
let hack3 = ()=>{
    setTimeout(() => {
        let x = document.querySelector('#three')
      x.append('Password flies Detected...')
    }, 6000);
}
let hack4 = ()=>{
    setTimeout(() => {
        let x = document.querySelector('#four')
      x.append('Sending all passwords and personal files to server...')
    }, 8000);
}
let hack5 = ()=>{
    setTimeout(() => {
        let x = document.querySelector('#five')
      x.append('Cleaning up...')
    }, 10000);
}
hack1()
hack2()
hack3()
hack4()
hack5()

// let x = document.querySelector('#one').textContent
// console.log(x);