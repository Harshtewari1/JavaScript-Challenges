let count = 0;

function upadateCount() {
    document.getElementById("counter").innerText = count;
}

function increase() {
    count++;
    upadateCount();
}

function decrease() {
    count--;
    upadateCount();
}

function reset() {
    count = 0;
    upadateCount();
}