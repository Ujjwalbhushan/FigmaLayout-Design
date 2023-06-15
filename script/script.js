var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");
var emailLabel = document.getElementById("email-label");

function validateEmail(){
    emailLabel.style.bottom = "25px";

    if (!emailField.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML = "Please enter a valid email";
        emailField.style.borderBottomColor = "red";
        emailLabel.style.color = "red";

        return false;
    }
    emailError.innerHTML = "Correct";
    emailError.style.color = "green"
    emailField.style.borderBottomColor = "green";
    emailLabel.style.color = "green";
    return true;
}