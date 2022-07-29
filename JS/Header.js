//Efects on scroll 

var menuDesktop = document.querySelector('.header')
var btnScroll = document.querySelector('.scrollTop')
const target = document.querySelectorAll('[data-anime]')
const animateClass = 'animate'

window.onscroll = () => {

    if (window.pageYOffset >= 100) {
        menuDesktop.classList.add('activeHeader')
        btnScroll.classList.add('scrollTop-active')
    } else {
        menuDesktop.classList.remove('activeHeader')
        btnScroll.classList.remove('scrollTop-active')
    }


    //Side Scrolling Animations

    const windowTop = window.pageYOffset + 550
    target.forEach((item) => {
        if (windowTop > item.offsetTop) {
            item.classList.add(animateClass)
        }
    })
}