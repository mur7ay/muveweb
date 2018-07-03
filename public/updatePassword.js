$(document).ready(function() {
  $("#updatePasswordBtn").click(function() {
    var user = firebase.auth().currentUser;
    var password = $("#updatePasswordField").val();
    var currentPassword = $("#currentPassword").val();

    const credentials = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);

    user.reauthenticateAndRetrieveDataWithCredential(credentials).then(function() {
      // User re-authenticated.
        user.updatePassword(password).then(function() {
          console.log('updated');
          alert('Password update successful');
          $('#updatePasswordField').val('');
          $('#currentPassword').val('');
        }, function(error) {
          console.log(error.message);
        });
    }).catch(function(error) {
      console.log(error.message);
    });
  });
});
