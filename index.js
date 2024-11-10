var toggle_Button = document.getElementById('toggle-button');
var workExperience = document.getElementById('work-expeience');
toggle_Button.addEventListener('click', function () {
    if (workExperience.style.display === 'none') {
        workExperience.style.display = 'block';
    }
    else {
        workExperience.style.display = 'none';
    }
});
