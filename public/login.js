var object = document.getElementById('button');

var cincyArr = [];
var columbusArr = [];

firebase.database().ref("Zips/Cincinnati").on('value', function(snap) {
  snap.forEach(function(childNodes) {
    cincyArr.push(childNodes.val());
  });
});

firebase.database().ref("Zips/Columbus").on('value', function(snap) {
  snap.forEach(function(childNodes) {
    columbusArr.push(childNodes.val());
  });
});

object.onclick = function() {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(user => {

    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      var zipcode = (snapshot.val().zipcode);

      if (cincyArr.indexOf(zipcode) !== -1) {
        window.location = 'contractorDashboardCincy.html';
      } else if (columbusArr.indexOf(zipcode) !== -1) {
        window.location = 'contractorDashboardColumbus.html';
      }
    });
  }).catch(error => {
    console.error(error);
  });
};


function forgotPassword() {
  var userEmail = document.getElementById('email3').value;
  firebase.auth().sendPasswordResetEmail(userEmail);
}

function logout() {
  firebase.auth().signOut().then(function() {
    window.location.replace("login.html");
  }).catch(function(error) {
    // An error happened.
  });
}
