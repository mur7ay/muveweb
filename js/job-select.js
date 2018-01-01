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


//Changes color of selected day of the week and opens time pop-up
$('.dayOfWeek').click(function() {
	var dayOfWeek = $('.dayOfWeek').find('input');

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
		} else {
			$(allTimes[i]).parent().css('background-color', '#01D06F');
		}
	}

	$('#timesWrapper').addClass('initial-hidden');
	$('#times').addClass('initial-hidden');
});



//Adds the dates of the current and next week to 'Choose a day' section
Date.prototype.getWeek = function(start) {

    start = start || 0;
    var today = new Date(this.setHours(0, 0, 0, 0));
    var day = today.getDay() - start;
    var date = today.getDate() - day;

    var StartDate = new Date(today.setDate(date));
    var EndDate = new Date(today.setDate(date + 6));
    return [StartDate, EndDate];
}

var Dates = new Date().getWeek();
var thisWeek = (Dates[0].getMonth() + 1) + '.' + Dates[0].getDate() + ' - '+ (Dates[1].getMonth() + 1) + '.' + Dates[1].getDate();
var nextWeek = (Dates[1].getMonth() + 1) + '.' + (Dates[1].getDate() + 1) + ' - '+ (Dates[1].getMonth() + 1) + '.' + (Dates[1].getDate() + 7);

$('#thisWeek').text('This week (' +  thisWeek  +')');
$('#nextWeek').text('Next week (' +  nextWeek  +')');