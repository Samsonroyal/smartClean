const validation = (event) => {
  //Defining the form elements
var names = document.driverForm.name;
var telephone = document.driverForm.telephone;
var dob = document.driverForm.dob;
var residence = document.driverForm.residence;
var nin = document.driverForm.nin;
var licenseNumber = document.driverForm.licenseNumber;
var fileUpload = document.driverForm.fileUpload;

 // validating the form field to ensure it has input
 if (names.value == "") {
  names.focus();
  names.style.border = "2px solid red";
  alert("Please enter a name");
  return false;
}
const minName = 2;
const maxName = 50;
 // Ensuring the name field has more than five characters.
 if (names.value.length < minName && names.value.length > maxName) {
  names.focus();
  names.style.border = "2px solid red";
  alert("Please enter a valid name.");
  return false;
}
//Regex to be used for name 
const nameRegex = /[A-Z][a-z]* [A-Z][a-z]*( [A-Z])?/;
if (!names.value.match(nameRegex)) {
  
  alert("Please use letters only in your name");
  names.style.border = "2px solid red";
  return false;
}
//Validating phone number
if (telephone.value == "") {
  telephone.focus();
  telephone.style.border = "2px solid red";
  alert("Please enter your phone");
  return false;
}
const minPhone = 13;
if (telephone.value.length != minPhone) {
  telephone.focus();
  telephone.style.border = "2px solid red";
  alert("Please input a correct phone number");
  return false;
}
//Regex to be used for phone
const phoneRegex = /(\+256)+[0-9]{9}$/;
if (!telephone.value.match(phoneRegex)) {
  
  alert("Please input a valid phone number starting with +256");
  telephone.style.border = "2px solid red";
  return false;
}
//validating Date of birth
if (dob.value == "") {
  dob.focus();
  dob.style.border = "2px solid red";
  alert("Please enter date of birth");
  return false;
}
// validating age to be more than 30years
var today = new Date();
  var nowyear = today.getFullYear();
  var nowmonth = today.getMonth();
  var nowday = today.getDate();
  var b = document.driverForm.dob.value;

  var birth = new Date(b);

  var birthyear = birth.getFullYear();
  var birthmonth = birth.getMonth();
  var birthday = birth.getDate();

  var age = nowyear - birthyear;
  var age_month = nowmonth - birthmonth;
  var age_day = nowday - birthday;

  if ((age == 30 && age_month <= 0 && age_day <= 0) || age < 30) {
    dob.focus();
    dob.style.border = "2px solid red";
    alert(
      "Age should be more than 30 years.Please enter a valid Date of Birth"
    );
    return false;
  }
//validating residence
if (residence.value == "") {
  residence.focus();
  residence.style.border = "2px solid red";
  alert("Please enter residence");
  return false;
}
//validating national Id number
if (nin.value == "") {
  nin.focus();
  nin.style.border = "2px solid red";
  alert("Please enter a nin");
  return false;
}
// validating the license number
if (licenseNumber.value == "") {
  licenseNumber.focus();
  licenseNumber.style.border = "2px solid red";
  alert("Please enter license number");
  return false;
}
// validating the upload file input
if (fileUpload.value == "") {
  fileUpload.focus();
  fileUpload.style.border = "2px solid red";
  alert("Please attach a police letter");
  return false;
}


  event.preventDefault()
};









// //driver should be above 30 years
// function dobValidate(birth) {
  
// }
// // function calling all the other functions


// // An event Listener for the event of submitting
// document.driverForm.addEventListener("submit", validation);
