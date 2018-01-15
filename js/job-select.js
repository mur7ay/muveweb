$(document).ready(function() {

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
			formArray.push('#moveDetails');

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
		if (counter === formArray.length - 2) {

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
				$('#dvMap').addClass('initial-hidden')
				$('#milesDriveTime').addClass('initial-hidden')
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


	//Adds option to hire 5 movers if moving from a 5 bedroom home
	$('#bedroom6').on('click', function() {
		if ( $('#bedroom6').is(':checked') ) {
			$('#fiveMoversDiv').removeClass('initial-hidden');
		}
	});

	$('.noFiveMovers').on('click', function() {
		if (!$('#fiveMoversDiv').hasClass('initial-hidden')) {
			$('#fiveMoversDiv').addClass('initial-hidden');
		}
	});


	//Removes option to hire 4 movers if moving from a 1 bedroom home or smaller
	$('.noFourMovers').on('click', function() {
		$('#fourMoversDiv').addClass('initial-hidden');
	});

	$('.yesFourMovers').on('click', function() {
		if ($('#fourMoversDiv').hasClass('initial-hidden'))	{	
			$('#fourMoversDiv').removeClass('initial-hidden');
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


	//Removes extra questions if Packing and customer needs/doesn't need packing supplies
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
	$('.next-btn').on('click', function() {

		//Number of bedrooms moving from
		if ($('input[name=bedroom]:checked').val() !== undefined) {
			$('.numRoomsFromA').removeClass('initial-hidden');
			$('#numRoomsFromA').text($('input[name=bedroom]:checked').parent().text());
		}

		//Number of movers
		if ($('input[name=movers]:checked').val() !== undefined) {
			$('.numMoversA').removeClass('initial-hidden');
			$('#numMoversA').text($('input[name=movers]:checked').parent().text());
		}

		//Number of assemblers
		if ($('input[name=assemblers]:checked').val() !== undefined) {
			$('.numAssemblersA').removeClass('initial-hidden');		
			$('#numAssemblersA').text($('input[name=assemblers]:checked').parent().text());
		}

		//Number of boxes
		if ($('input[name=boxes]:checked').val() !== undefined) {
			$('.numBoxesA').removeClass('initial-hidden');		
			$('#numBoxesA').text($('input[name=boxes]:checked').parent().text());
		}

		//In-store pickup
		if ($('input[name=instore]:checked').val() !== undefined) {
			$('.instorePickupA').removeClass('initial-hidden');	
			$('#instorePickupA').text($('input[name=instore]:checked').parent().text());
		}

		//Number of items to be moved
		if ($('input[name=items]:checked').val() !== undefined) {
			$('.numItemsMovedA').removeClass('initial-hidden');	
			$('#numItemsMovedA').text($('input[name=items]:checked').parent().text());
		}

		//Number of items to be assembled
		if ($('input[name=assembleItems]:checked').val() !== undefined) {
			$('.numItemsAssembledA').removeClass('initial-hidden');	
			$('#numItemsAssembledA').text($('input[name=assembleItems]:checked').parent().text());
		}

		//Type of piano
		if ($('input[name=piano]:checked').val() !== undefined) {
			$('.typePianoA').removeClass('initial-hidden');	
			$('#typePianoA').text($('input[name=piano]:checked').parent().text());
		}

		//Loading and/or unloading
		if ($('input[name=load]:checked').val() !== undefined) {
			$('.loadA').removeClass('initial-hidden');	
			$('#loadA').text($('input[name=load]:checked').parent().text());
		}

		//Packing and/or unpacking
		if ($('input[name=pack]:checked').val() !== undefined) {
			$('.packA').removeClass('initial-hidden');	
			$('#packA').text($('input[name=pack]:checked').parent().text());
		}

		//Number of rooms to pack/unpack
		if ($('input[name=roomsToPack]:checked').val() !== undefined) {
			$('.numRoomsPackA').removeClass('initial-hidden');	
			$('#numRoomsPackA').text($('input[name=roomsToPack]:checked').parent().text());
		}

		//Packer Supplying Supplies
		if ($('input[name=supply]:checked').val() !== undefined) {
			$('.supplySuppliesA').removeClass('initial-hidden');	
			$('#supplySuppliesA').text($('input[name=supply]:checked').parent().text());
		}

		//Number of boxes needed
		if ($('input[name=boxesNeeded]:checked').val() !== undefined) {
			$('.boxesNeededA').removeClass('initial-hidden');
			$('#boxesNeededA').text($('input[name=boxesNeeded]:checked').parent().text());
		}

		//At pick-up
		//Home type
		if ($('input[name=homeTypeFrom]:checked').val() !== undefined) {
			$('.homeTypeFromA').removeClass('initial-hidden');
			$('#homeTypeFromA').text($('input[name=homeTypeFrom]:checked').parent().text());		
		}

		//Stairs
		if ($('input[name=elevatorPickup]:checked').val() !== undefined) {
			$('.pickupStairsA').removeClass('initial-hidden');	
			$('#pickupStairsA').text($('input[name=elevatorPickup]:checked').parent().text());
		}

		//At drop-off
		//Home type
		if ($('input[name=homeTypeTo]:checked').val() !== undefined) {
			$('.homeTypeToA').removeClass('initial-hidden');		
			$('#homeTypeToA').text($('input[name=homeTypeTo]:checked').parent().text());
		}

		//Stairs
		if ($('input[name=elevatorDropOff]:checked').val() !== undefined) {
			$('.dropoffStairsA').removeClass('initial-hidden');		
			$('#dropoffStairsA').text($('input[name=elevatorDropOff]:checked').parent().text());
		}
	});


	//Pricing Calc Section
	var longDistancePrice = 1800;

	var durationInMinutes = () => {
	//Returns the duration of travel in minutes
		var duration = $('#time').text();
		var arr = duration.split(' ');
		var minutesArr = [];
		var durationInMinutes = 0;

		if (arr.indexOf('days') !== -1) {
			arr[arr.indexOf('days') - 1] = arr[arr.indexOf('days') - 1] * 24* 60;
		} else if (arr.indexOf('day') !== -1) {
			arr[arr.indexOf('day') - 1] = arr[arr.indexOf('day') - 1] * 24 * 60;
		}

		if (arr.indexOf('hours') !== -1) {
			arr[arr.indexOf('hours') - 1] = arr[arr.indexOf('hours') - 1] * 60;
		} else if (arr.indexOf('hour') !== -1) {
			arr[arr.indexOf('hour') - 1] = arr[arr.indexOf('hour') - 1] * 60;
		}

		if (arr.indexOf('mins') !== -1) {
			arr[arr.indexOf('mins') - 1] = parseInt(arr[arr.indexOf('mins') - 1]);
		}

		minutesArr = arr.filter(num => !isNaN(num));

		for (i = 0; i < minutesArr.length; i++) {
			durationInMinutes = durationInMinutes + minutesArr[i];
		}

		return durationInMinutes;
	}

	var milesToDrive = () => {
	//Returns the duration of travel in minutes
		var miles = parseInt($('#miles').text().replace(/,/g, ''), 10);
		return miles;
	}

	var isWeekend;
	var weekendRates = false;

	var isWeekendFunc = () => {
		isWeekend = false;
		if ($('#sunday').is(':checked') || $('#saturday').is(':checked') && (weekendRates)) {
			isWeekend = true;
		}
		return isWeekend
	}

	var getHours = movers => {
	//Returns hours of work by number of movers and number of rooms
		numBedrooms = $('input[name=movers]:checked').val();

		switch (numBedrooms) {
			case '2 bedroom home':
				switch (movers) {
					case 2:
						hours = 5;
						break;
					case 3:
						hours = 4;
						break;
					case 4:
						hours = 3;
						break;
					// case 5:
					// 	hours = ;
					// 	break;
				}
				break;
			case '3 bedroom home':
				switch (movers) {
					case 2:
						hours = 6;
						break;
					case 3:
						hours = 5;
						break;
					case 4:
						hours = 4;
						break;
					// case 5:
					// 	hours = ;
					// 	break;
				}
				break;
			case '4 bedroom home':
				switch (movers) {
					case 2:
						hours = 8;
						break;
					case 3:
						hours = 7;
						break;
					case 4:
						hours = 6;
						break;
					// case 5:
					// 	hours = ;
					// 	break;
				}
				break;
			case '5 bedroom home':
				switch (movers) {
					case 2:
						hours = 11;
						break;
					case 3:
						hours = 10;
						break;
					case 4:
						hours = 9;
						break;
					case 5:
						hours = 7;
						break;
				}
				break;
			default:
				switch (movers) {
					case 2:
						hours = 3;
						break;
					case 3:
						hours = 2;
						break;
				}

		return hours;
		}
	}


	//Whole Home vars
	var movers;
	var moversPerHour;
	var isWeekend = false;
	var weekendRates = false;
	var numBedrooms;
	var wholeHomeTotal;

	var wholeHome = () => {
	//Returns wholeHomeTotals;
		movers = parseInt($('input[name=movers]:checked').val());

		if (false) {
			switch (movers) {
				case 2:
					moversPerHour = 99;
					break;	
				case 3:
					moversPerHour = 129;
					break;
				case 4:
					moversPerHour = 149;
					break;
				case 5:
					moversPerHour = 185;
					break;
			}
		} else {
			switch (movers) {
				case 2:
					moversPerHour = 89;
					break;	
				case 3:
					moversPerHour = 119;
					break;
				case 4:
					moversPerHour = 139;
					break;
				case 5:
					moversPerHour = 175;
			}
		}

		getHours(movers);

		if (milesToDrive() > 100) {
			wholeHomeTotal = moversPerHour * hours + longDistancePrice;
		} else {
			wholeHomeTotal = moversPerHour * hours;
		}
		console.log('hours in whole home: ' + hours)
		return wholeHomeTotal;
	}


	//Furniture Delivery ane Curb-to-Curb vars
	var furnDelBase = 35;
	var furnDelTotal;

	var getFurnDelTotal = function()  {
	//Returns furnDelTotals
		if (milesToDrive() > 100) {
			furnDelTotal = furnDelBase + durationInMinutes() + milesToDrive() + longDistancePrice + 40 //for labor;
			return furnDelTotal;
		} else {
			furnDelTotal = furnDelBase + durationInMinutes() + milesToDrive() + 40 //for labor;
			return furnDelTotal;
		}
	}


	//Assembly vars
	var assemBase = 50;
	var assemPerAdditionalItem = 15;
	var perAdditionalAssembler = 15;
	var assemNumItems;
	var assemblers;
	var assemTotal;

	var assembly = () => {
	// Returns assemTotal
		assemblers = parseInt($('input[name=assemblers]:checked').val());
		assemNumItems = parseInt($('input[name=assembleItems]:checked').val());

		if (assemblers === 1 && assemNumItems === 1) {
			assemTotal = assemBase + 20;
		} else if (assemblers > 1 && assemNumItems === 1) {
			assemTotal = assemBase + ((assemblers - 1) * perAdditionalAssembler) + 20;
		} else if (assemblers === 1 && assemNumItems > 1) {
			assemTotal = assemBase + ((assemNumItems - 1) * perAdditionalAssembler) + 20;
		} else {
			assemTotal = assemBase + ((assemblers - 1) * perAdditionalAssembler) + ((assemNumItems - 1) * perAdditionalAssembler) + 20;
		}
		return assemTotal;
	}


	//Just Labor vars
	var justLaborTotal;
	var laborType;

	var justLabor = () => {
	//Returns wholeHomeTotals;
		movers = parseInt($('input[name=movers]:checked').val());
		laborType = $('input[name=load]:checked');

		if (false) {
			switch (movers) {
				case 2:
					moversPerHour = 89;
					break;	
				case 3:
					moversPerHour = 115;
					break;
				case 4:
					moversPerHour = 130;
					break;
				case 5:
					moversPerHour = 160;
					break;
			}
		} else {
			switch (movers) {
				case 2:
					moversPerHour = 79;
					break;	
				case 3:
					moversPerHour = 105;
					break;
				case 4:
					moversPerHour = 120;
					break;
				case 5:
					moversPerHour = 150;
			}
		}

		getHours(movers);

		if (laborType.hasClass('laborHalf')) {
			justLaborTotal = moversPerHour * (hours / 2);
		} else {
			justLaborTotal = moversPerHour * hours;
		}

		return justLaborTotal;
	}


	//Pricing calcs
	$('#finalNextBtn').on('click', function() {
		GetRoute();
		var total = 0;
	
		if (jobTypesArr.indexOf('Whole Home') !== -1) {
			total = total + wholeHome();
			//$('#new_text2').text((wholeHome() * .15).toFixed(2));	
		}

		if (jobTypesArr.indexOf('Assembly') !== -1) {
			total = total + assembly();
		}

		if (jobTypesArr.indexOf('Furniture Delivery') !== -1 || (jobTypesArr.indexOf('Furniture Delivery') !== -1 && jobTypesArr.indexOf('Curb-to-Curb') !== -1)) {
			total = total + getFurnDelTotal(); 
		}

		if (jobTypesArr.indexOf('Curb-to-Curb') !== -1 && jobTypesArr.indexOf('Furniture Delivery') === -1) {
			total = total + (getFurnDelTotal() - 30); 
		}

		if (jobTypesArr.indexOf('Just Labor') !== -1 && jobTypesArr.indexOf('Whole Home') === -1) {
			total = total + justLabor();
		}

		$('#new_text').text(total);
		$('#new_text2').text((total * .15).toFixed(2));
	});
});