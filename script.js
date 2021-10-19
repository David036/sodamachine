let screen = document.querySelector('.screen > p')
let cost = +prompt('Գցեք մետաղադրամը')
screen.innerHTML = cost
let colaBut = document.querySelector('.cola-but')
let fantaBut = document.querySelector('.fanta-but')
let spriteBut = document.querySelector('.sprite-but')
let pepsiBut = document.querySelector('.pepsi-but')
let shwepsBut = document.querySelector('.shweps-but')
let aquaBut = document.querySelector('.aqua-but')
let colaNone = document.querySelector('.cola-none')
let fantaNone = document.querySelector('.fanta-none')
let spriteNone = document.querySelector('.sprite-none')
let pepsiNone = document.querySelector('.pepsi-none')
let shwepsNone = document.querySelector('.shweps-none')
let aquaNone = document.querySelector('.aqua-none')

colaBut.addEventListener('click',()=>{
    if (cost >= 250) {
        colaNone.style.display = 'block'
        cost = cost - 250
        screen.innerHTML = cost
    } else {
        screen.innerHTML = 'not enough money'
        setTimeout(()=> {
            screen.innerHTML = cost
        },2000)
    }
} )
fantaBut.addEventListener('click',()=>{
    if (cost >= 250) {
        fantaNone.style.display = 'block'
        cost = cost - 250
        screen.innerHTML = cost
    } else {
        screen.innerHTML = 'not enough money'
        setTimeout(()=> {
            screen.innerHTML = cost
        },2000)
    }
} )
spriteBut.addEventListener('click',()=>{
    if (cost >= 250) {
        spriteNone.style.display = 'block'
        cost = cost - 250
        screen.innerHTML = cost
    } else {
        screen.innerHTML = 'not enough money'
        setTimeout(()=> {
            screen.innerHTML = cost
        },2000)
    }
} )
pepsiBut.addEventListener('click',()=>{
    if (cost >= 250) {
        pepsiNone.style.display = 'block'
        cost = cost - 250
        screen.innerHTML = cost
    } else {
        screen.innerHTML = 'not enough money'
        setTimeout(()=> {
            screen.innerHTML = cost
        },2000)
    }
} )
shwepsBut.addEventListener('click',()=>{
    if (cost >= 300) {
        shwepsNone.style.display = 'block'
        cost = cost - 300
        screen.innerHTML = cost
    } else {
        screen.innerHTML = 'not enough money'
        setTimeout(()=> {
            screen.innerHTML = cost
        },2000)
    }
} )
aquaBut.addEventListener('click',()=>{
    if (cost >= 160) {
        aquaNone.style.display = 'block'
        cost = cost - 160
        screen.innerHTML = cost
    } else {
        screen.innerHTML = 'not enough money'
        setTimeout(()=> {
            screen.innerHTML = cost
        },2000)
    }
} )
let changeBut = document.querySelector('.clear')
changeBut.addEventListener('click',()=>{
    cost = 0
    screen.innerHTML = cost
    colaNone.style.display = 'none'
    spriteNone.style.display = 'none'
    fantaNone.style.display = 'none'
    shwepsNone.style.display = 'none'
    aquaNone.style.display = 'none'
    pepsiNone.style.display = 'none'
})