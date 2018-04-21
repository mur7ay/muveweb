var object = document.getElementById('button');
// var logout = document.getElementById('logoutBtn');


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});


object.onclick = function() {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });
}

function forgotPassword() {
  var userEmail = document.getElementById('email3').value;
  firebase.auth().sendPasswordResetEmail(userEmail);
}

function logout() {
  firebase.auth().signOut();
}
