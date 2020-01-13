import avatar from '../images/1.jpg'

(function () {
  let img = new Image()
  img.src = avatar
  img.onload = () => {
    console.log(avatar)
    let body = document.querySelector('body')
    let imgTag = document.createElement('img')
    imgTag.src = avatar
    body.appendChild(imgTag)
  }
})()