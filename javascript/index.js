// declare variable using dom
let body = document.querySelector('body');
let welTag = document.querySelector('h1');
let desc = document.querySelector('h2');
let icons = document.querySelector('.icons');
let dark = document.querySelector('.dark1');
let light = document.querySelector('.light1');
let btnStart = document.querySelector('.start');

dark.onclick=function (){
    body.classList.add('darkMode')
    welTag.classList.add('header');
    icons.classList.add('header');
    desc.classList.add('header');
    btnStart.style.backgroundColor='#e4c0c0'
    dark.style.color='#fff';
    light.style.color='#fff';
}

light.onclick=function (){
    body.classList.remove('darkMode');
    welTag.classList.remove('header');
    icons.classList.remove('header');
    desc.classList.remove('header');
    dark.style.color='#000';
    light.style.color='#000'    
}