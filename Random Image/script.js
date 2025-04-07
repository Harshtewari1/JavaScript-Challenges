var main = document.querySelector(".main");
var btn = document.querySelector('button');


btn.addEventListener("click", function () {

    var x = Math.random()*90;
    var y = Math.random()*90;

    var img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1741632530035-c374e872ca95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    img.style.height = "200px";
    img.style.position = "absolute";
    img.style.overflow= "hidden";
    img.style.left = x+"%";
    img.style.top = y+"%";


    main.appendChild(img)
})