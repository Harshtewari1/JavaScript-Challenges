var btn  = document.querySelector('button')
var percentage = document.querySelector('#percentage')
var progress = document.querySelector('#progress')
var raw = 0

btn.addEventListener('click', function () {
    var abc = setInterval(function () {
        raw++;
        percentage.innerHTML = raw + '%'
        progress.style.width = raw + '%';
    },50)
    setTimeout(() => {
        clearInterval(abc)
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 50 + "%"
    }, 5000);
})