// var all = [];
var date = Date();

var pickupAddress = document.getElementById('address1');
var dropoffAddress = document.getElementById('address2');
var pickup, dropoff;

function jobType() {

  pickup = pickupAddress.value;

  localStorage.setItem('jobs-selected', pickup);
  var jobsSelected = localStorage.getItem("jobs-selected");

  /* Delete before going live - Testing purposes */
  // if ("jobs-selected" in localStorage) {
  //   alert('yes');
  // } else {
  //   alert('no');
  // }

  var firebaseRef = firebase.database().ref();
  firebaseRef.child("Work").push({
    addy: pickup,
    drop: date
  });
}


// function homeTypeQuestion() {
//
//   var jobForm = document.getElementById('typeOfHome-input-form');
//   var homeTypeArray = [];
//
//   jobForm.querySelectorAll('input').forEach(function(input) {
//     if (input.type === 'radio' && input.checked) {
//       homeTypeArray.push(input.value);
//     }
//   })
//
//   localStorage.setItem('home-selected', homeTypeArray);
//   var jobsSelectedddddddddd = localStorage.getItem("home-selected");
//
//   all.push(jobsSelectedddddddddd);
//
//   // Sending user data to Firebase ** Will need to move to last question in series (user contact info page) **
//   var firebaseRef = firebase.database().ref();
//   firebaseRef.child("itWork").push({
//     work: all,
//     date: date
//   });
// }


// function bedroomQuestion() {
//
//   var jobForm = document.getElementById('bedroom-input-form');
//   var bedroomArray = [];
//
//   jobForm.querySelectorAll('input').forEach(function(input) {
//     if (input.type === 'radio' && input.checked) {
//       bedroomArray.push(input.value);
//     }
//   })
//
//   console.log(bedroomArray) /* Delete - Testing purposes */
//
//   localStorage.setItem('bedroom-selected', bedroomArray);
//   var jobsSelectedd = localStorage.getItem("bedroom-selected");
//
//   all.push(jobsSelectedd);
//
//   console.log(jobsSelectedd); /* Delete - Testing purposes */
//
//   /* Delete before going live - Testing purposes */
//   if ("bedroom-selected" in localStorage) {
//     alert('yes');
//   } else {
//     alert('no');
//   }
//
// }


// function homeTypeQuestion() {
//
//   var jobForm = document.getElementById('typeOfHome-input-form');
//   var homeTypeArray = [];
//
//   jobForm.querySelectorAll('input').forEach(function(input) {
//     if (input.type === 'radio' && input.checked) {
//       homeTypeArray.push(input.value);
//     }
//   })
//
//   localStorage.setItem('home-selected', homeTypeArray);
//   var jobsSelectedddddddddd = localStorage.getItem("home-selected");
//
//   all.push(jobsSelectedddddddddd);
//
//   // Sending user data to Firebase ** Will need to move to last question in series (user contact info page) **
//   var firebaseRef = firebase.database().ref();
//   firebaseRef.child("itWork").push({
//     work: all,
//     date: date
//   });
// }
