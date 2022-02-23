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
            primaryHue = 280;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 325;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 0;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 210;
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
    window.location.reload()
})

bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    changeBG();
})
 

/* ================ Memory Card ================== */


const cards = document.querySelectorAll('.cardi');

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}
function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 5000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `assets/img/tecnologias/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});


/* ================ JQUERY VALIDATION ================== */


$(document).ready(function() {
    $("#form-box").validate({
      rules: {
        nombre: {
          required: true,
          minlength: 3
        },
        apellido: {
            required: true,
            minlength: 3
          },
        email: {
          required: true,
          email: true
        },
        telefono: {
          required: true,
          minlength: 10,
          maxlenght: 17
        },
        asunto: {
            required: true
        },
        message: {
            required: true
        }
      },
    messages :{
        nombre: {
            required: 'Este campo no puede estar vacío',
            minlength: 'Coloca un nombre válido'
        },
        apellido: {
            required: 'Este campo no puede estar vacío',
            minlength: 'Coloca un apellido válido'
        },
        email: {
            required: 'Este campo no puede estar vacío',
            email: 'Coloca un correo válido, por favor'
        },
        telefono: {
            required: 'Este campo no puede estar vacío',
            minlength: 'Cóloca un número de teléfono válido',
            maxlength: 'Cóloca un número de teléfono válido'
        },
        asunto: {
            required: 'Este campo no puede estar vacío'
        },
        message: {
            required: 'Este campo no puede estar vacío'
        }
    }
    });
  });


  /* ================ GSAP ANIMATION ================== */

  

  let animated = gsap.timeline({
      repeat: 0,
  });

  animated.from('.animatedtitle', {
      delay: 4,
      y: -100,
      duration: 2,
      ease: 'ease.InOut'
  });

    animated.from('.animatedInicio', {
        delay: 0,
        y: -100,
        duration: 2,
        ease: 'ease.InOut'
    }, '-=2'
  );
    animated.from('.animatedAcerca', {
        delay: 0,
        y: -100,
        duration: 2,
        ease: 'ease.InOut'
    },'-=2'
);
    animated.from('.animatedConocimiento',{
        delay: 0,
        y: -100,
        duration: 2,
        ease: 'ease.InOut'
    },'-=2'
);
    animated.from('.animatedContacto',{
        delay: 0,
        y: -100,
        duration: 2,
        ease: 'ease.InOut'
    },'-=2'
);
    animated.from('.nav-btns',{
        delay: 0,
        y: -100,
        duration: 2,
        ease: 'ease.InOut'
    },'-=2'
);
    animated.from('.animatedImage',{
        delay: 0,
        y: -320,
        duration: 2,
        ease: 'bounce.out'
    },'-=2'
);
    animated.from('.animatedTitulo',{
        delay: 0,
        y: 50,
        duration: 1,
        ease: 'ease.InOut'
    },'-=2'
);
    animated.from('.animatedInfo',{
        delay: 0,
        y: 100,
        duration: 1,
        ease: 'ease.InOut'
    },'-=2'
);
    animated.from('.animatedIcons',{
        delay: 0,
        y: 100,
        duration: 1,
        ease: 'ease.InOut'
    },'-=2'
);
    animated.from('.animatedBtnContact',{
        delay: 0,
        y: 100,
        duration: 1.5,
        ease: 'ease.InOut'
    },'-=2'
);
    animated.from('.scroll-down',{
        delay: 0,
        y: 100,
        duration: 1.5,
        ease: 'bounce.out'
    },'-=1'
);

/* ================ ANIMATE.JS - ANIMATION ================== */

AOS.init({
    offset: 400,
    duration: 1000,
    startEvent: 'DOMContentLoaded',
    mirror: false,
    debounceDelay: 100,
    throttleDelay: 100,
});


/* ================ PRELOADER ================== */

// Solo si Chrome no soporta el offset-path

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if(!isChrome) {
    document.getElementsByClassName('infinityChrome')[0].style.display = "none";
    document.getElementsByClassName('infinity')[0].style.display = "block";
}

setTimeout(() => {
    $('.preloader').fadeToggle();
    document.getElementById('body').classList.remove('body')}, 3500)
