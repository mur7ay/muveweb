var mvrName = document.getElementById("moverName");
var mvrAddress = document.getElementById("moverAddress");
var mvrZip = document.getElementById("moverZip");
var mvrPhone = document.getElementById("moverPhone");
var mvrEmail = document.getElementById("moverEmail");
var _mvrName, _mvrAddress, _mvrZip, _mvrPhone, _mvrEmail;
var date = Date();

document.getElementById('nextBtn').onclick = function() {
  _mvrName = mvrName.value;
  _mvrAddress = mvrAddress.value;
  _mvrZip = mvrZip.value;
  _mvrEmail = mvrPhone.value;
  _mvrPhone = mvrEmail.value;

  var firebaseRef = firebase.database().ref();
  firebaseRef.child("Mover Contact Info").push({
    Name: _mvrName,
    Address: _mvrAddress,
    Zip: _mvrZip,
    Email: _mvrEmail,
    Phone: _mvrPhone,
    Date_Created: date
  }).then(function() {
    secondStep();
  });
};

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log('not logged in');
  }
});

function secondStep() {
  window.location.href = 'companyInfo.html';
}
