
document.querySelector('.container').tagName
document.querySelector('.container').nodeName
document.querySelector('.container').innerHTML
document.querySelector('.container').innerText
document.querySelector('.container').textContent
document.querySelector('.box').innerText = "hey I am harry"
document.querySelector('.box').hidden = true



document.querySelector('.container').hasAttribute('style')
document.querySelector('.box').hasAttribute('style')
document.querySelector('.box').getAttribute('style')
// document.querySelector('.box').setAttribute('style', )
document.querySelector('.box').setAttribute('style', 'display: inline')
document.querySelector('.box').removeAttribute('style')
document.querySelector('.box').attributes
document.designMode = 'on' // it will help you change in any content of any website. that's why don't trust on screenshots of webpage

let div = document.createElement('div')
div.setAttribute('class', 'created')
div.innerHTML = "hey I am inserted <b> by harry </b>"
document.querySelector('.container').before(div) // but with append the div element inserted at the end 

// prepend : the element div inserted at first position
// before : inserted before container 
// after: ibsert after contaiener
// append:  insert at the end in container


document.querySelector('.container').classList
document.querySelector('.container').classList.add('blue')
document.querySelector('.container').classList.remove('blue')
document.querySelector('.container').classList.contains('blue')
document.querySelector('.container').classList.toggle('red')