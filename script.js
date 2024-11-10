function validate(){
    let isValid = true;

    const email = document.getElementById("email");
    const login = document.getElementById("login");
    const password = document.getElementById("pass");
    const password2 = document.getElementById("pass2");
    const terms = document.getElementById("terms");

// Reference error messages
    const emailError = document.getElementById("emailError");
    const loginError = document.getElementById("loginError");
    const passError = document.getElementById("passError");
    const pass2Error = document.getElementById("pass2Error");
    const termsError = document.getElementById("termsError");

// Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //pattern structure required
    if (!emailPattern.test(email.value)) { 
        emailError.textContent = "❌Email address should be non-empty with the format xyz@xyz.xyz.";
        email.style.border = "2px solid red";
        isValid = false;
    } else {
        emailError.textContent = "";
        email.style.border = "";
    }

// Login validation
    if (login.value.trim() === "" || login.value.length > 30) {
        loginError.textContent = "❌User name should be non-empty, and within 20 characters long"
        login.style.border = "2px solid red";
        isValid = false;
    } else {
        loginError.textContent = "";
        login.style.border = "";
        login.value = login.value.toLowerCase(); // Convert to lowercase
    }

// Password validation
    if (password.value.length < 8) {
        passError.textContent = "❌Password should be at least 6 characters: 1 uppercase, 1 lowercase.";
        password.style.border = "2px solid red";
        isValid = false;
    } else {
        passError.textContent = "";
        password.style.border = "";
    }

// Confirm password validation
    if (password.value !== password2.value || password2.value.trim() === "") {
        pass2Error.textContent = "❌Please retype password.";
        password2.style.border = "2px solid red";
        isValid = false;
    } else {
        pass2Error.textContent = "";
        password2.style.border = "";
    }

    // Terms and conditions validation
    if (!terms.checked) {
        termsError.textContent = "❌Please accept the terms and conditions.";
        isValid = false;
    } else {
        termsError.textContent = "";
    }

    return isValid;
}

// Newsletter alert
function newsletterAlert() {
    const newsletter = document.getElementById("newsletter");
    if (newsletter.checked) {
        alert("You may receive spam emails if you subscribe to the newsletter. Press OK to continue.");
    }
}

