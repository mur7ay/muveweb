$(document).ready(function() {

  var userZip = document.getElementById('zipInput');
  var btn = document.getElementById('first-next-btn');

  var cincyZips = [];
  var columbusZips = [];

  // Populating Cincinnati Zipcodes
  firebase.database().ref("Zips/Cincinnati").on('value', function(snap) {
    snap.forEach(function(childNodes) {
      console.log(childNodes.val());
      cincyZips.push(childNodes.val());
    });
    console.log(cincyZips);
  });

  // Populating Columbus zipcodes
  firebase.database().ref("Zips/Columbus").on('value', function(snap) {
    snap.forEach(function(childNodes) {
      console.log(childNodes.val());
      columbusZips.push(childNodes.val());
    });
    console.log(columbusZips);
  });

  // Re-routing
  function clickedd() {
    var lip = Number(userZip.value);

    if (cincyZips.indexOf(lip) !== -1) {
      console.log('cincy');
      location.href = "cincinnatiRequesting.html";
    } else if (columbusZips.indexOf(lip) !== -1) {
      console.log('columbus');
      location.href = "columbusRequesting.html";
    }
  }
  btn.addEventListener("click", clickedd);
});
