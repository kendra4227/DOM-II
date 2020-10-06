//1
const nav = document.querySelector('.main-navigation');
nav.addEventListener('mouseover',(event)=>{
    event.target.style.color = 'blue';
});
//2
const darkMode = document.querySelector("body")
darkMode.addEventListener("keydown",(event) =>{
    event.target.style.backgroundColor = 'black'
});
//3
const lightsOn = document.querySelector("body")
lightsOn.addEventListener("keyup",(event) =>{
    event.target.style.backgroundColor = "white"
})
//4
const textGreen = document.querySelector("body")
textGreen.addEventListener("keypress", (event)=>{
    event.target.style.color = "green"
})
//5
const changeNav = document.querySelector("nav")
changeNav.addEventListener("click", (event)=>{
    event.target.style.color = "yellow"
})
//6
const buttonGrow = document.querySelector(".content-pick .btn")
console.log(buttonGrow)
buttonGrow.addEventListener("mouseup", (event)=>{
    event.target.classList.toggle("change")
})
//7
const growPicture = document.querySelector(".img-content img")
growPicture.addEventListener("dragend", (event)=>{
    event.target.style.width = "100%"
})
//8
const shrinkPicture = document.querySelector(".img-content img")
shrinkPicture.addEventListener("drag", (event)=>{
    event.target.style.width = "50%"
})
//9
disappear = document.querySelector("header img")
disappear.addEventListener("mouseout", (event)=>{
    event.target.style.display = "none"
})

//10

const photoSpin = document.querySelector(".spin")
photoSpin.addEventListener("click", (event) =>{
event.target.classList.toggle("photoSpin")
})
