const buttons = document.querySelectorAll('button');

const heading =document.getElementById('mainHeading');

buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        if(button.innerHTML === 'Reset'){
            heading.style.color='black';
        }
        else {
            heading.style.color = getComputedStyle(button).backgroundColor;
        }
    })
    
})