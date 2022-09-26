const navbar = document.querySelector('header')


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
            
        if(entry.isIntersecting){
            entry.target.classList.add('sh');
            entry.target.classList.remove('hi')
        }else{
            entry.target.classList.remove('sh')
            entry.target.classList.add('hi')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hi');
hiddenElements.forEach((el)=> observer.observe(el));

window.onscroll = ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navbar.classList.add('scrolled')

    } else {
        navbar.classList.remove('scrolled')
    }
    
}
