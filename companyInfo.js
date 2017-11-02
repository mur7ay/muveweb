var _companyName = document.getElementById('companyName');
var _companyAddress = document.getElementById('companyAddress');
var _companyDesc = document.getElementById('companyDesc');
var comName, comAddy, comDesc;

window.onload = function() {
    document.getElementById('nextBtn').onclick = function() {
        comName = _companyName.value;
        comAddy = _companyAddress.value;
        comDesc = _companyDesc.value;

        var firebaseRef = firebase.database().ref();
        firebaseRef.child("Company Info").push({
            Company_Name: comName,
            Company_Address: comAddy,
            Company_Desc: comDesc
        });
        thirdStep();
    };
};

function thirdStep() {
  window.location.href = '#';
}
