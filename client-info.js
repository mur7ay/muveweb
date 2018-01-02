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
}


function stairQuestion() {

  var jobForm = document.getElementById('stairs-input-form');
  var stairsArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'radio' && input.checked) {
      stairsArray.push(input.value);
    }
  })

  localStorage.setItem('stairs-selected', stairsArray);
  var jobsSelectedddd = localStorage.getItem("stairs-selected");

  all.push(jobsSelectedddd);

}


function numOfMoversQuestion() {

  var jobForm = document.getElementById('moverAmount-input-form');
  var moversArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'radio' && input.checked) {
      moversArray.push(input.value);
    }
  })

  localStorage.setItem('movers-selected', moversArray);
  var jobsSelecteddddd = localStorage.getItem("movers-selected");

  all.push(jobsSelecteddddd);

}


function pianoQuestion() {

  var jobForm = document.getElementById('typeOfPiano-input-form');
  var pianoArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'radio' && input.checked) {
      pianoArray.push(input.value);
    }
  })

  localStorage.setItem('piano-selected', pianoArray);
  var jobsSelectedddddd = localStorage.getItem("piano-selected");

  all.push(jobsSelectedddddd);

}


function assemblyQuestion() {

  var jobForm = document.getElementById('assemCount-input-form');
  var assemblyArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'radio' && input.checked) {
      assemblyArray.push(input.value);
    }
  })

  localStorage.setItem('assembly-selected', assemblyArray);
  var jobsSelecteddddddd = localStorage.getItem("assembly-selected");

  all.push(jobsSelecteddddddd);

}


function numOfAssemblersQuestion() {

  var jobForm = document.getElementById('numberOfAssemblers-input-form');
  var numOfAssemArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'radio' && input.checked) {
      numOfAssemArray.push(input.value);
    }
  })

  localStorage.setItem('assemblers-selected', numOfAssemArray);
  var jobsSelectedddddddd = localStorage.getItem("assemblers-selected");

  all.push(jobsSelectedddddddd);

}


function storePickupQuestion() {

  var jobForm = document.getElementById('storePickup-input-form');
  var storePickupArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'radio' && input.checked) {
      storePickupArray.push(input.value);
    }
  })

  localStorage.setItem('pickup-selected', storePickupArray);
  var jobsSelecteddddddddd = localStorage.getItem("pickup-selected");

  all.push(jobsSelecteddddddddd);

}


function homeTypeQuestion() {

  var jobForm = document.getElementById('typeOfHome-input-form');
  var homeTypeArray = [];

  jobForm.querySelectorAll('input').forEach(function(input) {
    if (input.type === 'radio' && input.checked) {
      homeTypeArray.push(input.value);
    }
  })

  localStorage.setItem('home-selected', homeTypeArray);
  var jobsSelectedddddddddd = localStorage.getItem("home-selected");

  all.push(jobsSelectedddddddddd);

  // Sending user data to Firebase ** Will need to move to last question in series (user contact info page) **
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("itWork").push({
    work: all
  });
}
