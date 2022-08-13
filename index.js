console.log("hello world");
let random1 = Math.random()*6;
let random2 = Math.random()*6;
random1 = Math.floor(random1)+1;
random2 = Math.floor(random2)+1;
const get = document.querySelector(".img1");
const get1 = document.querySelector(".img2");
if (random1 === 1) {
    get.setAttribute("src", "images/dice1.png")
}
else if(random1 ===2 ){
    get.setAttribute("src", "images/dice2.png")
}
else if(random1 ===3 ){
    get.setAttribute("src", "images/dice3.png")
}
else if(random1 ===4 ){
    get.setAttribute("src", "images/dice4.png")
}
else if(random1 ===5 ){
    get.setAttribute("src", "images/dice5.png")
}
else if(random1 ===6 ){
    get.setAttribute("src", "images/dice6.png")
}



if (random2 === 1) {
    get1.setAttribute("src", "images/dice1.png")
}
else if(random2 ===2 ){
    get1.setAttribute("src", "images/dice2.png")
}
else if(random2 ===3 ){
    get1.setAttribute("src", "images/dice3.png")
}
else if(random2 ===4 ){
    get1.setAttribute("src", "images/dice4.png")
}
else if(random2 ===5 ){
    get1.setAttribute("src", "images/dice5.png")
}
else if(random2 ===6 ){
    get1.setAttribute("src", "images/dice6.png")
}
