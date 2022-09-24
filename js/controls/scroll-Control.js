const navbar = document.querySelector('header')


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
            console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden')
        }else{
            entry.target.classList.remove('show')
            entry.target.classList.add('hidden')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

window.onscroll = ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navbar.classList.add('scrolled')

    } else {
        navbar.classList.remove('scrolled')
    }
    
}
