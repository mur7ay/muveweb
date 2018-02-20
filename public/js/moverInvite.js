var contactName = document.getElementById("contactName");
var companyName = document.getElementById("businessName");
var companyPhone = document.getElementById("phone");
var contactEmail = document.getElementById("email");
var perMileYes = document.getElementById('chargePerMileYes');
var perMileNo = document.getElementById('chargePerMileNo');
var perMileOther = document.getElementById('chargePerMileOther');
var perMileOtherAnswer = document.getElementById('chargePerMileOtherAnswer');
var ratePerMile = document.getElementById('moverRatePerMile');
var leaveFacilityCharge = document.getElementById('leaveFacility');
var fromCustomersLocation = document.getElementById('fromCustomersLocationBack');
var pickupToDropoff = document.getElementById('onlyFromPickupToDropoff');
var chargingOther = document.getElementById('chargingOther');
var _chargePerHourYes = document.getElementById('chargePerHourYes');
var _chargePerHourNo = document.getElementById('chargePerHourNo');
var _chargePerHourOther = document.getElementById('chargePerHourOther');
var _chargePerHourOtherAnswer = document.getElementById('chargePerHourOtherAnswer');
var _twoMoversTruck = document.getElementById('twoMoversTruck');
var _threeMoversTruck = document.getElementById('threeMoversTruck');
var _fourMoversTruck = document.getElementById('fourMoversTruck');
var _leavingO = document.getElementById('leavingO');
var _workBegins = document.getElementById('workBegins');
var _chargeHeavyYes = document.getElementById('chargeHeavyYes');
var _chargeHeavyNo = document.getElementById('chargeHeavyNo');
var _chargeHeavyOther = document.getElementById('chargeHeavyOther');
var _chargeHeavyOtherAnswer = document.getElementById('chargeHeavyOtherAnswer');
var _pianoCost = document.getElementById('pianoCost');
var _poolTableCost = document.getElementById('poolTableCost');
var _applianceCost = document.getElementById('applianceCost');
var _otherHeavyItemCost = document.getElementById('otherHeavyItemCost');
var _obstaclesIncludedYes = document.getElementById('obstaclesIncludedYes');
var _obstaclesIncludedNo = document.getElementById('obstaclesIncludedNo');
var _obstaclesIncludedOther = document.getElementById('obstaclesIncludedOther');
var _obstaclesIncludedOtherAnswer = document.getElementById('obstaclesIncludedOtherAnswer');
var _truckFeeYes = document.getElementById('truckFeeYes');
var _truckFeeNo = document.getElementById('truckFeeNo');
var _hourlyMinimumYes = document.getElementById('hourlyMinimumYes');
var _hourlyMinimumNo = document.getElementById('hourlyMinimumNo');
var _stairsCost = document.getElementById('stairsCost');
var _elevatorCost = document.getElementById('elevatorCost');
var _DistFromTruckCost = document.getElementById('DistFromTruckCost');
var _onTariffCost = document.getElementById('onTariffCost');
var _cargoLiabilityInsurYes = document.getElementById('cargoLiabilityInsurYes');
var _cargoLiabilityInsurNo = document.getElementById('cargoLiabilityInsurNo');
var _cargoLiabilityInsurOther = document.getElementById('cargoLiabilityInsurOther');
var _cargoLiabilityInsurOtherAnswer = document.getElementById('cargoLiabilityInsurOtherAnswer');
var _bondedYes = document.getElementById('bondedYes');
var _bondedNo = document.getElementById('bondedNo');
var _bondedOther = document.getElementById('bondedOther');
var _bondedOtherAnswer = document.getElementById('bondedOtherAnswer');
var _businessLicenseYes = document.getElementById('businessLicenseYes');
var _businessLicenseNo = document.getElementById('businessLicenseNo');
var _businessLicenseOther = document.getElementById('businessLicenseOther');
var _businessLicenseOtherAnswer = document.getElementById('businessLicenseOtherAnswer');
var _customerShouldKnow = document.getElementById('customerShouldKnow');
var _servicesShouldKnow = document.getElementById('servicesShouldKnow');
var date = Date();

// function submitContactInfo() {
//   contactName = contactName.value;
//   companyName = companyName.value;
//   companyPhone = companyPhone.value;
//   contactEmail = contactEmail.value;
//
//   var firebaseRef = firebase.database().ref();
//   firebaseRef.child("MoverInvite").push({
//     Name: contactName,
//     Company: companyName,
//     Phone: companyPhone,
//     Email: contactEmail,
//     Date_Created: date
//   }).then(function() {
//     // window.location.href = 'inviteConfirm.html';
//   });
// }

function submitForm() {
    contactName = contactName.value;
    companyName = companyName.value;
    companyPhone = companyPhone.value;
    contactEmail = contactEmail.value;
    perMileYes = perMileYes.value;
    perMileNo = perMileNo.value;
    perMileOther = perMileOther.value;
    perMileOtherAnswer = perMileOtherAnswer.value;
    ratePerMile = ratePerMile.value;
    leaveFacilityCharge = leaveFacilityCharge.value;
    fromCustomersLocation = fromCustomersLocation.value;
    pickupToDropoff = pickupToDropoff.value;
    chargingOther = chargingOther.value;
    _chargePerHourYes = _chargePerHourYes.value;
    _chargePerHourNo = _chargePerHourNo.value
    _chargePerHourOther = _chargePerHourOther.value;
    _chargePerHourOtherAnswer = _chargePerHourOtherAnswer.value;
    _twoMoversTruck = _twoMoversTruck.value;
    _threeMoversTruck = _threeMoversTruck.value;
    _fourMoversTruck = _fourMoversTruck.value;
    _leavingO = _leavingO.value;
    _workBegins = _workBegins.value;
    _chargeHeavyYes = _chargeHeavyYes.value;
    _chargeHeavyNo = _chargeHeavyNo.value;
    _chargeHeavyOther = _chargeHeavyOther.value;
    _pianoCost = _pianoCost.value;
    _poolTableCost = _poolTableCost.value;
    _applianceCost = _applianceCost.value;
    _otherHeavyItemCost = _otherHeavyItemCost.value;
    _obstaclesIncludedYes = _obstaclesIncludedYes.value;
    _obstaclesIncludedNo = _obstaclesIncludedNo.value;
    _obstaclesIncludedOther = _obstaclesIncludedOther.value;
    _obstaclesIncludedOtherAnswer = _obstaclesIncludedOtherAnswer.value;
    _truckFeeYes = _truckFeeYes.value;
    _truckFeeNo = _truckFeeNo.value;
    _hourlyMinimumYes = _hourlyMinimumYes.value;
    _hourlyMinimumNo = _hourlyMinimumNo.value;
    _stairsCost = _stairsCost.value;
    _elevatorCost = _elevatorCost.value;
    _DistFromTruckCost = _DistFromTruckCost.value;
    _onTariffCost = _onTariffCost.value;
    _cargoLiabilityInsurYes = _cargoLiabilityInsurYes.value;
    _cargoLiabilityInsurNo = _cargoLiabilityInsurNo.value;
    _cargoLiabilityInsurOther = _cargoLiabilityInsurOther.value;
    _cargoLiabilityInsurOtherAnswer = _cargoLiabilityInsurOtherAnswer.value;
    _bondedYes = _bondedYes.value;
    _bondedNo = _bondedNo.value;
    _bondedOther = _bondedOther.value;
    _bondedOtherAnswer = _bondedOtherAnswer.value;
    _businessLicenseYes = _businessLicenseYes.value;
    _businessLicenseNo = _businessLicenseNo.value;
    _businessLicenseOther = _businessLicenseOther.value;
    _businessLicenseOtherAnswer = _businessLicenseOtherAnswer.value;
    _customerShouldKnow = _customerShouldKnow.value;
    _servicesShouldKnow = _servicesShouldKnow.value;

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("MoverInvite").push({
      Name: contactName,
      Company: companyName,
      Phone: companyPhone,
      Email: contactEmail,
      Charge_Per_Mile_Yes: perMileYes,
      Charge_Per_Mile_No: perMileNo,
      Per_Mile_Other: perMileOther,
      Per_Mile_Answer: perMileOtherAnswer,
      Rate_Per_Mile: ratePerMile,
      Leaving_Facility_Charging: leaveFacilityCharge,
      From_Customers_Back: fromCustomersLocation,
      Pickup_To_Dropoff: pickupToDropoff,
      Charging_Other: chargingOther,
      Charge_Per_Hour_Y: _chargePerHourYes,
      Charge_Per_Hour_N: _chargePerHourNo,
      Charge_Per_Hour_Other: _chargePerHourOther,
      Charge_Per_Hour_Other_Answer: _chargePerHourOtherAnswer,
      Rate_For_Two_Movers: _twoMoversTruck,
      Rate_For_Three_Movers: _threeMoversTruck,
      Rate_For_Four_Movers: _fourMoversTruck,
      Charge_When_Leaving_Office: _leavingO,
      Charge_When_Arrive: _workBegins,
      Charge_Heavy_Y: _chargeHeavyYes,
      Charge_Heavy_N: _chargeHeavyNo,
      Charge_Heavy_O: _chargeHeavyOther,
      Piano_Cost: _pianoCost,
      Pooltable_Cost: _poolTableCost,
      Appliance_Cost: _applianceCost,
      Other_Item_Cost: _otherHeavyItemCost,
      Charge_For_Obstacles_Y: _obstaclesIncludedYes,
      Charge_For_Obstacles_N: _obstaclesIncludedNo,
      Obstacles_Other: _obstaclesIncludedOther,
      Obstacles_Other_Answer: _obstaclesIncludedOtherAnswer,
      Truck_Fee_Y: _truckFeeYes,
      Truck_Fee_N: _truckFeeNo,
      Hourly_Minimum_Y: _hourlyMinimumYes,
      Hourly_Minimum_N: _hourlyMinimumNo,
      Stair_Cost: _stairsCost,
      Elevator_Cost: _elevatorCost,
      Distance_From_Truck: _DistFromTruckCost,
      Tariff_Cost: _onTariffCost,
      Cargo_Insurance_Y: _cargoLiabilityInsurYes,
      Cargo_Insurance_N: _cargoLiabilityInsurNo,
      Cargo_Insurance_O: _cargoLiabilityInsurOther,
      Cargo_Insurance_A: _cargoLiabilityInsurOtherAnswer,
      Bonded_Y: _bondedYes,
      Bonded_N: _bondedNo,
      Bonded_O: _bondedOther,
      Bonded_O_Answer: _bondedOtherAnswer,
      Business_License_Y: _businessLicenseYes,
      Business_License_N: _businessLicenseNo,
      Business_License_O: _businessLicenseOther,
      Business_License_Answer: _businessLicenseOtherAnswer,
      Customer_Should_Know: _customerShouldKnow,
      Services_Should_Know: _servicesShouldKnow,
      Date_Created: date
    }).then(function() {
      // window.location.href = 'inviteConfirm.html';
    });
}
