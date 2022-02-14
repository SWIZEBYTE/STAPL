"use strict"
const info = document.querySelector(".info");

info.addEventListener("click",function(){
    alert("You will be notified");
    info.textContent="thanks you will be notified";
})