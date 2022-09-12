let getLetter = document.querySelector(".logo")

const setLetter = (e)=>{
    e.preventDefault()
    document.querySelector(".logo").setAttribute('data-animate')
}


getLetter.addEventListener("mouseover",setLetter)