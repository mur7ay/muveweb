var contractors_name = document.getElementById('contractorName');
var contractors_phone = document.getElementById('contractorPhone');
var contractors_email = document.getElementById('contractorEmail');
var contractors_city = document.getElementById('cityName');
var age_verification = document.getElementById('ageRequirement');
var license_image = document.getElementById('licensePhoto');
var name, phone, email, city, age, license;


document.getElementById("contractorSubmit").onclick = function() {
  name = contractors_name.value;
  phone = contractors_phone.value;
  email = contractors_email.value;
  city = contractors_city.value;
  age = age_verification.value;
  license = license_image.files[0];

  var ref = firebase.storage().ref();
  // var file = document.querySelector('#photo').files[0]
  var name = (+new Date()) + '-' + license.name;
  var metadata = {
    contentType: license.type
  };
  const task = ref.child(name).put(license, metadata);
  task.then((snapshot) => {
    const url = snapshot.downloadURL;
    console.log(url);
    // document.querySelector('#someImageTagID').src = url;
  }).catch((error) => {
    console.error(error);
  });


  var firebaseRef = firebase.database().ref();
  firebaseRef.child("contractorInvite").push({
    Name: name,
    Phone: phone,
    Email: email,
    City: city,
    Age: age,
    License: license
  }).then(function() {
    window.location.href = 'inviteConfirm.html';
  });
};
