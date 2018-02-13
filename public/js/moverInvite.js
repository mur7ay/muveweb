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
var _heavyItemYes = document.getElementById('heavyItemYes');
var _heavyItemNo = document.getElementById('heavyItemNo');
var _heavyItemOther = document.getElementById('heavyItemOther');
var _heavyItemResponse = document.getElementById('heavyItemResponse');
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
var date = Date();

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
      Date_Created: date
    }).then(function() {
      // window.location.href = 'inviteConfirm.html';
    });
}
