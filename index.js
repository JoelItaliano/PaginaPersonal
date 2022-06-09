/*const btnOpenSpace = document.querySelectorAll(".open-window");*/
const btnOpenSpace = document.getElementById('btnSpace');
const btnVirtualPiano = document.getElementById('btnPiano');
const windowSpace = document.getElementById('space');
const windowPiano = document.getElementById('piano');
const btnCloseWindows = document.querySelectorAll('.close-window');
const popups = document.querySelector('.popups');

const menuDesplegable = document.querySelector('.material-symbols-outlined');
const iconMenu = document.querySelector("span")
const listNavegacion = document.querySelector('.nav_menu');
const nav = document.querySelector('nav')

const menuHamburger = document.getElementById("nav")


window.addEventListener('resize', tamañoPantalla);

function tamañoPantalla (){
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth >= 900){
        menuHamburger.classList.remove('hamburger')
    }else{
        menuHamburger.classList.toggle('hamburger')
    }
}

/*fun que depliega el menu en pantallas chicas*/
menuDesplegable.addEventListener('click',()=>{
    listNavegacion.classList.toggle('menu_desplegable')
    //nav.classList.toggle('menu_desplegable')
    iconMenu.classList.toggle('icon_menu')
})

/*funcion que abre las ventanas emergentes*/
btnOpenSpace.addEventListener('click',()=>{
    popups.classList.add('show');
    windowSpace.style.visibility = 'visible'
})
btnVirtualPiano.addEventListener('click',()=>{
    popups.classList.add('show');
    windowPiano.style.visibility = 'visible'
})

/*funcion para cerrar las ventanas emergentes*/
const addClassVentana = function (evento){
    popups.classList.remove('show');
    windowPiano.style.visibility = 'hidden'
    windowSpace.style.visibility = 'hidden'
}
document.addEventListener('click',()=>{
  /*  btnOpenSpace.forEach(btnOpen=>{
        btnOpen.addEventListener('click',addClassVentana)
    })*/
    btnCloseWindows.forEach(bntClose=>{
        bntClose.addEventListener('click',addClassVentana);
    })
})



