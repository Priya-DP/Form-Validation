const form = document.getElementById('form');
const userName = document.getElementById('userName');
const PhoneNo = document.getElementById('PhoneNo');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

    function checkInput() {
    const userNameValue = userName.value.trim();
    const PhoneNoValue = PhoneNo.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirm_passwordValue = confirm_password.value.trim();

    //USERNAME
     // USERNAME
     if (userNameValue === '') {
        setError(userName, 'Username Cannot be blank');
    } else {
        setSuccess(userName);
    }

     // PHONENUMBER
     if (PhoneNoValue === '') 
     {
        setError(PhoneNo, 'Phone Number cannot be Empty');
    } 
    else if (!isPhoneNo(PhoneNoValue)) 
    {
        setError(PhoneNo, 'Enter 10 digits Number');
    } 
    else {
        setSuccess(PhoneNo);
    }


    // EMAIL
    if (emailValue === '') {
        setError(email, 'Email cannot be Empty');
    } else if (!isEmail(emailValue)) {
        setError(email, 'Enter a Valid Mail id');
    } else {
        setSuccess(email);
    }

   

      // PASSWORD
    if (passwordValue === '')
    {
        setError(password, 'Password cannot be Empty');
    } 
    else 
    {
        setSuccess(password);
    }

    // CONFIRM PASSWORD
    if (confirm_passwordValue === '') {
        setError(confirm_password, 'Confirm Password cannot be Empty');
    }
     else if (confirm_passwordValue !== passwordValue) 
    {
        setError(confirm_password, 'Passwords do not match');
    } 
    else
     {
        setSuccess(confirm_password);
    }
}
   
function setError(input, message) {
    const loginform = input.parentElement;
    const small = loginform.querySelector('small');
    loginform.className = 'login-form error';
    small.innerText = message;
}

function setSuccess(input)
{
    const loginform = input.parentElement;
    loginform.className = 'login-form success';
    

}

function isEmail(emailValue) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue);
}

function isPhoneNo(PhoneNoValue) {
    return /^\d{10}$/.test(PhoneNoValue);
}