var isValid = true;

switchBtn = document.querySelector('.letter')

const darkAnimation = ()=>{
    let getTheme = document.querySelector("html");
    let switchState = document.querySelector('.letter')

    if(isValid === true){
        document.querySelector("html").setAttribute("data-theme",'light')

        if(getTheme.getAttribute('data-theme') === 'light'){
            localStorage.setItem('light', true)
            localStorage.removeItem('dark', true)

            switchState.classList.add("light")
            switchState.classList.remove("dark")
        }
    }

    if(isValid === false){

        document.querySelector("html").setAttribute("data-theme",'dark')

        if(getTheme.getAttribute('data-theme') === 'dark'){
            localStorage.setItem('dark', true)
            localStorage.removeItem('light', true)   

            switchState.classList.add("dark")
            switchState.classList.remove("light")
        }
    }
        isValid = !isValid;
    
}

switchBtn.addEventListener('click',darkAnimation)