const toggle_Buttons = document.getElementById('toggle-button') as HTMLButtonElement;
const workExperiences = document.getElementById('work-expeience') as HTMLElement;

toggle_Buttons.addEventListener('click', () => {
    if(workExperiences.style.display === 'none') 
    {workExperiences.style.display = 'block'}

    else{
        workExperiences.style.display ='none'
    }
});