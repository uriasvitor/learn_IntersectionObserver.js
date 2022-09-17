const navbar = document.querySelector('nav')

window.onscroll = ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navbar.classList.add('scrolled')

    } else {
        navbar.classList.remove('scrolled')
    }
    
}
