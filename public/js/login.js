

let validation = () => {
  //Defining the form elements
var email = document.loginForm.email;
var password = document.loginForm.password;

//Regex to be used for  email

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//Constants for validating the field length of password
const minPassword = 5;
if (email.value == "") {
  email.focus();
  email.style.border = "2px solid red";
  alert("Please input your email Address");
  return false;
}
//Ensuring the email is valid
if (!email.value.match(emailRegex)) {
  
  alert("Please use a valid email");
  email.style.border = "2px solid red";
  return false;
}


if (password.value == "") {
  password.focus();
  password.style.border = "2px solid red";
  alert("Please input your password");
  return false;
}
// Ensuring the password field has more than five characters.
if (password.value.length < minPassword) {
  password.focus();
  password.style.border = '2px solid red';
  alert('Please enter a password (at least 5 characters).');
  return false;
}
};
