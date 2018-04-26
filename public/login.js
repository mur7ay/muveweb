var object = document.getElementById('button');
// var logout = document.getElementById('logoutBtn');

// var pushedRef = firebase.database().ref('/moving-requests').push({ email: email });
// console.log(pushedRef.key);


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


var element;
var ref = firebase.database().ref('moving-requests');
ref.on('value', function(snapshot) {
  snapshot.forEach(function(child) {
    var datas = child.val();
    var email = child.val().Email;
    var name = child.val().Name;
    var date = child.val().Scheduled_Date;
    date = date.replace('.', '/');

    element = document.createElement("div");
    element.appendChild(document.createTextNode(name));
    document.getElementById('parentDiv').appendChild(element);

    element = document.createElement("div");
    element.appendChild(document.createTextNode(email));
    document.getElementById('parentDiv').appendChild(element);

    element = document.createElement("div");
    element.appendChild(document.createTextNode(date));
    document.getElementById('parentDiv').appendChild(element);

    // $('#helement').append('<ul><li>' + email + ' ' + name + ' ' + date + '</li></ul>');
    // console.log(datas);
  });
});
