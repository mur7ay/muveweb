

// Get elements
// var uploader = document.getElementById('uploader');
// var fileButton = document.getElementById('fileButton');


// if (document.getElementById('fileButton') != null) {
//   alert("The password fields don't match");
// } else {
//   alert("It's freaking empty");
// }

// Listen for file selection
// fileButton.addEventListener('change', function(e) {
//     // Get file
//     var file = e.target.files[0];
//
//     // Create a storage reference
//     var storageRef = firebase.storage().ref('mover_docs/' + file.name);
//
//     // Upload a file
//     var task = storageRef.put(file);
//
//     // Update progress bar
//     task.on('state_changed',
//
//         function progress(snapshot) {
//             var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             uploader.value = percentage;
//         },
//
//         function error(err) {
//
//         },
//
//         function complete() {
//
//         }
//     );
//
// });
