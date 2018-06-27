function rejectJob(data, key) {
  var uid = firebase.auth().currentUser.uid;

  firebase.database().ref('columbus/' + key).set(data);
  firebase.database().ref('acceptedJobs/' + uid + '/' + key).remove();
}

function acceptJob(data, key) {
  var uid = firebase.auth().currentUser.uid;

  firebase.database().ref('columbus/' + key).remove();
  firebase.database().ref('acceptedJobs/' + uid + '/' + key).set(data);
}

function renderAvailableJob(job, key) {
  var time = job.Scheduled_Time;
  var name = job.Name;
  var timeDriven = job.Time_Driven;
  var date = job.Scheduled_Date;
  var earnings = job.Estimated_Cost;
  var jobType = job.Job_Type;

  let partialName = name;
  let spaceInName = name.split(' ');
  let lastInitial;

  if (spaceInName.length > 1) {
    lastInitial = spaceInName[1].split('');
    lastInitial = lastInitial[0];
    partialName = `${spaceInName[0]} ${lastInitial}.`
  }

  if (!lastInitial) {
    partialName = name;
  }

  var vap = 'available-' + key;
  var acceptButtonId = 'acceptButton-' + key;
  var newJobEl = $('<div>', {
    id: vap,
    class: "avail-accept-jobs-div margin-bottom-twentypx"
  });

  // Populating the available job list
  newJobEl.append('<p class="customer-name partial-name ">Name: ' + partialName + '</p>');
  newJobEl.append('<p>Move Date: ' + date + '</p>');
  newJobEl.append('<p>Move Time: ' + time + '</p>');
  newJobEl.append('<p>Drive Time: ' + timeDriven + '</p>');
  newJobEl.append('<p>Potential Earnings: $' + earnings + '</p>');
  newJobEl.append('<p>Job Type: ' + jobType + '</p>');
  var acceptButtonEl = $('<div id="' + acceptButtonId + '" class="accept-job-button text-center"><p>Accept</p></div>');
  acceptButtonEl.on('click', function() { acceptJob(job, key) });
  newJobEl.append(acceptButtonEl);


  newJobEl.appendTo('#availableJobs');
}

function renderAcceptedJob(job, key) {
  var time = job.Scheduled_Time;
  var name = job.Name;
  var timeDriven = job.Time_Driven;
  var date = job.Scheduled_Date;
  var earnings = job.Estimated_Cost;
  var jobType = job.Job_Type;

  let partialName = name;
  let spaceInName = name.split(' ');
  let lastInitial;

  if (spaceInName.length > 1) {
    lastInitial = spaceInName[1].split('');
    lastInitial = lastInitial[0];
    partialName = `${spaceInName[0]} ${lastInitial}.`
  }

  if (!lastInitial) {
    partialName = name;
  }

  var vap = 'available-' + key;
  var acceptButtonId = 'acceptButton-' + key;
  var newJobEl = $('<div>', {
    id: vap,
    class: "avail-accept-jobs-div margin-bottom-twentypx"
  });
  var rejectJobEl = $('<div class="delete-job"><p class="text-center font-weight-bold"><b>X</b></p></div>');
  rejectJobEl.on('click', function() { rejectJob(job, key) });
  newJobEl.append(rejectJobEl);

  // Populating the available job list
  newJobEl.append('<p class="customer-name full-name">Name: ' + name + '</p>');
  newJobEl.append('<p>Move Date: ' + date + '</p>');
  newJobEl.append('<p>Move Time: ' + time + '</p>');
  newJobEl.append('<p>Drive Time: ' + timeDriven + '</p>');
  newJobEl.append('<p>Potential Earnings: $' + earnings + '</p>');
  newJobEl.append('<p>Job Type: ' + jobType + '</p>');


  newJobEl.appendTo('#acceptedJobs');
}


function renderAvailableJobs(jobsObject) {
  $('#availableJobs').html('');
  Object.keys(jobsObject).forEach(function(key) {
    var job = jobsObject[key];
    renderAvailableJob(job, key);
  });
}

function renderAcceptedJobs(jobsObject) {
  $('#acceptedJobs').html('');
  Object.keys(jobsObject).forEach(function(key) {
    var job = jobsObject[key];
    renderAcceptedJob(job, key);
  });
}

$(document).ready(function() {
  firebase.auth().onAuthStateChanged(function(user) {
    var uid = user.uid;
    let screenWidth = $(window).width();
    var element;
    console.log('ready');

    // Ref the Cincinnati parent node
    var availableRef = firebase.database().ref('columbus');
    var acceptedRef = firebase.database().ref('acceptedJobs/' + uid);
    console.log('test');
    availableRef.on('value', function (snapshot) {
      renderAvailableJobs(snapshot.val());
    });

    acceptedRef.on('value', function (snapshot) {
      renderAcceptedJobs(snapshot.val());
    });
  });


  //Gets screen width
  const getScreenWidth = () => {
    screenWidth = $(window).width();
  }

  //Shows accepted jobs, hides available jobs on mobile
  const mobileAcceptJobs = () => {
    getScreenWidth();

    if (screenWidth < 768) {
      $('#availableTitle').off('click').on('click', function() {
        $('#acceptedTitle').css({
          'border-bottom': '1px solid #F1F1F1',
          'border-left': '1px solid #F1F1F1'
        });
        $('#availableTitle').css({
          'border-bottom': 'none',
          'border-right': 'none'
        });
        $('.accepted-jobs').css('display', 'none');
        $('.available-jobs').css('display', 'block');
      });
    } else {
      $('#availableTitle').off('click');
    }
  };


  //Shows available jobs, hides accepted jobs on mobile
  const mobileAvailJobs = () => {
    getScreenWidth();

    if (screenWidth < 768) {
      $('#acceptedTitle').off('click').on('click', function() {
        $('#availableTitle').css({
          'border-bottom': '1px solid #F1F1F1',
          'border-right': '1px solid #F1F1F1'
        });
        $('#acceptedTitle').css({
          'border-bottom': 'none',
          'border-left': 'none'
        });
        $('.accepted-jobs').css('display', 'block');
        $('.available-jobs').css('display', 'none');
      });
    } else {
      $('#acceptedTitle').off('click');
    }
  };

  mobileAvailJobs();
  mobileAcceptJobs();

  //Gets screen width, sets CSS for column titles
  $(window).resize(function() {
    getScreenWidth();

    if (screenWidth > 751) {
      $('#availableTitle').css({
        'border-bottom': 'none',
        'border-right': 'none'
      });
      $('#acceptedTitle').css({
        'border-bottom': 'none',
        'border-left': 'none'
      });
      $('.accepted-jobs').css('display', 'block');
      $('.available-jobs').css('display', 'block');
    } else {
      $('#availableTitle').css({
        'border-bottom': 'none',
        'border-right': 'none'
      });
      $('#acceptedTitle').css({
        'border-bottom': '1px solid #F1F1F1',
        'border-left': '1px solid #F1F1F1'
      });
      $('.accepted-jobs').css('display', 'none');
      $('.available-jobs').css('display', 'block');
    };

    mobileAvailJobs();
    mobileAcceptJobs();
  });

});

// firebase.auth().onAuthStateChanged(function(user) {
//   // console.log(user.uid);
//
//   //Displays Job Details
//   function showJobDetails() {
//     let Name = "Evan Slaton";
//     let Phone = "555-555-5555";
//     let Scheduled_Date = undefined;
//     let Scheduled_Time = undefined;
//     let Time_Driven = undefined;
//     let Store_Pickup = undefined;
//     let Num_Of_Movers = undefined;
//     let Num_Of_Assemblers = undefined;
//     let Num_Of_Items = undefined;
//     let Num_Of_Boxes = undefined;
//     let Pickup_Address = undefined;
//     let Pickup_Home_Type = undefined;
//     let Pickup_Room_Count = undefined;
//     let Pickup_Stairs = undefined;
//     let Dropoff_Address = undefined;
//     let Dropoff_Home_Type = undefined;
//     let Dropoff_Room_Count = undefined;
//     let Dropoff_Stairs = undefined;
//     let Pack_Help = undefined;
//     let Rooms_To_Pack = undefined;
//     let Load_Help = undefined;
//     let Piano_Type = undefined;
//     let Supplies_Needed = '50,000 didgeridoos';
//
//     $('.details-job-button').off('click').on('click', function() {
//       $('#availableTitle').addClass('initial-hidden');
//       $('#acceptedTitle').addClass('initial-hidden');
//       $('#availableJobs').addClass('initial-hidden');
//       $('#acceptedJobs').addClass('initial-hidden');
//       $('#white-container').append('<div class="details-container"></div>');
//
//       if (Name) {
//         $('.details-container').append('<p>Name: ' + Name + '</p>');
//       }
//       if (Phone) {
//         $('.details-container').append('<p>Phone: ' + Phone + '</p>');
//       }
//       if (Scheduled_Date) {
//         $('.details-container').append('<p>Move Date: ' + Scheduled_Date + '</p>');
//       }
//       if (Scheduled_Time) {
//         $('.details-container').append('<p>Move Time: ' + Scheduled_Time + '</p>');
//       }
//       if (Time_Driven) {
//         $('.details-container').append('<p>Drive Time: ' + Time_Driven + '</p>');
//       }
//       if (Store_Pickup) {
//         $('.details-container').append('<p>Store Pickup: ' + Store_Pickup + '</p>');
//       }
//       if (Num_Of_Movers) {
//         $('.details-container').append('<p>Movers: ' + Num_Of_Movers + '</p>');
//       }
//       if (Num_Of_Assemblers) {
//         $('.details-container').append('<p>Assemblers: ' + Num_Of_Assemblers + '</p>');
//       }
//       if (Num_Of_Items) {
//         $('.details-container').append('<p>Items: ' + Num_Of_Items + '</p>');
//       }
//       if (Num_Of_Boxes) {
//         $('.details-container').append('<p>Boxes: ' + Num_Of_Boxes + '</p>');
//       }
//       if (Pickup_Address) {
//         $('.details-container').append('<p>Pickup Address: ' + Pickup_Address + '</p>');
//       }
//       if (Pickup_Home_Type) {
//         $('.details-container').append('<p>Home Type: ' + Pickup_Home_Type + '</p>');
//       }
//       if (Pickup_Room_Count) {
//         $('.details-container').append('<p>Room Count: ' + Pickup_Room_Count + '</p>');
//       }
//       if (Pickup_Stairs) {
//         $('.details-container').append('<p>Stairs: ' + Pickup_Stairs + '</p>');
//       }
//       if (Dropoff_Address) {
//         $('.details-container').append('<p>Dropoff Address: ' + Dropoff_Address + '</p>');
//       }
//       if (Dropoff_Home_Type) {
//         $('.details-container').append('<p>Home Type: ' + Dropoff_Home_Type + '</p>');
//       }
//       if (Dropoff_Room_Count) {
//         $('.details-container').append('<p>Room Count: ' + Dropoff_Room_Count + '</p>');
//       }
//       if (Dropoff_Stairs) {
//         $('.details-container').append('<p>Stairs: ' + Dropoff_Stairs + '</p>');
//       }
//       if (Pack_Help) {
//         $('.details-container').append('<p>Help Pack: ' + Pack_Help + '</p>');
//       }
//       if (Rooms_To_Pack) {
//         $('.details-container').append('<p>Rooms to Pack: ' + Rooms_To_Pack + '</p>');
//       }
//       if (Load_Help) {
//         $('.details-container').append('<p>Load Help: ' + Load_Help + '</p>');
//       }
//       if (Piano_Type) {
//         $('.details-container').append('<p>Piano Type: ' + Piano_Type + '</p>');
//       }
//       if (Supplies_Needed) {
//         $('.details-container').append('<p>Supplies Needed: ' + Supplies_Needed + '</p>');
//       }
//
//       $('.details-container').append('<div class="return-job-button text-center"><p>Return to List</p></div>');
//       showJobLists();
//     });
//   };

// });
