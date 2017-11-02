var _price = document.getElementById('price');

// doesn't point to the root but instead
var ref = firebase.database().ref().child("Company Info");

ref.on("child_added", snap => {
  var companyName = snap.child("Company_Name").val();
  var companyDesc = snap.child("Company_Desc").val();
  var companyAddress = snap.child("Company_Address").val();

  $("#price").append("<h3>" + companyName + "</h3>");
  $("#price").append("<h4>" + companyDesc + "</h4>");
  $("#price").append("<h5>" + companyAddress + "</h5>");

  // for (var i = 0; i < companyName; i++) {
  //   $("#price").append("<h3>" + companyName + "</h3>");
  //   $("#price").append("<h4>" + companyDesc + "</h4>");
  //   $("#price").append("<h5>" + companyAddress + "</h5>");
  // }
  // $("#price").append(companyName);
   console.log(snap.val());
}, function (error) {
   console.log("Error: " + error.code);
});
