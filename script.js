const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showsSignupBtn = document.getElementById('showSignup');
const showLoginBtn = document.getElementById('showLogin');

// Event listener to switch to signup form when the sign up button is clicked
showsSignupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    showsSignupBtn.classList.add('hidden'); // hide sign up button
    showLoginBtn.classList.remove('hidden'); // show sign in button
});

// Event listener to switch to login form when the sign in button is clicked
showLoginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    showLoginBtn.classList.add('hidden'); // hide sign in button
    showsSignupBtn.classList.remove('hidden'); // show sign up button
});

// Function to format ID number with spaces after 6 and 10 digits
function formatIDNumber(input){
  // Remove any non-digit characters (including spaces)
  let value = input.value.replace(/\D/g, '');

  // Add space after the 6th and 11th digit if available
  if (value.length > 6) {
    value = value.slice(0, 6) + ' ' + value.slice(6);
  }
  if (value.length > 11) {
    value = value.slice(0, 11) + ' ' + value.slice(11);
  }

  // Set the formatted value back to the input
  input.value = value;
}

// Assuming your ID input is in the signup form
const idInput = document.getElementById('IDNumber');
idInput.addEventListener('input', () => formatIDNumber(idInput));

//Function to format Cellphone Number spaces after 3 and 7 digits
function formatCellphoneNumber(input){
    // Remove any non-digit characters (including spaces)
    let value = input.value.replace(/\D/g, '');
  
    // Add space after the 3rd and 7th digits if available
    if (value.length > 3) {
      value = value.slice(0, 3) + ' ' + value.slice(3);
    }
    if (value.length > 7) {
      value = value.slice(0, 7) + ' ' + value.slice(7);
    }
  
    // Set the formatted value back to the input
    input.value = value;
  }
  //Function to validate pasword match
  function validatePasswords(){
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block'; // Show the error message
        return false; // Prevent form submission
    } else {
        errorMessage.style.display = 'none'; // Hide the error message if passwords match
        return true; // Allow form submission
    }
}

//Funtion fill in mandatory fields
function validateForm(){
    let isValid = true;

    const fields = [
        { id: 'name', errorId: 'nameError' },
        { id: 'surname', errorId: 'surnameError' },
        { id: 'idNumber', errorId: 'idNumberError' },
        { id: 'cellphoneNumber', errorId: 'cellphoneError' },
        { id: 'email', errorId: 'emailError' },
        { id: 'password', errorId: 'passwordError' },
        { id: 'confirmPassword', errorId: 'confirmPasswordError' }
    ];

    // Check if fields are empty and show the "*" for missing inputs
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);

        if (input.value.trim() === ''){
            error.style.display = 'inline'; // Show the "*"
            isValid = false;
        } else {
            error.style.display = 'none'; // Hide the "*" if field is filled
        }
    });

    // Check if passwords match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordErrorMessage = document.getElementById('passwordErrorMessage');

    if (password !== confirmPassword) {
        passwordErrorMessage.style.display = 'block'; // Show "Passwords do not match" error
        isValid = false;
    } else {
        passwordErrorMessage.style.display = 'none'; // Hide error if passwords match
    }

    return isValid; // Return true if all fields are valid, otherwise prevent submission
    }

// Check password strength
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('passwordStrengthText');
    let strength = 0;

    // Password strength criteria
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[\W_]/.test(password)) strength += 1;

    // Show strength bar and update color/width
    strengthBar.style.display = 'block';

    switch (strength) {
        case 1:
            strengthBar.style.width = '10%';
            strengthBar.style.backgroundColor = 'red';
            strengthText.style.color = 'red';
            strengthText.innerText = 'Weak';
            break;
        case 2:
            strengthBar.style.width = '20%';
            strengthBar.style.backgroundColor = 'orange';
            strengthText.style.color = 'orange';
            strengthText.innerText = 'Moderate';
            break;
        case 3:
            strengthBar.style.width = '40%';
            strengthBar.style.backgroundColor = 'yellow';
            strengthText.style.color = 'yellow';
            strengthText.innerText = 'Good';
            break;
        case 4:
            strengthBar.style.width = '50%';
            strengthBar.style.backgroundColor = ' #3afb04';
            strengthText.style.color = ' #3afb04';
            strengthText.innerText = 'Strong';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = 'green';
            strengthText.style.color = 'green';
            strengthText.innerText = 'Very Strong';
            break;
        default:
            strengthBar.style.width = '0';
            strengthText.innerText = '';
    }

    // Store the strength for validation
    document.getElementById('passwordStrength').value = strength;
}

function validateForm() {
    let isValid = true;

    // List of required fields and corresponding error spans
    const fields = [
        { id: 'name', errorId: 'nameError' },
        { id: 'surname', errorId: 'surnameError' },
        { id: 'idNumber', errorId: 'idNumberError' },
        { id: 'cellphoneNumber', errorId: 'cellphoneError' },
        { id: 'email', errorId: 'emailError' },
        { id: 'password', errorId: 'passwordError' },
        { id: 'confirmPassword', errorId: 'confirmPasswordError' }
    ];

    // Validate required fields
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);

        if (input.value.trim() === '') {
            error.style.display = 'inline'; // Show "*" if the field is empty
            isValid = false;
        } else {
            error.style.display = 'none'; // Hide "*" if the field is filled
        }
    });

    // Password matching validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordErrorMessage = document.getElementById('passwordErrorMessage');

    if (password !== confirmPassword) {
        passwordErrorMessage.style.display = 'block'; // Show mismatch error
        isValid = false;
    } else {
        passwordErrorMessage.style.display = 'none'; // Hide error if passwords match
    }

    // Password strength validation
    const passwordStrength = parseInt(document.getElementById('passwordStrength').value);
    if (passwordStrength < 3) {  // Less than 50% strength is not acceptable
        alert('Password strength must be at least "Good" (50%)');
        isValid = false;
    }

    return isValid; // Return false to prevent form submission if validation fails
}

