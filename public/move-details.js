var _nameA = document.getElementById("nameA");
var _phoneA = document.getElementById("phoneA");
var _emailA = document.getElementById("emailA");
var _jobTypeA = document.getElementById("jobTypeA");
var _numRoomsFromA = document.getElementById("numRoomsFromA");
var _numMoversA = document.getElementById("numMoversA");
var _numAssemblersA = document.getElementById("numAssemblersA");
var _numBoxesA = document.getElementById("numBoxesA");
var _instorePickupA = document.getElementById("instorePickupA");
var _numItemsMovedA = document.getElementById("numItemsMovedA");
var _numItemsAssembledA = document.getElementById("numItemsAssembledA");
var _typePianoA = document.getElementById("typePianoA");
var _loadA = document.getElementById("loadA");
var _packA = document.getElementById("packA");
var _numRoomsPackA = document.getElementById("numRoomsPackA");
var _supplySuppliesA = document.getElementById("supplySuppliesA");
var _boxesNeededA = document.getElementById("boxesNeededA");
var _homeTypeFromA = document.getElementById("homeTypeFromA");
var _pickupStairsA = document.getElementById("pickupStairsA");
var _homeTypeToA = document.getElementById("homeTypeToA");
var _dropoffStairsA = document.getElementById("dropoffStairsA");
var _miles = document.getElementById("miles");
var _time = document.getElementById("time");
var _dateConfirm = document.getElementById("dateConfirm");
var _timeConfirm = document.getElementById("timeConfirm");
var _new_text = document.getElementById("new_text");
var _new_text2 = document.getElementById("new_text2");
var _companySelected = document.getElementById("companySelected");
var _zipcodeA = document.getElementById("zipcodeA");

var pickupAddress = document.getElementById('address1');
var dropoffAddress = document.getElementById('address2');
var date = Date();

var pickup, dropoff;

$(document).ready(function () {
  // Your code

document.getElementById("furnitureBtn").onclick = function() {
  pickup = pickupAddress.value;
  dropoff = dropoffAddress.value;
  _nameA = _nameA.innerHTML;
  _zipcodeA = _zipcodeA.val;
  _phoneA = _phoneA.innerHTML;
  _emailA = _emailA.innerHTML;
  _jobTypeA = _jobTypeA.innerHTML;
  _numRoomsFromA = _numRoomsFromA.innerHTML;
  _numMoversA = _numMoversA.innerHTML;
  _numAssemblersA = _numAssemblersA.innerHTML;
  _numBoxesA = _numBoxesA.innerHTML;
  _instorePickupA = _instorePickupA.innerHTML;
  _numItemsMovedA = _numItemsMovedA.innerHTML;
  _numItemsAssembledA = _numItemsAssembledA.innerHTML;
  _typePianoA = _typePianoA.innerHTML;
  _loadA = _loadA.innerHTML;
  _packA = _packA.innerHTML;
  _numRoomsPackA = _numRoomsPackA.innerHTML;
  _supplySuppliesA = _supplySuppliesA.innerHTML;
  _boxesNeededA = _boxesNeededA.innerHTML;
  _homeTypeFromA = _homeTypeFromA.innerHTML;
  _pickupStairsA = _pickupStairsA.innerHTML;
  _homeTypeToA = _homeTypeToA.innerHTML;
  _dropoffStairsA = _dropoffStairsA.innerHTML;
  _miles = _miles.innerHTML;
  _time = _time.innerHTML;
  _dateConfirm = _dateConfirm.innerHTML;
  _timeConfirm = _timeConfirm.innerHTML;
  _new_text = _new_text.innerHTML;
  _new_text2 = _new_text2.innerHTML;
  // _companySelected = _companySelected.innerHTML;

  console.log(_nameA);
  console.log(_zipcodeA);
  
  // localStorage.setItem('jobs-selected', pickup);
  // var jobsSelected = localStorage.getItem("jobs-selected");

  var firebaseRef = firebase.database().ref();
  firebaseRef.child("moving-requests").push({
    Name: _nameA,
    Phone: _phoneA,
    Email: _emailA,
    Job_Type: _jobTypeA,
    Pickup_Room_Count: _numRoomsFromA,
    Num_Of_Movers: _numMoversA,
    Num_Of_Assemblers: _numAssemblersA,
    Num_Of_Boxes: _numBoxesA,
    Store_Pickup: _instorePickupA,
    Num_Of_Items: _numItemsMovedA,
    Assembly_Item_Count: _numItemsAssembledA,
    Piano_Type: _typePianoA,
    Load_Help: _loadA,
    Pack_Help: _packA,
    Rooms_To_Pack: _numRoomsPackA,
    Supplies_Needed: _supplySuppliesA,
    Boxes_Needed: _boxesNeededA,
    Pickup_Home_Type: _homeTypeFromA,
    Pickup_Stairs: _pickupStairsA,
    Dropoff_Home_Type: _homeTypeToA,
    Dropoff_Stairs: _dropoffStairsA,
    Distance_Driven: _miles,
    Time_Driven: _time,
    Scheduled_Date: _dateConfirm,
    Scheduled_Time: _timeConfirm,
    Estimated_Cost: _new_text,
    Muves_Fee: _new_text2,
    Company_Selected: _companySelected,
    Pickup_Address: pickup,
    Dropoff_Address: dropoff,
    Date_Created: date,
    Zip: _zipcodeA
  }).then(function() {
    // window.location.href = 'inviteConfirm.html';
  });
};
});
