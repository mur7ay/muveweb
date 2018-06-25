firebase.auth().onAuthStateChanged((user) => {

  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    // Populating the movers profile
    $('.companyName').append('<p>' + snapshot.val().businessName + '</p>');
    $('.address').append('<p>' + snapshot.val().businessAddress + '</p>');
    $('.state').append('<p>' + snapshot.val().state + '</p>');
    $('.zip').append('<p>' + snapshot.val().zipcode + '</p>');

    // Referencing the db to update user profile content.
    var db = firebase.database();
    document.getElementById('name').addEventListener('focusout', function(e) {
      var updated = document.getElementById('name').value = this.innerText;
      // Getting rid of the new line characters, twice.
      if (updated[updated.length - 1] === '\n')
        updated = updated.slice(0, -2);
      // Pushing the updated profile information to their firebase profile
      db.ref('users/' + userId).update({
        'businessName': updated
      });
    });

    document.getElementById('address').addEventListener('focusout', function(e) {
      var address = document.getElementById('address').value = this.innerText;
      // Getting rid of the new line characters, twice.
      if (address[address.length - 1] === '\n')
        address = address.slice(0, -2);
      // Pushing the updated profile information to their firebase profile
      db.ref('users/' + userId).update({
        'businessAddress': address
      });
    });

    document.getElementById('state').addEventListener('focusout', function(e) {
      var state = document.getElementById('state').value = this.innerText;
      // Getting rid of the new line characters, twice.
      if (state[state.length - 1] === '\n')
        state = state.slice(0, -2);
      // Pushing the updated profile information to their firebase profile
      db.ref('users/' + userId).update({
        'state': state
      });
    });

    document.getElementById('zip').addEventListener('focusout', function(e) {
      var zip = document.getElementById('zip').value = this.innerText;
      // Getting rid of the new line characters, twice.
      if (zip[zip.length - 1] === '\n')
        zip = zip.slice(0, -2);
      // Pushing the updated profile information to their firebase profile
      db.ref('users/' + userId).update({
        'zipcode': zip
      });
    });
  });


  if (user) {

    // user.getIdToken().then((userid) => {
    //   //Set the initial state
    //   firebase.database().ref('users').child(user.uid).set({
    //     'uid': userid,
    //     'businessName': "Muve",
    //     'streetAddress': "3327 Whispering Trees, Amelia",
    //     'city': "Cincy",
    //     'state': "Ohio",
    //     'zipcode': 45102,
    //     'productGroup': 0,
    //     'inventory': 0,
    //     'reporting_and_analytics': 0,
    //     'accounting': 0,
    //     'provider': 1,
    //     'businessAddress': "3327 Whispering Trees, Amelia"
    //   });
    // });
  }
});
