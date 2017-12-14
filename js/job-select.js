var formArray = [];
var radioBtnForms = $('.initial-hidden');

//On-click event listener for next-btn
$('#first-next-btn').click(function() {

	//Assigns all checkboxes to checkboxArr
	var checkboxArr = $('.checkbox-js');

		//Loops through the checkboxes and determines which are checked
		for (i = 0; i < checkboxArr.length; i++) {
			if ($(checkboxArr[i]).is(":checked")) {


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

		console.log('formArray length: ' + formArray.length);
		console.log(formArray);

		// console.log('radioBtnForms length: ' + radioBtnForms.length);
		// console.log(radioBtnForms);

	if (formArray.length > 0) {
		$('#jobSelect').addClass('initial-hidden');
		$(formArray[0]).removeClass('initial-hidden');
	}
});

