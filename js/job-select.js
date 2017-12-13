var formArray = [];

var checkboxArr = $('.checkbox-js');
console.log(checkboxArr);

$('.next-btn').click(function() {

	for (i = 0; i < checkboxArr.length; i++) {
		if ($(checkboxArr[i]).is(":checked")) {

			//Adds forms to formArray
			var forms = [];
			forms.push($('.' + i));

			for (j = 0; j < forms[0].length; j++) {
				if ($.inArray(forms[0][j], formArray) === -1) {
					formArray.push(forms[0][j]);
				}
			}
		}
	}

	console.log('formArray length: ' + formArray.length);
	console.log(formArray);
});

// $.inArray(forms[0][j], formArray) === -1