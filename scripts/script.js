// JavaScript Document
var hamburgerbutton = document.querySelector("#hamburger")
var nav = document.querySelector("#nav")
var kruisbutton = document.querySelector("#kruis")

hamburgerbutton.addEventListener('click',active)
kruisbutton.addEventListener('click',weg)

function active(){
    nav.classList.add('toonmenu')
}

function weg(){
    nav.classList.remove('toonmenu')
}