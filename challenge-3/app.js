/**
 * Write your challenge solution here
 */

const formInput =document.querySelectorAll('input');

const textArea= document.querySelectorAll('textarea');

const nameDisplay =document.getElementById('nameDisplay');
const jobDisplay = document.getElementById('jobDisplay');
const ageDisplay = document.getElementById('ageDisplay');
const bioDisplay = document.getElementById('bioDisplay');

formInput.forEach((input)=>{
    input.addEventListener("input",(event)=>{
        if(input.id === 'nameInput'){
            nameDisplay.textContent =event.target.value;
        }
        else if(input.id === 'jobInput'){
            jobDisplay.textContent = event.target.value;
        }
        else if(input.id === 'ageInput'){
            ageDisplay.textContent = event.target.value;
        }
    })
})

document.getElementById('bioInput').addEventListener('input' , (event) => {
    bioDisplay.textContent = event.target.value;
})