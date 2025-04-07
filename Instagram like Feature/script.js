var image = document.querySelector(".image")
var like = document.querySelector(".like")

image.addEventListener("dblclick", function () {
    like.style.opacity = '1'
    setTimeout(function () {
       like.style.opacity = '0' 
    },500)
})