$(document).ready(function() {

	let formsArr = [];
	let counter = 0;

	formsArr.push($('.mover-form'));

	$('#moverInviteStart').on('click', function() {
		$(this).parent().addClass('initial-hidden');
		$('#contactInfoQ').removeClass('initial-hidden');
		counter++;
	});


	$('.next-btn').on('click', function() {
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





