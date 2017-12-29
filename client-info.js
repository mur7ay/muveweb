var all = [];

function jobType() {

  var jobForm = document.getElementById('job-input-form');
  var jobArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'checkbox' && input.checked) {
      jobArray.push(input.value);
    }
  })

  console.log(jobArray) /* Delete - Testing purposes */

  localStorage.setItem('jobs-selected', jobArray);
  var jobsSelected = localStorage.getItem("jobs-selected");

  all.push(jobsSelected);

  console.log(jobsSelected); /* Delete - Testing purposes */

  /* Delete before going live - Testing purposes */
  if ("jobs-selected" in localStorage) {
    alert('yes');
  } else {
    alert('no');
  }
}


function bedroomQuestion() {

  var jobForm = document.getElementById('bedroom-input-form');
  var bedroomArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'radio' && input.checked) {
      bedroomArray.push(input.value);
    }
  })

  console.log(bedroomArray) /* Delete - Testing purposes */

  localStorage.setItem('bedroom-selected', bedroomArray);
  var jobsSelectedd = localStorage.getItem("bedroom-selected");

  all.push(jobsSelectedd);

  console.log(jobsSelectedd); /* Delete - Testing purposes */

  /* Delete before going live - Testing purposes */
  if ("bedroom-selected" in localStorage) {
    alert('yes');
  } else {
    alert('no');
  }

}


function boxQuestion() {

  var jobForm = document.getElementById('boxes-input-form');
  var boxesArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'radio' && input.checked) {
      boxesArray.push(input.value);
    }
  })

  console.log(boxesArray) /* Delete - Testing purposes */

  localStorage.setItem('boxes-selected', boxesArray);
  var jobsSelecteddd = localStorage.getItem("boxes-selected");

  all.push(jobsSelecteddd);

  console.log(jobsSelecteddd); /* Delete - Testing purposes */

  /* Delete before going live - Testing purposes */
  if ("boxes-selected" in localStorage) {
    alert('yes');
  } else {
    alert('no');
  }

  // Sending user data to Firebase ** Will need to move to last question in series (user contact info page) **
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("itWork").push({
    work: all
  });
}
