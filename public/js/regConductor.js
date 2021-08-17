

let validation = () => {
  //Defining the form elements
var names = document.conductorForm.name;
var telephone = document.conductorForm.telephone;
var dob = document.conductorForm.dob;
var residence = document.conductorForm.residence;
var nin = document.conductorForm.nin;

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
  if (dob.value == "") {
    dob.focus();
    dob.style.border = "2px solid red";
    alert("Please enter date of birth");
    return false;
  }
  if (residence.value == "") {
    residence.focus();
    residence.style.border = "2px solid red";
    alert("Please enter residence");
    return false;
  }
  if (nin.value == "") {
    nin.focus();
    nin.style.border = "2px solid red";
    alert("Please enter a nin");
    return false;
  }
  // validating nin length
if (nin.value.length < 13) {
  nin.focus();
    nin.style.border = "2px solid red";
    alert("Please enter a nin");
  return false;
}
  const today = new Date();
  const nowyear = today.getFullYear();
  const nowmonth = today.getMonth();
  const nowday = today.getDate();
  const b = document.conductorForm.dob.value;

  const birth = new Date(b);

  const birthyear = birth.getFullYear();
  const birthmonth = birth.getMonth();
  const birthday = birth.getDate();

  const age = nowyear - birthyear;
  const age_month = nowmonth - birthmonth;
  const age_day = nowday - birthday;
  if ((age == 18 && age_month <= 0 && age_day <= 0) || age < 18) {
    dob.focus();
    dob.style.border = "2px solid red";
    alert(
      "Age should be more than 18 years.Please enter a valid Date of Birth"
    );
    return false;
  }

  
  
};


