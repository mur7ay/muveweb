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

// vars for curb-to-curb
// var curbPickupAddress = document.getElementById('address4');
// var curbDropoffAddress = document.getElementById('address5');
// var curbUserName = document.getElementById('name3');
// var curbUserPhone = document.getElementById('phone3');
// var curbUserEmail = document.getElementById('email3');
// var curbDate = document.getElementById('date');
// var itemCount = document.getElementById('curbItemCount');
// var additionalDetails = document.getElementById('curbDetails');
// var pickupAddress, dropoffAddress, userName, userPhone, userEmail, pickupDate, curbItems, details;

// function initialize() {
//   var input = document.getElementById('address1');
//   var input2 = document.getElementById('address2');
//   var autocomplete = new google.maps.places.Autocomplete(input);
//   var autocomplete = new google.maps.places.Autocomplete(input2);
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);


// $("#buttons").click(function() {
//   alert("Clicked.");
// });

// var pathname = window.location.pathname;
//
// $("#buttons").click(function() {
//   alert("Clicked.");
//
//   $.ajax({
//     url: "http://localhost:8000/api",
//     type: "POST",
//     beforeSend: function() {
//       alert("testing");
//     },
//     success: function(result) {
//       // $("#result").html(result);
//       alert("  sss  ");
//     }
//   });
// });

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

// var total = 90
// var itemCount = 0;
//
// $('.form-contro').on('change', function() {
//   var get = $('#form-contro option:selected').val();
//   total = Number(get);
//
//   $('.text-center h2 span').html(total + " USD");
// });
//
//
// $('.form-contr').on('change', function() {
//   var get = $('#form-contr option:selected').val();
//
//   if (get === 'no') {
//     total = total - 30;
//   } else if (get === 'yes') {
//     total = total + 30;
//   }
//
//   $('.text-center h2 span').html(total + " USD");
// });

// var item;
//
// $('.assembly-items').on('change', function() {
//   var get = $('.assembly-items option:selected').val();
//
//   if (get === '1') {
//     item = 0;
//   } else if (get === '2') {
//     item = 15;
//   } else if (get === '3') {
//     item = 30;
//   } else if (get === '4') {
//     item = 40;
//   }
//
//   $('.text-center h2 span').html(total + item + " USD");
// });

// $('.instructions-available').on('change', function() {
//   var get = $('.instructions-available option:selected').val();
//
//   if (get === 'yes') {
//     total = total - 40;
//   } else if (get === 'no') {
//     total = total + 40;
//   }
//
//   $('.text-center h2 span').html(total + " USD");
// });

// $('.delivered').on('change', function() {
//   var get = $('.delivered option:selected').val();
//
//   if (get === 'no') {
//     total = total - 80;
//   } else if (get === 'yes') {
//     total = total + 80;
//   }
//
//   $('.text-center h2 span').html(total + " USD");
// });

// $('.numOfAssemblers').on('change', function() {
//   var get = $('.numOfAssemblers option:selected').val();
//
//   if (get === '1') {
//     total = total - 30;
//   } else if (get === '2') {
//     total = total + 30;
//   }
//
//   $('.text-center h2 span').html(total + " USD");
// });




var item;

$('.items').on('change', function() {
  var get = $('.items option:selected').val();

  if (get === '1') {
    item = 0;
    alert(item);
  } else if (get === '2') {
    item = 15;
    alert(item);
  } else if (get === '3') {
    item = 30;
    alert(item);
  }
  // $('.text-center h2 span').html(total + item + " USD");
});




// var map;
// var source, destination;
// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();
//
// google.maps.event.addDomListener(window, 'load', function() {
//   new google.maps.places.SearchBox(document.getElementById('address1'));
//   new google.maps.places.SearchBox(document.getElementById('address2'));
//   directionsDisplay = new google.maps.DirectionsRenderer({
//     'draggable': true
//   });
// });
//
// function GetRoute() {
//   var mumbai = new google.maps.LatLng(18.9750, 72.8258);
//   var mapOptions = {
//     zoom: 3,
//     center: mumbai,
//     styles: [{
//       stylers: [{
//         saturation: -100
//       }]
//     }]
//   };
//   map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
//   directionsDisplay.setMap(map);
//
//   //*********DIRECTIONS AND ROUTE**********************//
//   source = document.getElementById("address1").value;
//   destination = document.getElementById("address2").value;
//
//   var request = {
//     origin: source,
//     destination: destination,
//     travelMode: google.maps.TravelMode.DRIVING
//   };
//   directionsService.route(request, function(response, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//       directionsDisplay.setDirections(response);
//     }
//   });
//
//   //*********DISTANCE AND DURATION**********************//
//   var service = new google.maps.DistanceMatrixService();
//   service.getDistanceMatrix({
//     origins: [source],
//     destinations: [destination],
//     travelMode: google.maps.TravelMode.DRIVING,
//     unitSystem: google.maps.UnitSystem.IMPERIAL,
//     avoidHighways: false,
//     avoidTolls: false
//   }, function(response, status) {
//     if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
//       var distance = response.rows[0].elements[0].distance.text;
//       var duration = response.rows[0].elements[0].duration.text;
//       var dvMiles = document.getElementById("miles");
//       var dvTime = document.getElementById("time");
//
//       var numMiles = Number.parseInt(distance);
//       var numMins = Number.parseFloat(duration);
//
//       document.getElementById("new_text").innerHTML = 35 + numMiles + numMins + 40 + " - " + (35 + numMiles + numMins + 60);
//
//       dvMiles.innerHTML = distance;
//       dvTime.innerHTML = duration;
//
//     } else {
//       alert("Unable to find the distance via road.");
//     }
//   });
// }
//
// $("#address2").focusout(function() {
//   $("#dv").slideDown("slow", function() {
//     document.getElementById('dv').style.display = "block";
//   });
// });

// window.onload = function() {
//   document.getElementById('assemblyBtn').onclick = function() {
//     assemblyAddress = _dropoffAdd.value;
//     numberOfAssemblyItems = _assemblyItems.value;
//     instructionsAvail = _instructionsAvailable.value;
//     needsDelivery = _delivered.value;
//     numberOfAssemblers = _numOfAssemblers.value;
//     moreAssemblyDetails = _moreAssemblyInfo.value;
//     assemblyDate = _dat.value;
//     requestingName = _name2.value;
//     requestingCellPhone = _cellPhone.value;
//     requestingEmail = _email2.value;
//
//     // requestingCellPhone = requestingCellPhone.replace("-", "");
//
//     var firebaseRef = firebase.database().ref();
//     firebaseRef.child("assemblyRequest").push({
//       location: assemblyAddress,
//       itemCount: numberOfAssemblyItems,
//       instructions: instructionsAvail,
//       delivery: needsDelivery,
//       assemblerCount: numberOfAssemblers,
//       moreDetailers: moreAssemblyDetails,
//       date: assemblyDate,
//       name: requestingName,
//       phone: requestingCellPhone,
//       email: requestingEmail
//     }).then(function() {
//       window.location.href = 'confirmationPage.html';
//     });
//   };
// };

// window.onload = function() {
//   document.getElementById('curbBtn').onclick = function() {
//     pickupAddress = curbPickupAddress.value;
//     dropoffAddress = curbDropoffAddress.value;
//     userName = curbUserName.value;
//     userPhone = curbUserPhone.value;
//     userEmail = curbUserEmail.value;
//     pickupDate = curbDate.value;
//     curbItems = itemCount.value;
//     details = additionalDetails.value;
//
//     // requestingCellPhone = requestingCellPhone.replace("-", "");
//
//     var firebaseRef = firebase.database().ref();
//     firebaseRef.child("assemblyRequest").push({
//       pickup: pickupAddress,
//       dropoff: dropoffAddress,
//       name: userName,
//       phone: userPhone,
//       email: userEmail,
//       date: pickupDate,
//       items: curbItems,
//       details: details
//     }).then(function() {
//       window.location.href = 'confirmationPage.html';
//     });
//   };
// };

// $('#buttons').on('click', function(e) {
//   $.ajax({
//     type: 'POST',
//     url: '/testtwilio',
//     data: {
//       To: "+15137816780",
//       From: "+18886194715",
//       Body: "Ahoy! The Muve team has recieved your request and we\'ll be contacting you shortly. Thanks for choosing Muve."
//     },
//     beforeSend: function(xhr) {
//       xhr.setRequestHeader("Authorization", "Basic " + btoa(SID + ':' + Key));
//     },
//     success: function(data) {
//       console.log(data);
//     },
//     error: function(data) {
//       console.log(data);
//     }
//   });
// });
