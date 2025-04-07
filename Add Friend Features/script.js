var btn = document.querySelector('button')
var textStranger = document.querySelector('#stranger')
var requestSend = 0;


btn.addEventListener('click', function () {
    if (requestSend==0) {
        textStranger.innerHTML = 'Sending Requests'
        textStranger.style.color = 'green';
        btn.style.opacity = "0";


        setTimeout(function () {
            textStranger.innerHTML = 'Friends'
            textStranger.style.color = 'green';
            btn.style.opacity = "100";
            btn.innerHTML = 'Remove';
            btn.style.backgroundColor = 'red'
            requestSend = 1;
        }, 2000)
    } else if(requestSend==1) {
        textStranger.innerHTML = 'Stranger'
        textStranger.style.color = 'red';
        btn.style.opacity = "100";
        btn.innerHTML = 'Add Friends';
        btn.style.backgroundColor = 'green'
        requestSend = 0;
    }
})