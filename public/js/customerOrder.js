let validation = () => {
  //Defining the form elements
var names = document.customerOrderForm.name;
var telephone = document.customerOrderForm.telephone;
var residence = document.customerOrderForm.location;
var nin = document.customerOrderForm.nin;
var conductorNumber = document.customerOrderForm.numberOfConductors;
var time = document.customerOrderForm.time;
var service = document.customerOrderForm.service;
var requestType = document.customerOrderForm.requestType;

//Regex to be used for name and phone respectively
const nameRegex = /[A-Z][a-z]* [A-Z][a-z]*( [A-Z])?/;
const phoneRegex = /(\+256)+[0-9]{9}$/;

//Constants for validating the field length of name, phone number and about me field respectively
const minName = 2;
const minPhone = 13;
const maxName = 50;

// validating the form field to ensure it has input
if (names.value == "") {
  names.focus();
  names.style.border = "2px solid red";
  alert("Please enter a name");
  return false;
}
// Ensuring the name field has more than five characters.
if (names.value.length < minName && names.value.length > maxName) {
 
  names.style.border = "2px solid red";
  alert("Please enter a valid name.");
  return false;
}
// Ensuring the name field has only a string of characters.
if (!names.value.match(nameRegex)) {
  names.focus();
  names.style.border = "2px solid red";
  alert("Please use letters only in your name");
  
  return false;
}
//Validating phone number
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
  telephone.focus();
  telephone.style.border = "2px solid red";
  alert("Please input a valid phone number starting with +256");
  
  return false;
}
//validating residence
if (residence.value == "") {
  residence.focus();
  residence.style.border = "2px solid red";
  alert("Please enter your location");
  return false;
}
//validating national Id number
if (nin.value == "") {
  nin.focus();
  nin.style.border = "2px solid red";
  alert("Please enter a nin");
  return false;
}
// validating the time input
if (time.value == "") {
  time.focus();
  time.style.border = "2px solid red";
  alert("Please enter time when you need the service");
  return false;
}
// validating the conductor input
if (conductorNumber.value == "") {
  conductorNumber.focus();
  conductorNumber.style.border = "2px solid red";
  alert("Please enter number of conductors needed");
  return false;
}
//validating the type of request
if (requestType.value == "Please Select") {
  requestType.focus();
  requestType.style.border = "2px solid red";
  alert("Please choose a type of request ");
  return false;
}
//validating the kind of service
if (service.value == "Please Select") {
  service.focus();
  service.style.border = "2px solid red";
  alert("Please choose a type of service");
  return false;
}

};






// function for setting the service fee
var s1 = document.getElementById("selectOne");
var s2 = document.getElementById("selectTwo");
var fee = document.getElementById("fee");

function populate() {
  if (s1.value == "garbage" && s2.value == "oneTime") {
    fee.value = "UGX 25,000";
  }
  else if (s1.value == "sewage" && s2.value == "oneTime") {
    fee.value = "UGX 170,000";
  }
  else if (s1.value == "allServices" && s2.value == "oneTime") {
    fee.value = "UGX 195,000";
  }
  else if (s1.value == "garbage" && s2.value == "subscription") {
    fee.value = "UGX 20,000";
  }
  else if (s1.value == "sewage" && s2.value == "subscription") {
    fee.value = "UGX 160,000";
  }
  else if (s1.value == "allServices" && s2.value == "subscription") {
    fee.value = "UGX 180,000";
  }
}
