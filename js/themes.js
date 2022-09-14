var isValid;
switchBtn = document.querySelector('.letter')
switchState = document.querySelector('.letter')
getTheme = document.querySelector("html");

const verifySwitch = ()=>{
    isValid = true

    if(isValid == true && getTheme.getAttribute('data-theme','dark') === 'dark'){
        isValid = false;
        switchState.classList.add("dark")
        switchState.classList.remove("light")
        
    }

    if(isValid == true){
        switchState.classList.add("light")
    }

    if(isValid == false && getTheme.getAttribute('data-theme','light') === 'light'){
        isValid = true;
      
        switchState.classList.add("light")
        switchState.classList.remove("dark")
    }

}

const darkAnimation = ()=>{
    isValid = !isValid;
    console.log(isValid)

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
    
}

window.addEventListener('load',verifySwitch)
switchBtn.addEventListener('click',darkAnimation)