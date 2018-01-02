var formArray = [];
var radioBtnForms = $('.initial-hidden');
var counter = 0;

//Click event listener for #first-next-btn
$('#first-next-btn').click(function() {
	formArray = [];

	//Assigns all checkboxes to checkboxArr
	var checkboxArr = $('.checkbox-js');

		//Loops through the checkboxes and determines which are checked
		for (i = 0; i < checkboxArr.length; i++) {
			if ($(checkboxArr[i]).is(':checked')) {

				//Determines which forms needs to be displayed
				var forms = [];
				forms.push($('.' + i));

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


//Adds to select element
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

	$(this).append($('#timesWrapper'));
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


//Makes changes color of selected time
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

window.onresize = function() {
 console.log($(window).width());
}