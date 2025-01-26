console.log("hello")

// let boxes = document.getElementsByClassName('box')
let boxes = document.querySelector('.container').children

function getRandomColor (){
    // let val1 = Math.floor(Math.random() * 255);
    // let val2 = Math.floor(Math.random() * 255);
    // let val3 = Math.floor(Math.random() * 255);
    // return `rgb(${val1},${val2}, ${val3})`

    
    let letters = "0123456789ABCDEF"
    let color = '#'
    for (let i  = 0; i  < 6; i ++) {
         color += letters[Math.floor(Math.random() * 16)]
        // console.log(color)  
    }
    return color
}
Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})


// if you want a random number between a and b 
// then a + r (b-a)
// then I want random number between 0 to 255 
// means a will be 0 then 0 + Math.random() * 255
// eg. random numbers between 1 to 10
// 1 + Math.random() * 9