// vars for furniture assembly
var _dropoffAdd = document.getElementById("address3");
var _assemblyItems = document.getElementById("assembly-items");
var _instructionsAvailable = document.getElementById("instructions-available");
var _delivered = document.getElementById("delivered");
var _numOfAssemblers = document.getElementById("numOfAssemblers");
var _moreAssemblyInfo = document.getElementById("moreAssemblyInfo");
var _dat = document.getElementById("dat");
var _name2 = document.getElementById("name2");
var _cellPhone = document.getElementById("cellPhone");
var _email2 = document.getElementById("email2");
var assemblyAddress, numberOfAssemblyItems, instructionsAvail, needsDelivery, numberOfAssemblers, moreAssemblyDetails, assemblyDate, requestingName, requestingCellPhone, requestingEmail;

// Formatting the phone number as the individual types
document.getElementById('phone').addEventListener('keyup', function(evt) {
  var phoneNumber = document.getElementById('phone');
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  phoneNumber.value = phoneFormat(phoneNumber.value);
});

// Manually formatting the phone number on page load
document.getElementById('phone').value = phoneFormat(document.getElementById('phone').value);

// function to determine if the pressed key is an integer
function numberPressed(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)) {
    return false;
  }
  return true;
}

// Formatting the phone number as the individual types
document.getElementById('phone').addEventListener('keyup', function(evt) {
  var phoneNumb = document.getElementById('cellPhone');
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  phoneNumb.value = phoneFormat(phoneNumb.value);
});

// Manually formatting the phone number on page load
document.getElementById('phone').value = phoneFormat(document.getElementById('phone').value);

// function to determine if the pressed key is an integer
function numberPress(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)) {
    return false;
  }
  return true;
}

// Formatting as a phone number
function phoneFormat(input) {
  // Strip all characters from the input except digits
  input = input.replace(/\D/g, '');

  // Trim the remaining input to ten characters, to preserve phone number format
  input = input.substring(0, 10);

  // Based upon the length of the string, we add formatting as necessary
  var size = input.length;
  if (size === 0) {
    input = input;
  } else if (size < 4) {
    input = input;
  } else if (size < 7) {
    input = input.substring(0, 3) + '-' + input.substring(3, 6);
  } else {
    input = input.substring(0, 3) + '-' + input.substring(3, 6) + '-' + input.substring(6, 10);
  }
  return input;
}
