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

let jobsArray = [];
let i = 0;

var element;
var ref = firebase.database().ref('moving-requests');
ref.on('value', function(snapshot) {
  snapshot.forEach(function(child) {
    var datas = child.val();
    var time = child.val().Scheduled_Time;
    var name = child.val().Name;
    var timeDriven = child.val().Time_Driven;
    var date = child.val().Scheduled_Date;
    var earnings = child.val().Estimated_Cost;
    date = date.replace('.', '/');
    console.log(name);

    i++;
    $('<div>', {id:'available' + i, class:"avail-accept-jobs-div margin-bottom-twentypx"}).appendTo('#availableJobs');
    $('#available' + i).append('<div class="delete-job delete-avail-job"><p class="text-center font-weight-bold"><b>X</b></p></div>');
    $('#available' + i).append('<p>Name: ' + name + '</p>');
    $('#available' + i).append('<p>Move Date: ' + date + '</p>');
    $('#available' + i).append('<p>Move Time: ' + time + '</p>');
    $('#available' + i).append('<p>Drive Time: ' + timeDriven + '</p>');
    $('#available' + i).append('<p>Potential Earnings: $' + earnings + '</p>');
    $('#available' + i).append('<div class="accept-job-button text-center"><p>Accept</p></div>');

  });
});
