const getLetter = document.querySelector(".logo");
const state = document.querySelector(".letter");

const animaDuration = 1000;

const setLetter = (e)=>{
    e.preventDefault()

    document.querySelector(".letter").setAttribute("data-animate",'running')
    document.querySelector(".logo_img").setAttribute("data-animate",'running')

    setTimeout(() => {
        document.querySelector(".letter").removeAttribute("data-animate",'running');
        document.querySelector(".logo_img").removeAttribute("data-animate",'running');
    }, animaDuration);

    if(state.getAttribute('data-animate') == 'running'){
        getLetter.removeEventListener("mouseover",setLetter)
    }

    document.querySelector(".letter").animate(
        [
            {   
                transform:  'rotate(0deg)',
                height: '28px'
                
            },

            { 
                transform: 'rotate(90deg)',
                opacity: 0.2,
                borderTop: '2px solid black',
                height: '30px'
                
            },

            {   transform: 'rotate(90deg)',
                borderRadius:'26px',
                borderTop: '2px solid black',
                height: '40px'
            },


        ], 
        
        {
          fill: 'forwards',
          duration: animaDuration

        });

        document.querySelector(".logo_img").animate(
            [
                {   
                    margin:'0 0' 

                },
    
                {   
                    margin:'0 10px'
                },

                {   
                    margin:'0 15px'
                }
    
            ], 
            
            {
              fill: 'forwards',
              duration: 300
    
            });

        document.querySelector('.logo').addEventListener('mouseout',()=>{
            
            console.log("mouseenter")
        })

}

getLetter.addEventListener("mouseover",setLetter)
