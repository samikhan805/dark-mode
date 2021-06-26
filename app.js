var btn = document.querySelector('.button')
var body = document.querySelector('body')

btn.addEventListener('click', function() {
  btn.classList.toggle('active')
  body.classList.toggle('active')
})