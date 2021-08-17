function formValidation() {
  //Defining the form elements
  const names = document.conductorForm.name;
  const telephone = document.conductorForm.telephone;
  const dob = document.conductorForm.dob;
  const residence = document.conductorForm.residence;
  const nin = document.conductorForm.nin;
  
  if (myname(names, 2, 50)) {
    if (telephoneCall(telephone, 13)) {
      if (forResidence(residence)) {
        if (forNin(nin)) {
          if (forDob(dob)) {
            if (dobValidate(dob)) {
            }
          }
        }
      }
    }
  }
  return false;
}

//Regex to be used for name and phone respectively

//Constants for validating the field length of name, phone number and about me field respectively
// const minName = 2;
// const minPhone = 13;
// const maxName = 50;

// Function to validate the name field in the form
function myname(names, minName, maxName) {
  const nameRegex = /[A-Z][a-z]* [A-Z][a-z]*( [A-Z])?/;
  // validating the form field to ensure it has input
  if (names.value == "") {
    names.focus();
    names.style.border = "2px solid red";
    alert("Please enter a name");
    return false;
  } else if (names.value.length < minName && names.value.length > maxName) {
    names.focus();
    names.style.border = "2px solid red";
    alert("Please enter a valid name.");
    return false;
  }
  // Ensuring the name field has only a string of characters.
  else if (!names.value.match(nameRegex)) {
    alert("Please use letters only in your name");
    names.style.border = "2px solid red";
    return false;
  } 
  else {
    return true;
  }
}

//Validating phone number
function telephoneCall(telephone, minPhone) {
  const phoneRegex = /(\+256)+[0-9]{9}$/;
  if (telephone.value == "") {
    telephone.focus();
    telephone.style.border = "2px solid red";
    alert("Please enter your phone");
    return false;
  } else if (telephone.value.length != minPhone) {
    telephone.focus();
    telephone.style.border = "2px solid red";
    alert("Please input a correct phone number");
    return false;
  } else if (!telephone.value.match(phoneRegex)) {
    alert("Please input a valid phone number starting with +256");
    telephone.style.border = "2px solid red";
    return false;
  } 
  else {
    return true;
  }
}

//validating Date of birth

//validating residence

function forResidence(residence) {
  if (residence.value == "") {
    residence.focus();
    residence.style.border = "2px solid red";
    alert("Please enter residence");
    return false;
  }
   else {
    return true;
  }
}

//validating national Id number

function forNin(nin) {
  if (nin.value == "") {
    nin.focus();
    nin.style.border = "2px solid red";
    alert("Please enter a nin");
    return false;
  } 
  else {
    
    return true;
  }
}

function forDob(dob) {
  if (dob.value == "") {
    dob.focus();
    dob.style.border = "2px solid red";
    alert("Please enter date of birth");
    return false;
  }
   else {
    
    return true;
  }
}

// Conductor should be above 18 years old
function dobValidate(dob) {
  var today = new Date();
  var nowyear = today.getFullYear();
  var nowmonth = today.getMonth();
  var nowday = today.getDate();
  var b = dob.value;

  var birth = new Date(b);
  

  var birthyear = birth.getFullYear();
  var birthmonth = birth.getMonth();
  var birthday = birth.getDate();

  var age = nowyear - birthyear;
  var age_month = nowmonth - birthmonth;
  var age_day = nowday - birthday;

  if ((age == 18 && age_month <= 0 && age_day <= 0) || age < 18) {
    dob.focus();
    dob.style.border = "2px solid red";
    alert(
      "Age should be more than 18 years.Please enter a valid Date of Birth"
    );
    return false;
  } 
  else {
    
    return true;
  }
}



// An event Listener for the event of submitting
// document.conductorForm.addEventListener("submit", validation);

// let validation = (e) => {
//   if((myname()|| telephoneCall()||forDob()|| forResidence()||forNin()|| dobValidate(dob))==false ){
//     e.preventDefault();
//   }else{
//     alert('Form submitted');
//     return true
//   }

// };

// let formValidation = () => {

//   myname();
//   telephoneCall();
//   forDob();
//   forResidence();
//   forNin();
//   dobValidate(dob);
// };
