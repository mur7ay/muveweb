var _zipcode = document.getElementById('zipcode');
var _zipcodeBtn = document.getElementById('zipcode-button');
var zipcode_list = ['45102', '45103'];

_zipcodeBtn.onclick = function(){
  var hi = _zipcode.value;

  for (var i = 0; i < zipcode_list.length; i++) {
    if (zipcode_list[i] === hi) {
      alert('hi');
    } else {
      alert("not available");
    }
    // zipcode_list[i]
  }
  // console.log(hi);
};
