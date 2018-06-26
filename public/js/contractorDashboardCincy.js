$(document).ready(function() {
  let userId = -1;

  let screenWidth = $(window).width();
  let i = 0;

  var element;
  // Ref the Cincinnati parent node
  var ref = firebase.database().ref('cincinnati');
  ref.on('child_added', function(snapshot) {
    var datas = snapshot.val();
    var time = snapshot.val().Scheduled_Time;
    var name = snapshot.val().Name;
    var timeDriven = snapshot.val().Time_Driven;
    var date = snapshot.val().Scheduled_Date;
    var earnings = snapshot.val().Estimated_Cost;
    var jobType = snapshot.val().Job_Type;

    var keys = snapshot.key;

    date = date.replace('.', '/');

    // console.log(snapshot.key);


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


    i++;
    var vap = 'available' + i;
    var acceptButton = 'acceptButton' + i;
    $('<div>', {
      id: vap,
      class: "avail-accept-jobs-div margin-bottom-twentypx"
    }).appendTo('#availableJobs');
    $('#' + vap).append('<div class="delete-job initial-hidden"><p class="text-center font-weight-bold"><b>X</b></p></div>');

    // Populating the available job list
    $('#' + vap).append('<p class="customer-name partial-name">Name: ' + partialName + '</p>');
    $('#' + vap).append('<p class="customer-name full-name initial-hidden">Name: ' + name + '</p>');
    $('#' + vap).append('<p>Move Date: ' + date + '</p>');
    $('#' + vap).append('<p>Move Time: ' + time + '</p>');
    $('#' + vap).append('<p>Drive Time: ' + timeDriven + '</p>');
    $('#' + vap).append('<p>Potential Earnings: $' + earnings + '</p>');
    $('#' + vap).append('<p>Job Type: ' + jobType + '</p>');
    $('#' + vap).append('<div id="' + acceptButton + '" class="accept-job-button text-center"><p>Accept</p></div>');


    // Setting the id to firebase key value on button
    // var vap = document.querySelector('div.accept-job-button').id;

    // printing out proper value
    console.log(vap);

    // Not alerting
    // $("#vap").find('accept-job-button').click(function() {
    //   alert('hi');
    // });

    firebase.auth().onAuthStateChanged((user) => {

      // getting reference to other node
      var userId2 = firebase.auth().currentUser.uid;
      var ref2 = firebase.database().ref('users/' + userId2).child('jobs');

      // setting value of first ref into new node location
      ref.on("value", function(snapshot) {
        ref2.set(snapshot.val());
      });

    });



    //Moves job from available to accepted
    function acceptJob() {
      // console.log('Registering events');
      $('.accept-job-button').off('click').on('click', function(e) {
        // var value = e.currentTarget.id;

        $(this).parent().appendTo('#acceptedJobs');
        $(this).parent().find('.partial-name').attr('class', 'customer-name partial-name initial-hidden');
        $(this).parent().find('.full-name').attr('class', 'customer-name full-name');
        $(this).parent().children(':first-child').attr('class', 'delete-job delete-accept-job');
        $(this).parent().append('<div class="details-job-button text-center"><p>Details</p></div>');

        $(this).remove();
        assignDeleteAcceptJob();
        // showJobDetails();
        alert($(this).attr('id'));
        console.log($(this).attr('id'));
      });
    }

    acceptJob();


    //Shows job details
    function jobDetails() {
      $('.details-job-button').off('click').on('click', function() {
        $(this).parent().appendTo('#acceptedJobs');
        $(this).parent().find('.partial-name').attr('class', 'customer-name partial-name initial-hidden');
        $(this).parent().find('.full-name').attr('class', 'customer-name full-name');
        $(this).parent().children(':first-child').attr('class', 'delete-job delete-accept-job');
        $(this).parent().append('<div class="details-job-button text-center"><p>Details</p></div>');
        $(this).remove();
        assignDeleteAcceptJob();
      });
    }

    acceptJob();


    //Delete from accepted job list, moves back to available jobs list
    function assignDeleteAcceptJob() {
      $('.delete-accept-job').off('click').on('click', function() {
        $(this).parent().appendTo('#availableJobs');
        $(this).parent().find('.partial-name').attr('class', 'customer-name partial-name');
        $(this).parent().find('.full-name').attr('class', 'customer-name full-name initial-hidden');
        $(this).parent().children(':first-child').attr('class', 'delete-job initial-hidden');
        $(this).parent().append('<div class="accept-job-button text-center"><p>Accept</p></div>');
        $(this).parent().find('.details-job-button').remove();
        acceptJob();
      });
    }

    assignDeleteAcceptJob();
  });





  // var arr = [];
  //
  // firebase.database().ref("Zips/Cincinnati").on('value', function(snap) {
  //   snap.forEach(function(childNodes) {
  //     console.log(childNodes.val());
  //     arr.push(childNodes.val());
  //     //This loop iterates over children of user_id
  //     //childNodes.key is key of the children of userid such as (20170710)
  //     //childNodes.val().name;
  //     //childNodes.val().time;
  //     //childNodes.val().rest_time;
  //     //childNodes.val().interval_time;
  //   });
  //   console.log(arr);
  // });



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

//Removes Job Details
// function showJobLists() {
//   $('.return-job-button').off('click').on('click', function() {
//     $('#availableTitle').removeClass('initial-hidden');
//     $('#acceptedTitle').removeClass('initial-hidden');
//     $('#availableJobs').removeClass('initial-hidden');
//     $('#acceptedJobs').removeClass('initial-hidden');
//     $(this).parent().remove();
//   });
// };

// });
