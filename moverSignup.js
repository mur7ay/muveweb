var x = document.getElementById("email");
var y = document.getElementById('password');
var btnn = document.getElementById('btn');

function validateForm() {
    var f = document.getElementById('email');
    var atpos = f.value.indexOf("@");
    var dotpos = f.value.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= f.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

btnn.addEventListener('click', e => {
  const emaill = x.value;
  const pass = y.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(emaill, pass);
  promise.catch(e => console.log(e.message));
});


// document.getElementById('btn').onclick = function(e) {
//     if (document.getElementById('email') !== null && document.getElementById('password') !== null) {
//         x = document.getElementById("email").value;
//         y = document.getElementById('password').value;
//         const auth = firebase.auth();
//         const promise = auth.createUserWithEmailAndPassword(x, y);
//     } else {
//       alert("blah");
//     }
// };

function go() {
    window.location.href = 'contactInfo.html';
}

function clearForm() {
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}
