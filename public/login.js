var object = document.getElementById('button');

//Handle Account Status
// firebase.auth().onAuthStateChanged(user => {
//   if(user) {
//     window.location = 'contractorDashboard.html'; //After successful login, user will be redirected to home.html
//   } else {
//     break;
//   }
// });


object.onclick = function() {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        // Sign in success
        window.location = 'contractorDashboard.html';
    }).catch(error => {
        console.error(error);
    })
}

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
