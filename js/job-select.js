var formArray = [];
var radioBtnForms = $('.initial-hidden');
var counter = 0;
var checkboxArr = [];

var homeTo = $('#homeTypeToQ');
var homeFrom = $('#homeTypeFromQ');
var stairsPickup = $('#elevatorPickUpQ');
var stairsDropOff = $('#elevatorDropOffQ');
var supplyingBoxes = $('#howManyBoxesNeededQ');

var jobTypes = ['Whole Home', 'Furniture Delivery', 'Piano', 'Curb-to-Curb', 'Assembly', 'Just Labor', 'Packing'];
var jobTypesArr = [];

//Click event listener for #first-next-btn
$('#first-next-btn').click(function() {
	formArray = [];
	jobTypesArr = [];

	//Assigns all checkboxes to checkboxArr
	checkboxArr = $('.checkbox-js');

		//Loops through the checkboxes and determines which are checked
		for (i = 0; i < checkboxArr.length; i++) {
			if ($(checkboxArr[i]).is(':checked')) {

				//Determines which forms needs to be displayed
				var forms = [];
				forms.push($('.' + i));

				//Adds job types to confirmation page
				jobTypesArr.push(jobTypes[i]);
				$('#jobTypeA').text(jobTypesArr.join(', '));

				//Pushes forms to formArray without adding duplicates
				for (j = 0; j < forms[0].length; j++) {
					if ($.inArray(forms[0][j], formArray) === -1) {
						formArray.push(forms[0][j]);
					}
				}
			}
		}
		formArray.push('#finalInfoQ');


	//Form validation
	if (formArray.length > 1) {
		$('#jobSelect').addClass('initial-hidden');
		$(formArray[counter]).removeClass('initial-hidden');
	} else {
		var currentForm = $(this).parent().parent();
		var formValidate = currentForm.find('.text-danger')
		formValidate.removeClass('initial-hidden');
	}
});


//Click event listener for .next-btn
$('.next-btn').click(function() {
	var finalAddressChanger = 0;
	var instorePickup = false;
	var laborTypeBoth = false;	
	$('#pickupAddress').removeClass('initial-hidden');
	$('#address2').attr('placeholder', 'Drop-off Address');

	//Form validation
	var currentForm = $(this).parent().parent().parent();
	var currentSelectedRB = currentForm.find(':radio').is(":checked");

	if (currentSelectedRB) {
		$(formArray[counter]).addClass('initial-hidden');
		counter++;
		$(formArray[counter]).removeClass('initial-hidden');

		//Progress bar
		var progress = Math.round((counter/formArray.length) * 100);
		$('#progressBar').width(progress + '%');
	} else {
		var formValidate = currentForm.find('.text-danger');
		formValidate.removeClass('initial-hidden');
	}

	//Removes pickup address when necessary
	if (counter === formArray.length - 1) {

		if ($('#instore1').is(':checked')) {
			instorePickup = true;
		}

		if ($('#laborType1').is(':checked')) {
			laborTypeBoth = true;
		}

		for (i = 0; i < checkboxArr.length; i++) {
			if ($(checkboxArr[i]).is(':checked')) {
				if ($(checkboxArr[i]).val() === 'whole home' || $(checkboxArr[i]).val() === 'furniture delivery' || $(checkboxArr[i]).val() === 'piano' || $(checkboxArr[i]).val() === 'curb-to-curb') {
					finalAddressChanger++;
				} else if ($(checkboxArr[i]).val() === 'assembly' && instorePickup) {
					finalAddressChanger++;
				} else if ($(checkboxArr[i]).val() === 'just labor' && laborTypeBoth) {
					finalAddressChanger++;
				}
			}
		}
				
		if (finalAddressChanger === 0) {
			$('#pickupAddress').addClass('initial-hidden');
			$('#address2').attr('placeholder', 'Address');
		}
	}
});


//Click event listener for .back-btn
$('.back-btn').click(function() {
	if (counter === 0) {
		$('#jobSelect').removeClass('initial-hidden');
		$(formArray[counter]).addClass('initial-hidden');
	} else {
		$(formArray[counter]).addClass('initial-hidden');
		counter--;
		$(formArray[counter]).removeClass('initial-hidden');

		//Progress Bar
		var progress = Math.round((counter/formArray.length) * 100);
		$('#progressBar').width(progress + '%');
	}
});


//Removes extra questions if Just Labor and only loading / only unloading are selected
$('#laborType2').click(function() {
	if ($('#laborType2').is(':checked') && formArray.length === 7 && !$('#checkbox1').is(':checked') && !$('#checkbox2').is(':checked') && !$('#checkbox3').is(':checked') && !$('#checkbox4').is(':checked') && !$('#checkbox5').is(':checked') && !$('#checkbox7').is(':checked')) {
		formArray.splice(1, 0, homeFrom);
		formArray.splice(3, 0, stairsPickup);
		formArray.splice(4, 1);
		formArray.splice(4, 1);
	}

	if ($('#laborType2').is(':checked') && formArray.length === 9 && !$('#checkbox1').is(':checked') && !$('#checkbox2').is(':checked') && !$('#checkbox3').is(':checked') && !$('#checkbox4').is(':checked') && !$('#checkbox5').is(':checked') && !$('#checkbox7').is(':checked')) {
		formArray.splice(3, 1);
		formArray.splice(4, 1);
	}
});

$('#laborType3').click(function() {
	if ($('#laborType3').is(':checked') && formArray.length === 7 && !$('#checkbox1').is(':checked') && !$('#checkbox2').is(':checked') && !$('#checkbox3').is(':checked') && !$('#checkbox4').is(':checked') && !$('#checkbox5').is(':checked') && !$('#checkbox7').is(':checked')) {
		formArray.splice(3, 0, homeTo);
		formArray.splice(5, 0, stairsDropOff);
		formArray.splice(1, 1);
		formArray.splice(3, 1);
	}

	if ($('#laborType3').is(':checked') && formArray.length === 9 && !$('#checkbox1').is(':checked') && !$('#checkbox2').is(':checked') && !$('#checkbox3').is(':checked') && !$('#checkbox4').is(':checked') && !$('#checkbox5').is(':checked') && !$('#checkbox7').is(':checked')) {
		formArray.splice(1, 1);
		formArray.splice(3, 1);
	}
});


//Removes extra questions if Packing and customer IS supplying packing supplies
$('#supplying').click(function() {
	if ($('#supplying').is(':checked') && formArray.length === 4 && !$('#checkbox1').is(':checked') && !$('#checkbox2').is(':checked') && !$('#checkbox3').is(':checked') && !$('#checkbox4').is(':checked') && !$('#checkbox5').is(':checked') && !$('#checkbox6').is(':checked')) {
		formArray.splice(3, 0, supplyingBoxes);
	}
});

$('#notSupplying').click(function() {
	if ($('#notSupplying').is(':checked') && formArray.length === 5 && !$('#checkbox1').is(':checked') && !$('#checkbox2').is(':checked') && !$('#checkbox3').is(':checked') && !$('#checkbox4').is(':checked') && !$('#checkbox5').is(':checked') && !$('#checkbox6').is(':checked')) {
		formArray.splice(3, 1);
	}
});


// Adds the dates of the current and next week to 'Choose a day' section
//Gets dates for this week
Date.prototype.GetFirstDayOfWeek = function() {
    return (new Date(this.setDate(this.getDate() - this.getDay())));
}

Date.prototype.GetLastDayOfWeek = function() {
    return (new Date(this.setDate(this.getDate() - this.getDay() + 6)));
}

var today = new Date();

var firstDayMonth = today.GetFirstDayOfWeek().getMonth() + 1;
var firstDayDate = today.GetFirstDayOfWeek().getDate();
var lastDayMonth = today.GetLastDayOfWeek().getMonth() + 1;
var lastDayDate = today.GetLastDayOfWeek().getDate();
var year = today.GetFirstDayOfWeek().getFullYear().toString();


//Gets dates for next week
var firstDayDate2 = firstDayDate.toString();
if (firstDayDate2.length === 1) {
	firstDayDate2 = '0' + firstDayDate2
}

var firstDayMonth2 = firstDayMonth.toString();
if (firstDayMonth2.length === 1) {
	firstDayMonth2 = '0' + firstDayMonth2
}

function nextWeekStart() {
    var today = new Date(year + '/' + firstDayMonth2 + '/' + firstDayDate2);
    var nextWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    return nextWeekStart;
}

function nextWeekEnd() {
    var today = new Date(year + '/' + firstDayMonth2 + '/' + firstDayDate2);
    var nextWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate()+13);
    return nextWeekEnd;
}


//Adds dates to select element
var thisWeek = firstDayMonth + '.' + firstDayDate + ' - ' + lastDayMonth + '.' + lastDayDate;
var nextWeek = (nextWeekStart().getMonth() + 1) + '.' + (nextWeekStart().getDate()) + ' - ' + (nextWeekEnd().getMonth() + 1) + '.' + (nextWeekEnd().getDate());

$('#thisWeek').text('This week (' +  thisWeek  +')');
$('#nextWeek').text('Next week (' +  nextWeek  +')');


//Changes color of selected day of the week and opens time pop-up
$('.dayOfWeek').find('input').click(function() {
	var dayOfWeek = $('.dayOfWeek').find('input');
	var dayCounter = 0;
	// var nextWeekDayCounter = 7;

	//#dateConfirm
	while ($(dayOfWeek[dayCounter]).is(':checked') === false) {
		dayCounter++;
		// nextWeekDayCounter++;
	}

	Date.prototype.dayOfWeek = function() {
    	return (new Date(this.setDate(this.getDate() - this.getDay() + dayCounter)));
	};

	function nextWeekDays() {
	    var today = new Date(year + '/' + firstDayMonth2 + '/' + firstDayDate2);
	    var nextWeekDays = new Date(today.getFullYear(), today.getMonth(), today.getDate()+ (dayCounter + 7));
	    return nextWeekDays;
	}

	if ($('#thisWeek').is(':selected')) {
		$('#dateConfirm').text(today.dayOfWeek().getMonth() + 1 + '.' + today.dayOfWeek().getDate());
	} else if ($('#nextWeek').is(':selected')) {
		$('#dateConfirm').text(nextWeekDays().getMonth() + 1 + '.' + nextWeekDays().getDate());		
	}

	for (i = 0; i < dayOfWeek.length; i++) {
		if ($(dayOfWeek[i]).is(':checked')) {
			$(dayOfWeek[i]).parent().css('background-color', '#099C6F');
		} else {
			$(dayOfWeek[i]).parent().css('background-color', '#01D06F');
		}
	}

	$(this).parent().append($('#timesWrapper'));
	$('#timesWrapper').removeClass('initial-hidden');
	$('#times').removeClass('initial-hidden');

	var windowWidth = $(window).width();
	var checkedDay = $("input[name='day']:checked").val();

	$('#times').css('top', '79px');
	if (windowWidth < 539 && windowWidth > 306 && checkedDay == 'Saturday') {
		$('#times').css('top', '149px');		
	} else if (windowWidth < 462 && checkedDay == 'Friday') {
		$('#times').css('top', '149px');	
	} else if (windowWidth < 383 && checkedDay == 'Thursday') {
		$('#times').css('top', '149px');	
	} else if (windowWidth < 307 && checkedDay == 'Wednesday') {
		$('#times').css('top', '149px');	
	} else if (windowWidth < 307 && checkedDay == 'Saturday') {
		$('#times').css('top', '219px');	
	}
});


//Makes time pop-up responsive
window.onresize = function() {
	var windowWidth = $(window).width();
	var checkedDay = $("input[name='day']:checked").val();
	$('#times').css('top', '79px');

	if (windowWidth < 539 && windowWidth > 306 && checkedDay == 'Saturday') {
		$('#times').css('top', '149px');		
	} else if (windowWidth < 462 && checkedDay == 'Friday') {
		$('#times').css('top', '149px');	
	} else if (windowWidth < 383 && checkedDay == 'Thursday') {
		$('#times').css('top', '149px');	
	} else if (windowWidth < 307 && checkedDay == 'Wednesday') {
		$('#times').css('top', '149px');	
	} else if (windowWidth < 307 && checkedDay == 'Saturday') {
		$('#times').css('top', '219px');	
	}
};


//Changes color of selected time
$('#times').find('label').click(function() {
	var allTimes = $('#times').find('input');	

	for (i = 0; i < allTimes.length; i++) {
		if ($(allTimes[i]).is(':checked')) {
			$(allTimes[i]).parent().css('background-color', '#099C6F');
			$('#timeConfirm').text($(allTimes[i]).val());
		} else {
			$(allTimes[i]).parent().css('background-color', '#01D06F');
		}
	}

	$('#timesWrapper').addClass('initial-hidden');
	$('#times').addClass('initial-hidden');
});


//Miles Driven and Drive Time layout
window.onresize = function() {
  if($(window).width() < 600) {
  	$('.calc').removeClass("col-xs-6");
  	$('.calc').addClass("col-xs-12");
  } else {
  	$('.calc').removeClass("col-xs-12");
  	$('.calc').addClass("col-xs-6");
  }
};


//Invoice number
$('#instore1').on('click', function() {
	if ($('#instore1').is(':checked')) {
		$('#invoice').slideDown('fast');
	}
});

$('#instore2').on('click', function() {
	if ($('#instore2').is(':checked')) {
		$('#invoice').slideUp('fast');
	}
});


//Confirmation