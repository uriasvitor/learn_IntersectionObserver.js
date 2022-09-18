import logoAnimation from '../animations/logo.js';
const getLogo = document.querySelector(".logo");
const SwitchStatus = document.querySelector(".switch-letter");
const getMenuMob = document.querySelector(".btn-menu")
const animaDuration = 1000;


const setAnimate = (e)=>{
    e.preventDefault()
    
    logoAnimation();
    
    document.querySelector(".switch-letter").setAttribute("data-animate",'running')
    document.querySelector(".logo-img").setAttribute("data-animate",'running')

    setTimeout(() => {
        document.querySelector(".switch-letter").removeAttribute("data-animate",'running');
        document.querySelector(".logo-img").removeAttribute("data-animate",'running');

        document.querySelector('.logo').setAttribute("data-animate",'stopped');
        document.querySelector(".logo-img").setAttribute("data-animate",'stopped');
                
    }, animaDuration);

    if(SwitchStatus.getAttribute('data-animate') == 'running'){
        getLogo.removeEventListener("mouseover",setAnimate)
    }

}

const menuMobile = ()=>{
    console.log('clicked')
    const itensMenu = document.querySelector('.itens-menu')
    const btnMenu = document.querySelector('.btn-menu')

    if(itensMenu.classList.contains('mobile-on') && btnMenu.classList.contains('is-open') && SwitchStatus.classList.contains('is-open')){
        document.querySelector('.itens-menu').classList.remove('mobile-on');
        document.querySelector('.btn-menu').classList.remove('is-open')
        SwitchStatus.classList.remove('is-open')

        }else{
        document.querySelector('.itens-menu').classList.add('mobile-on');
        document.querySelector('.btn-menu').classList.add('is-open')
        SwitchStatus.classList.add('is-open')
    }
} 

getMenuMob.addEventListener("click", menuMobile)
getLogo.addEventListener("mouseover",setAnimate);