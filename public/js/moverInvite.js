var contactName = document.getElementById("moverContactName");
var companyName = document.getElementById("moverBusinessName");
var companyPhone = document.getElementById("moverPhone");
var contactEmail = document.getElementById("moverEmail");
var date = Date();

function submit() {
  _name = contactName.value;
  _company = companyName.value;
  _phone = companyPhone.value;
  _email = contactEmail.value;

  var firebaseRef = firebase.database().ref();
  firebaseRef.child("MoverInvite").push({
    Name: _name,
    Company: _company,
    Phone: _phone,
    Email: _email,
    Date_Created: date
  });

  // .then(function() {
  //   secondStep();
  // });
};

// function secondStep() {
//   window.location.href = 'index.html';
// }
