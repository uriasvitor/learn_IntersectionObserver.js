
function onload(){
    if(localStorage.getItem('dark') == 'true'){
        document.querySelector("html").setAttribute("data-theme",'dark')
    }else{
        document.querySelector("html").setAttribute("data-theme",'light')
    }
}