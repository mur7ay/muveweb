$(document).ready(function() {

	let formsArr = [];
	let counter = 0;

	formsArr.push($('.mover-form'));

	$('#moverInviteStart').on('click', function() {
		$(this).parent().addClass('initial-hidden');
		$('#contactInfoQ').removeClass('initial-hidden');
		counter++;
	});

	// Email validation function
	function validateEmail(email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
		return  (email.length > 0 && emailReg.test(email));
	};

	//Name validation function
	function validateName(name) {
		// if (name.split(' ').length < 2) {
		// 	return false;
		// }
		var nameReg = /^[a-zA-Z ,.'-]+$/;
		return  (name.length > 0 && nameReg.test(name));
	};

	//Name validation function
	function validateBusinessName(name) {
		// if (name.split(' ').length < 2) {
		// 	return false;
		// }
		var nameReg = /^[a-zA-Z0-9\& ,.'-]+$/;
		return  (name.length > 0 && nameReg.test(name));
	};

	$('.next-btn').on('click', function() {
		if (!$('#contactInfoQ').hasClass('initial-hidden')) {
			var currentForm = $(this).parent().parent().parent();

			// Validates email
			if (!validateEmail($('#email').val())) {
				var formValidate = currentForm.find('.text-danger');
				formValidate.removeClass('initial-hidden');
				return false;
			}

			//Validates name
			if (!validateName($('#contactName').val())) {
				var formValidate = currentForm.find('.text-danger');
				formValidate.removeClass('initial-hidden');
				return false;
			}

			// Validates phone length
			if ($('#phone').val().length !== 12) {
				var formValidate = currentForm.find('.text-danger');
				formValidate.removeClass('initial-hidden');
				return false;
			}

			// Validates business name
			if (!validateBusinessName($('#businessName').val())) {
				var formValidate = currentForm.find('.text-danger');
				formValidate.removeClass('initial-hidden');
				return false;
			}
		}

		$(formsArr[0][counter]).addClass('initial-hidden');
		counter++;
		$(formsArr[0][counter]).removeClass('initial-hidden');

		if (counter === formsArr[0].length) {
			$('#moverInviteConfirm').removeClass('initial-hidden');
		}

		progressBar();
	});

	$('.back-btn').on('click', function() {
		$(formsArr[0][counter]).addClass('initial-hidden');
		counter--;
		$(formsArr[0][counter]).removeClass('initial-hidden');
		
		progressBar();
	});


	var progressBar = () => {
		let progress = Math.round((counter/formsArr[0].length) * 100);
		$('#progressBar').width(progress + '%');
	};
});





