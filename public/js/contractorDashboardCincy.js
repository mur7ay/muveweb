function rejectJob(data, key) {
  var uid = firebase.auth().currentUser.uid;

  firebase.database().ref('cincinnati/' + key).set(data);
  firebase.database().ref('acceptedJobs/' + uid + '/' + key).remove();
}

function acceptJob(data, key) {
  var uid = firebase.auth().currentUser.uid;

  firebase.database().ref('cincinnati/' + key).remove();
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
  newJobEl.append('<p class="customer-name partial-name">Name: ' + partialName + '</p>');
  newJobEl.append('<p>Move Date: ' + date + '</p>');
  newJobEl.append('<p>Move Time: ' + time + '</p>');
  newJobEl.append('<p>Drive Time: ' + timeDriven + '</p>');
  newJobEl.append('<p>Potential Earnings: $' + earnings + '</p>');
  newJobEl.append('<p>Job Type: ' + jobType + '</p>');
  var acceptButtonEl = $('<div id="' + acceptButtonId + '" class="accept-job-button text-center"><p>Accept</p></div>');
  acceptButtonEl.on('click', function() {
    acceptJob(job, key)
  });
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
  rejectJobEl.on('click', function() {
    rejectJob(job, key)
  });
  newJobEl.append(rejectJobEl);

  // Populating the available job list
  newJobEl.append('<p class="customer-name full-name">Name: ' + name + '</p>');
  newJobEl.append('<p>Move Date: ' + date + '</p>');
  newJobEl.append('<p>Move Time: ' + time + '</p>');
  newJobEl.append('<p>Drive Time: ' + timeDriven + '</p>');
  newJobEl.append('<p>Potential Earnings: $' + earnings + '</p>');
  newJobEl.append('<p>Job Type: ' + jobType + '</p>');

  var acceptButtonEl = $('<div id="' + acceptButtonId + '" class="accept-job-button text-center"><p>Details</p></div>');
  acceptButtonEl.on('click', function() {
    let Name = job.Name;
    let Phone = job.Phone;
    let Scheduled_Date = job.Scheduled_Date;
    let Scheduled_Time = job.Scheduled_Time;
    let Time_Driven = job.Time_Driven;
    let Store_Pickup = job.Store_Pickup;
    let Num_Of_Movers = job.Num_Of_Movers;
    let Num_Of_Assemblers = job.Num_Of_Assemblers;
    let Num_Of_Items = job.Num_Of_Items
    let Num_Of_Boxes = job.Num_Of_Boxes;
    let Pickup_Address = job.Pickup_Address
    let Pickup_Home_Type = job.Pickup_Home_Type;
    let Pickup_Room_Count = job.Pickup_Room_Count;
    let Pickup_Stairs = job.Pickup_Stairs;
    let Dropoff_Address = job.Dropoff_Address;
    let Dropoff_Home_Type = job.Dropoff_Home_Type;
    let Dropoff_Room_Count = job.Dropoff_Room_Count;
    let Dropoff_Stairs = job.Dropoff_Stairs;
    let Pack_Help = job.Pack_Help;
    let Rooms_To_Pack = job.Rooms_To_Pack;
    let Load_Help = job.Load_Help;
    let Piano_Type = job.Piano_Type;
    let Supplies_Needed = job.Supplies_Needed;

    $('.accept-job-button').off('click').on('click', function() {
      $('#availableTitle').addClass('initial-hidden');
      $('#acceptedTitle').addClass('initial-hidden');
      $('#availableJobs').addClass('initial-hidden');
      $('#acceptedJobs').addClass('initial-hidden');
      $('#white-container').append('<div class="details-container"></div>');

      if (Name) {
        $('.details-container').append('<p style="font-size: 12px;">name</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Name + '</p>');
      }
      if (Phone) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Phone</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Phone + '</p>');
      }
      if (Scheduled_Date) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Move Date:</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Scheduled_Date + '</p>');
      }
      if (Scheduled_Time) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Move Time</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Scheduled_Time + '</p>');
      }
      if (Time_Driven) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Drive Time:</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Time_Driven + '</p>');
      }
      if (Store_Pickup) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Store Pickup:</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Store_Pickup + '</p>');
      }
      if (Num_Of_Movers) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Movers</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Num_Of_Movers + '</p>');
      }
      if (Num_Of_Assemblers) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Assemblers</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Num_Of_Assemblers + '</p>');
      }
      if (Num_Of_Items) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Items</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Num_Of_Items + '</p>');
      }
      if (Num_Of_Boxes) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Boxes</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Num_Of_Boxes + '</p>');
      }
      if (Pickup_Address) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Pickup Address</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Pickup_Address + '</p>');
      }
      if (Pickup_Home_Type) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Home Type</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Pickup_Home_Type + '</p>');
      }
      if (Pickup_Room_Count) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Room Count</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Pickup_Room_Count + '</p>');
      }
      if (Pickup_Stairs) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Stairs</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Pickup_Stairs + '</p>');
      }
      if (Dropoff_Address) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Dropoff Address</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Dropoff_Address + '</p>');
      }
      if (Dropoff_Home_Type) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Home Type</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Dropoff_Home_Type + '</p>');
      }
      if (Dropoff_Room_Count) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Room Count</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Dropoff_Room_Count + '</p>');
      }
      if (Dropoff_Stairs) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Stairs</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Dropoff_Stairs + '</p>');
      }
      if (Pack_Help) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Help Pack</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Pack_Help + '</p>');
      }
      if (Rooms_To_Pack) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Rooms to Pack</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Rooms_To_Pack + '</p>');
      }
      if (Load_Help) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Load Help</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Load_Help + '</p>');
      }
      if (Piano_Type) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Piano Type</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Piano_Type + '</p>');
      }
      if (Supplies_Needed) {
        $('.details-container').append('<p style="font-size: 12px; margin-top: 20px;">Supplies Needed</p>');
        $('.details-container').append('<p style="font-weight: 900;">' + Supplies_Needed + '</p>');
      }

      $('.details-container').append('<div class="return-job-button text-center" style="margin-top: 40px"><p>Return to List</p></div>');
      showJobLists();
    });
  });
  newJobEl.append(acceptButtonEl);

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
    var availableRef = firebase.database().ref('cincinnati');
    var acceptedRef = firebase.database().ref('acceptedJobs/' + uid);
    console.log('test');
    availableRef.on('value', function(snapshot) {
      renderAvailableJobs(snapshot.val());
    });

    acceptedRef.on('value', function(snapshot) {
      renderAcceptedJobs(snapshot.val());
    });
  });


  //Gets screen width
  const getScreenWidth = () => {
    screenWidth = $(window).width();
  }

  let showAvailableJobs = true;

  //Shows accepted jobs, hides available jobs on mobile
  const mobileAcceptJobs = () => {
    getScreenWidth();

    if (screenWidth < 768) {
      $('#availableTitle').off('click').on('click', function() {
        showAvailableJobs = true;
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
        showAvailableJobs = false;
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

  const jobsListMobile = () => {
    getScreenWidth();

    console.log($(window).width());

    if (screenWidth > 750) {
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
    } else if (screenWidth < 752 && showAvailableJobs) {
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
    } else {
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
    }
  };

  jobsListMobile();

  //Gets screen width, sets CSS for column titles
  $(window).resize(function() {
    jobsListMobile();
    mobileAvailJobs();
    mobileAcceptJobs();
  });

});


function showJobLists() {
  $('.return-job-button').off('click').on('click', function() {
    $('#availableTitle').removeClass('initial-hidden');
    $('#acceptedTitle').removeClass('initial-hidden');
    $('#availableJobs').removeClass('initial-hidden');
    $('#acceptedJobs').removeClass('initial-hidden');
    $(this).parent().remove();
  });
}
