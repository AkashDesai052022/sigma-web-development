let button = document.getElementById('btn')

button.addEventListener('click', e =>{
    alert('I was clicked')
    document.querySelector('.box').innerHTML = " <b>enjoy</B> your click"
})
button.addEventListener('contextmenu', e =>{
    alert('Dont right click')
  
})
document.addEventListener('keydown', e =>{
    console.log(e)
  
})