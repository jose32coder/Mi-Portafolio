/* ================ NAVBAR ================== */

const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLinks = document.querySelectorAll('.nav-link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader(){
    const header = document.getElementById('header')
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header')
    }
    else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)


/* ================ SELECCION DE TEMA ================== */

const theme = document.querySelector('#theme-button');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');
const bg1= document.querySelector('.bg-1');
const bg2= document.querySelector('.bg-2');
const bg3= document.querySelector('.bg-3');


const openThemeModal = () => {
    themeModal.style.display = 'grid'
}
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
      themeModal.style.display = 'none';
  }
}
theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active')
        if(size.classList.contains('font-size-1')){
            fontSize = '12px'
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '14px'
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '18px'
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})

const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () =>{
        let primaryHue;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 315;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 0;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 204;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 30;
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}


bg1.addEventListener('click', () =>{
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload()
})

bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');
    bg2.classList.remove('active');
    bg1.classList.remove('active');
    changeBG();
})