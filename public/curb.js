var _pickupAddress = document.getElementById("address1");
var _dropoffAddress = document.getElementById("address2");
var _userName = document.getElementById('name');
var _userPhone = document.getElementById('phone');
var _userEmail = document.getElementById('email');
var _pickDateAndTime = document.getElementById('dpt');
var _numOfItems = document.getElementById('items');
var _largeItems = document.getElementById('largeItems');
// var _miles = document.getElementById('miles');
// var _time = document.getElementById('time');
var addy1, addy2, _name, _phone, largeItems, eemail, _pickupTime, _itemCount, overallMiles, overallTime;

function initialize() {
  var input = document.getElementById('address1');
  var input2 = document.getElementById('address2');
  var autocomplete = new google.maps.places.Autocomplete(input);
  var autocomplete = new google.maps.places.Autocomplete(input2);
}

google.maps.event.addDomListener(window, 'load', initialize);

document.getElementById('curbBtn').onclick = function() {

  addy1 = _pickupAddress.value;
  addy2 = _dropoffAddress.value;
  _name = _userName.value;
  _phone = _userPhone.value;
  eemail = _userEmail.value;
  _pickupTime = _pickDateAndTime.value;
  _itemCount = _numOfItems.value;
  largeItems = _largeItems.value;
  // overallMiles = _miles.value;
  // overallTime = _time.value;

  var firebaseRef = firebase.database().ref();
  firebaseRef.child("curbRequest").push({
    pickup: addy1,
    dropoff: addy2,
    name: _name,
    phone: _phone,
    pickupTime: _pickupTime,
    itemCount: _itemCount,
    email: eemail,
    large: largeItems
    // miles: overallMiles,
    // time: overallTime
  }).then(function() {
    window.location.href = 'confirmationPage.html';
  });
  // _phone = _phone.replace("-", "");
};

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
  var phoneNumb = document.getElementById('phone');
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

var map;
var source, destination;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

google.maps.event.addDomListener(window, 'load', function() {
  new google.maps.places.SearchBox(document.getElementById('address1'));
  new google.maps.places.SearchBox(document.getElementById('address2'));
  directionsDisplay = new google.maps.DirectionsRenderer({
    'draggable': true
  });
});

function GetRoute() {
  var mumbai = new google.maps.LatLng(18.9750, 72.8258);
  var mapOptions = {
    zoom: 3,
    center: mumbai,
    styles: [{
      stylers: [{
        saturation: -100
      }]
    }]
  };
  map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
  directionsDisplay.setMap(map);

  //*********DIRECTIONS AND ROUTE**********************//
  source = document.getElementById("address1").value;
  destination = document.getElementById("address2").value;

  var request = {
    origin: source,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });

  //*********DISTANCE AND DURATION**********************//
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix({
    origins: [source],
    destinations: [destination],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL,
    avoidHighways: false,
    avoidTolls: false
  }, function(response, status) {
    if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
      var distance = response.rows[0].elements[0].distance.text;
      var duration = response.rows[0].elements[0].duration.text;
      var dvMiles = document.getElementById("miles");
      var dvTime = document.getElementById("time");

      var numMiles = Number.parseInt(distance);
      var numMins = Number.parseFloat(duration);

      document.getElementById("new_text").innerHTML = 50 + numMiles + numMins + 10 + " - " + (50 + numMiles + numMins + 20);

      dvMiles.innerHTML = distance;
      dvTime.innerHTML = duration;

    } else {
      alert("Unable to find the distance via road.");
    }
  });
}

$("#address2").focusout(function() {
  $("#dv").slideDown("slow", function() {
    document.getElementById('dv').style.display = "block";
  });
});
