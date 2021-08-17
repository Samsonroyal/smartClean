


let validation = () => {

  //Defining the form elements
var names = document.signUpForm.name;
var email = document.signUpForm.email;
var telephone = document.signUpForm.telephone;
var password = document.signUpForm.password;
var confirmPassword = document.signUpForm.confirmPassword;
var displayMessage = document.getElementById("message");

//Regex to be used for name, email and phone respectively
const nameRegex = /[A-Z][a-z]* [A-Z][a-z]*( [A-Z])?/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /(\+256)+[0-9]{9}$/;

//Constants for validating the field length of name, phone number and about me field respectively
const minName = 2;
const minPhone = 13;
const maxName = 50;
const minPassword = 5;

 // validating the form field to ensure it has input
 if (names.value == "") {
  names.focus();
  names.style.border = "2px solid red";
  alert("Please enter a name");
  return false;
}
// Ensuring the name field has more than five characters.
if (names.value.length < minName && names.value.length > maxName) {
  names.focus();
  names.style.border = "2px solid red";
  alert("Please enter a valid name.");
  return false;
}
// Ensuring the name field has only a string of characters.
if (!names.value.match(nameRegex)) {
  
  alert("Please use letters only in your name");
  names.style.border = "2px solid red";
  return false;
}

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

if (telephone.value == "") {
  telephone.focus();
  telephone.style.border = "2px solid red";
  alert("Please enter your phone");
  return false;
}
if (telephone.value.length != minPhone) {
  telephone.focus();
  telephone.style.border = "2px solid red";
  alert("Please input a correct phone number");
  return false;
}

if (!telephone.value.match(phoneRegex)) {
  
  alert("Please input a valid phone number starting with +256");
  telephone.style.border = "2px solid red";
  return false;
}

if (password.value == "") {
  password.focus();
  password.style.border = "2px solid red";
  alert("Please enter a password");
  return false;
}
// Ensuring the password field has more than five characters.
if (password.value.length < minPassword) {
  password.focus();
  password.style.border = "2px solid red";
  alert("Please enter a password (at least 5 characters).");
  return false;
}


if (confirmPassword.value != password.value) {
  confirmPassword.focus();
  confirmPassword.style.border = "2px solid red";
  alert("Passwords did not match");
  return false;
} 


};


