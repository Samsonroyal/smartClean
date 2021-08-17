let validation = (event) => {
  //defining form elements
  var driver = document.respondOrderForm.driver;
  var conductor = document.respondOrderForm.conductor;
  var date = document.respondOrderForm.date;
  var truckType = document.respondOrderForm.truckType;
  var regNo = document.respondOrderForm.regNo;
  var code = document.respondOrderForm.code;
  var truckLocation = document.respondOrderForm.truckLocation;
  var destination = document.respondOrderForm.destination;

  if (driver.value == "") {
    driver.focus();
    driver.style.border = "2px solid red";
    alert("Please enter a driver");
    return false;
  }
  if (conductor.value == "") {
    conductor.focus();
    conductor.style.border = "2px solid red";
    alert("Please enter a conductor");
    return false;
  }
  if (date.value == "") {
    date.focus();
    date.style.border = "2px solid red";
    alert("Please enter a date");
    return false;
  }
  if (truckType.value == "Please Select") {
    truckType.focus();
    truckType.style.border = "2px solid red";
    alert("Please enter a truckType");
    return false;
  }
  if (regNo.value == "Please Select") {
    regNo.focus();
    regNo.style.border = "2px solid red";
    alert("Please enter a registration number");
    return false;
  }
  if (code.value == "Please Select") {
    code.focus();
    code.style.border = "2px solid red";
    alert("Please enter a truck code");
    return false;
  }
  if (truckLocation.value == "Please Select") {
    truckLocation.focus();
    truckLocation.style.border = "2px solid red";
    alert("Please enter a truck Location");
    return false;
  }
  if (destination.value == "") {
    destination.focus();
    destination.style.border = "2px solid red";
    alert("Please enter a destination");
    return false;
  }
  event.preventDefault()
};
