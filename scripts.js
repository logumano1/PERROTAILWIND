let infodev = document.getElementById("dropDev");
let btn = document.getElementById("butDev");

btn.onmouseover = function(){
    infodev.classList.remove("hidden")
}

infodev.onmouseleave = function(){
    infodev.classList.add("hidden")
}