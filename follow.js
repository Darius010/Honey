var bee = document.getElementById('bee');
var bee2 = document.getElementById('bee2');
var container = document.getElementsByClassName("container");
var navbar = document.getElementsByClassName("nav");

var x = window.innerWidth/5.4 + "px";
var y= window.innerHeight/1.8 + "px";

var x2 = window.innerWidth/5.6 + "px";
var y2 = window.innerHeight/2.3 + "px";

function follow(){
    var x = event.clientX * 95 / window.innerWidth + "%";
    var y = event.clientY * 90 / window.innerHeight + "%";
    var y2 = event.clientY * 90 / window.innerHeight + "%";
    var x2 = event.clientX * 110 / window.innerWidth  + "%";
    for(var i=0; i<2 ; i++){
        bee.style.top = y2;
        bee.style.left = x2;
        bee2.style.top = y;
        bee2.style.left = x;
        bees[i].style.transform = "translate(-"+x+", -"+y+")";
    }
}
function original(){
   
for( var i=0; i<2; i++){
        bee.style.top = x;
        bee.style.left = y;
        bee2.style.top = y2;
        bee2.style.left = x2;
        bees[i].style.transform = "translate(-"+x+", -"+y+")";
    }
}

original();
window.onscroll=navigate();

function navigate(){
"use strict";
if(document.body.scrollTop >= 200){
navbar.classList.add("nav-scrolled");
navbar.classList.remove("nav");
}
}