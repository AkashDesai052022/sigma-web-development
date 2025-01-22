// console.log("dips")


// let boxes = document.getElementsByClassName('box')
// console.log(boxes)

// boxes[2].style.backgroundColor  = 'red'

// document.getElementById('reddips').style.backgroundColor = 'red'

// with querySelector
document.querySelector('.box').style.backgroundColor = 'red'  // select firstest class name with box and also with id


// document.querySelectorAll('.box').style.backgroundColor = 'red'
// Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')

document.querySelectorAll('.box').forEach(element => {
    element.style.backgroundColor = 'red'
});
