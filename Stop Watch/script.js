let hours = 0; 
let minutes = 0;
let seconds = 0;
let timer = null;

function start() {
    if (timer != null) return;
    timer = setInterval(updateTime, 1000);
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
}

function stop() {
    clearInterval(timer);
    timer = null;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
}

function reset(){
    stop();
    hours = minutes = seconds = 0;
    document.getElementById('display').innerText = "00:00:00";

}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }


    document.getElementById("display").innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}