let validation = (event) => {
  //Defining the form elements
  var code = document.truckForm.truckCode;
  var regNo = document.truckForm.truckReg;

  //Regex to be used for truck code
  const truckCodeRegex = /^[A-Z]{3}([0-9]{3})$/;
  if (code.value == "") {
    code.focus();
    code.style.border = "2px solid red";
    alert("Please input the truck code");

    return false;
  }
  if (!code.value.match(truckCodeRegex)) {
    alert("Please use a valid code");
    code.style.border = "2px solid red";
    code.focus();

    return false;
  }

  if (regNo.value == "") {
    regNo.focus();
    regNo.style.border = "2px solid red";
    alert("Please input the truck registration Number");

    return false;
  }

  event.preventDefault();
};
