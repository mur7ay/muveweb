var contactName = document.getElementById("contactName");
var companyName = document.getElementById("companyName");
var contactEmail = document.getElementById("email");
var date = Date();

function submit() {
  _name = contactName.value;
  _company = companyName.value;
  _email = contactEmail.value;

  var firebaseRef = firebase.database().ref();
  firebaseRef.child("MoverInvite").push({
    Name: _name,
    Company: _company,
    Email: _email,
    Date_Created: date
  }).then(function() {
    // secondStep();
  });
};


// Link to confirm page
// function secondStep() {
//   window.location.href = 'index.html';
// }
