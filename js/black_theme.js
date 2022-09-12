var isValid = true;

dark_theme = document.querySelector('.letter')

const darkAnimation = ()=>{
    let getTheme = document.querySelector("html");

    if(isValid === true){
        document.querySelector("html").setAttribute("data-theme",'light')

        if(getTheme.getAttribute('data-theme') === 'light'){
            localStorage.setItem('light', true)
            localStorage.removeItem('dark', true)  
        }
    }

    if(isValid === false){

        document.querySelector("html").setAttribute("data-theme",'dark')

        if(getTheme.getAttribute('data-theme') === 'dark'){
            localStorage.setItem('dark', true)
            localStorage.removeItem('light', true)   
        }
    }
        isValid = !isValid;
    
}

dark_theme.addEventListener('click',darkAnimation)