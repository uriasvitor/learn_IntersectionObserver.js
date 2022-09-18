export default function logoAnimate(){ 
    const logoDuration = 1000;

    document.querySelector(".switch-letter").animate(
        [
            {   
                transform:  'rotate(0deg)',
                height: '28px'
                
            },
        
            { 
                transform: 'rotate(90deg)',
                opacity: 0.2,
                borderTop: '2px solid ',
                height: '30px'
                
            },
            
            {   transform: 'rotate(90deg)',
                borderRadius:'26px',
                borderTop: '2px solid white',
                height: '40px'
            },
        
        ], 
    
        {
            fill: 'forwards',
            duration: logoDuration
        
        }),
    
    document.querySelector(".logo-img").animate(
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
                
            })
}