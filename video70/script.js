function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      let c = color += letters[Math.floor(Math.random() * 16)];
      console.log(c)
    }
    return color;
  }
  let boxes = document.querySelectorAll('.box')
  boxes.forEach(element => {
    element.style.backgroundColor = getRandomColor()
    element.style.color = getRandomColor()
  });