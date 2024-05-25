const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const statusText = document.getElementById('statusText');
const signupForm = document.getElementById('signupForm');

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

function validateEmail() {
    const email = emailInput.value.trim();
    if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
        emailError.textContent = 'make sure email is more than 3 characters and has @ and a .';
    } else {
        emailError.textContent = '';
    }
    updateStatusText();
}

function validatePassword() {
    const password = passwordInput.value.trim();
    if (password.length < 8) {
        passwordError.textContent = 'make sure password is more than 8 characters.';
    } else {
        passwordError.textContent = '';
    }
    updateStatusText();
}

function updateStatusText() {
    if (!emailError.textContent && !passwordError.textContent) {
        statusText.textContent = 'All good to go';
        statusText.classList.remove('error');
        statusText.classList.add('success');
    } else {
        statusText.textContent = '';
        statusText.classList.remove('success');
        statusText.classList.add('error');
    }
}

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!emailError.textContent && !passwordError.textContent) {
        const confirmed = window.confirm('Are you sure you want to sign up?');
        if (confirmed) {
            window.alert('Successful signup!');
        } else {
            emailInput.value = '';
            passwordInput.value = '';
            statusText.textContent = '';
        }
    }
});
