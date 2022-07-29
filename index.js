// Mobile Menu

// var bx = document.querySelector('.bx')
// var mobileNav = document.querySelector('.mobileNav')

// bx.addEventListener('click', () => {
//     bx.classList.toggle('activeBx')
//     mobileNav.classList.toggle('activeMenu')
// })



// //Efects on scroll 

// var menuDesktop = document.querySelector('.header')
// var btnScroll = document.querySelector('.scrollTop')
// const target = document.querySelectorAll('[data-anime]')
// const animateClass = 'animate'

// window.onscroll = () => {

//     Header

//     if (window.pageYOffset >= 100) {
//         menuDesktop.classList.add('activeHeader')
//         btnScroll.classList.add('scrollTop-active')
//     } else {
//         menuDesktop.classList.remove('activeHeader')
//         btnScroll.classList.remove('scrollTop-active')
//     }


//     //Side Scrolling Animations

//     const windowTop = window.pageYOffset + 550
//     target.forEach((item) => {
//         if (windowTop > item.offsetTop) {
//             item.classList.add(animateClass)
//         }
//     })
// }


// ScrollTop

// btnScroll.addEventListener('click', () => {
//     window.scrollTo(0, 0);
// })





//   function toggleAnswer(div) {
//     const divAnswer = div.nextElementSibling

//     divAnswer.classList.toggle('active')
//   }


// Popuper

var btnPopWhite = document.querySelector('.popuperWhite')
var advantagesPopup = document.querySelector('.advantages > .popuper')
var bxP = document.querySelector('.bxP')


btnPopWhite.addEventListener('click', () => {
    advantagesPopup.classList.remove('fadeTopDown')
    advantagesPopup.style.display = 'block'
    console.log('click')
})

bxP.addEventListener('click', () => {
    advantagesPopup.classList.add('fadeTopDown')
})




var mainProj = document.querySelector('.mainProj')
var colabs = document.querySelector('.colabs')
var activePTBtn = document.querySelector('.activePTBtn')
var insideCardM = document.querySelector('.insideCardM')
var insideCardC = document.querySelector('.insideCardC')
var activeinsideCard = document.querySelector('.activeinsideCard')


mainProj.addEventListener('click', ()=>{

    mainProj.classList.toggle('activePTBtn')

    if(mainProj.classList.contains('activePTBtn')){
        mainProj.innerHTML = "Fechar"
        insideCardM.classList.remove('fadeTopDown')
        insideCardM.style.display = "block"
    }else{
        mainProj.innerHTML = "Saiba mais"
        insideCardM.classList.add('fadeTopDown')
    }
    
})

colabs.addEventListener('click', ()=>{

    colabs.classList.toggle('activePTBtn')

    if(colabs.classList.contains('activePTBtn')){
        colabs.innerHTML = "Fechar"
        insideCardC.classList.remove('fadeTopDown')
        insideCardC.style.display = "block"
    }else{
        colabs.innerHTML = "Saiba mais"
        insideCardC.classList.add('fadeTopDown')
    }
    
})