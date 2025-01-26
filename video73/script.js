function createCard (title, Cname, views, monthsOld, duration, image){
  let veiwStr = `${views}`;
  if(views <= 100){
    veiwStr = views
  }
  else if(views>100000){
    veiwStr = views/100000 + 'M'
  }
  else{
     veiwStr = views/1000 + 'K'
  }
 let html = `<div class="container">
      <div class="card">
        <div class="image">
          <img src="${image}" alt="" />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${Cname} . ${veiwStr} . ${monthsOld} months ago</p>
        </div>
      </div>
    </div>`

document.querySelector(".container").innerHTML = document.querySelector('.container'). innerHTML + html
}
createCard("Intoduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 1, "21:22" ,"thumbnail.avif")