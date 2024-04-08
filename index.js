const form = document.querySelector("form");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const password = document.querySelector("#password");
const confirmpw = document.querySelector("#confirm-pw");

email.addEventListener("input", validateInput);
tel.addEventListener("input", validateInput);
password.addEventListener("input", validateInput)
confirmpw.addEventListener("input", validateInput)


function clearError(){
    let errors = document.querySelectorAll(".error")
    for(let error of errors){
        error.classList.remove("display-error");
    }
}

function showError(errorElement){
    console.log('Error msg')
    document.querySelector("."+errorElement).classList.add('display-error');
}


function validateInput(e){
    let input = e.target.value.trim();
    let isInvalid = true;
    clearError();
    switch(e.target.name){
        case "email":
            let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            if (!regx.test(input)){
                email.classList.add('invalid');
                form.setAttribute("onsubmit", "return false");
                isInvalid = true;
                showError("email-error");
            }
            else{
                email.classList.remove('invalid');
                isInvalid = false;
                
            }; break;
        case "tel":
            let numValidator = /[a-zA-z]/;
            if(numValidator.test(input)){
                tel.classList.add('invalid');
                form.setAttribute("onsubmit", "return false");
                isInvalid = true;
                showError("tel-error");
            }
            else{
                tel.classList.remove('invalid');
                isInvalid = false;
                
            }; break;
        case "password":
            if(input !== confirmpw.value){
                form.setAttribute("onsubmit", "return false");
                password.classList.add("invalid");
                confirmpw.classList.add("invalid");
                isInvalid = true;
                showError("password-error")
            }
            else{
                password.classList.remove('invalid');
                confirmpw.classList.remove('invalid');
                isInvalid = false;
            };break;
        case "confirm-pw": 
            if(input !== password.value){
                form.setAttribute("onsubmit", "return false");
                password.classList.add("invalid");
                confirmpw.classList.add("invalid");
                isInvalid = true;
                showError("password-error")
            }
            else{
                password.classList.remove('invalid');
                confirmpw.classList.remove('invalid');
                isInvalid = false;
            };break;
    }
    if(!password.classList.contains('invalid') && !tel.classList.contains('invalid')  && !email.classList.contains('invalid')){
        form.removeAttribute('onsubmit');
    }
    
}

