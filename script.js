let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelectquerySelector('.title');
let underLine = document.querySelector('.underline');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sing in';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underLine.style.transform = 'translateX(35px)';
});