function getRandomColour(){
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, "0")}`;
}

function changeColor() {
    const newColor = getRandomColour();
    document.body.style.backgroundColor = newColor;
    document.getElementById("color-code").innerText = `Background Color : ${newColor}`
}