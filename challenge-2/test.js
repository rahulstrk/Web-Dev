/**
 * Write your challenge solution here
 */

// get all the buttons
const buttons = document.querySelectorAll("button");
const heading = document.getElementById("mainHeading");

buttons.forEach((button) => {
    button.addEventListener("click",function(){
        if(button.id === "resetButton"){
            heading.style.color ="black";
        }
        else{
            heading.style.color =getComputedStyle(button).backgroundColor;
           
        }
       
    })
})
