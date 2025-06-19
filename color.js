const element=document.querySelector("body");

function setColor(name){
    element.style.backgroundColor=name;
}

function random(){
    const red=Math.round(Math.random()*255);
    const green=Math.round(Math.random()*255);
    const blue=Math.round(Math.random()*255);

    element.style.backgroundColor=`rgb(${red},${green},${blue})`;
}