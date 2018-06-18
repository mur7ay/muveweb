$(document).ready(function() {
  let userId = -1;

  let screenWidth = $(window).width();
  let jobsArray = [];
  let i = 0;

  var element;
  var ref = firebase.database().ref('moving-requests');
  ref.on('child_added', function(snapshot) {
    var datas = snapshot.val();
    var time = snapshot.val().Scheduled_Time;
    var name = snapshot.val().Name;
    var timeDriven = snapshot.val().Time_Driven;
    var date = snapshot.val().Scheduled_Date;
    var earnings = snapshot.val().Estimated_Cost;
    var keys = snapshot.key;
    date = date.replace('.', '/');


    let partialName = name;
    let spaceInName = name.split(' ');
    let lastInitial;;

    if (spaceInName.length > 1) {
      lastInitial = spaceInName[1].split('');
      lastInitial = lastInitial[0];
      partialName = `${spaceInName[0]} ${lastInitial}.`
    }

    if (!lastInitial) {
      partialName = name;
    }


    i++;
    $('<div>', {
      id: 'available' + i,
      class: "avail-accept-jobs-div margin-bottom-twentypx"
    }).appendTo('#availableJobs');
    $('#available' + i).append('<div class="delete-job initial-hidden"><p class="text-center font-weight-bold"><b>X</b></p></div>');
    var x = document.getElementById("availableJobs");
    // console.log(x);
    $('#available' + i).append('<p class="customer-name partial-name">Name: ' + partialName + '</p>');
    $('#available' + i).append('<p class="customer-name full-name initial-hidden">Name: ' + name + '</p>');
    $('#available' + i).append('<p>Move Date: ' + date + '</p>');
    $('#available' + i).append('<p>Move Time: ' + time + '</p>');
    $('#available' + i).append('<p>Drive Time: ' + timeDriven + '</p>');
    $('#available' + i).append('<p>Potential Earnings: $' + earnings + '</p>');
    $('#available' + i).append('<p>Potential Earnings:' + keys + '</p>');
    $('#available' + i).append('<div id="' + keys + '" class="accept-job-button text-center"><p>Accept</p></div>');


    //Moves job from available to accepted
    function acceptJob() {
      console.log('Registering events');
      $('.accept-job-button').off('click').on('click', function(e) {
        var value = e.currentTarget.id;

        /*$(this).parent().appendTo('#acceptedJobs');
        $(this).parent().find('.partial-name').attr('class', 'customer-name partial-name initial-hidden');
        $(this).parent().find('.full-name').attr('class', 'customer-name full-name');
        $(this).parent().children(':first-child').attr('class', 'delete-job delete-accept-job');
        $(this).parent().append('<div class="details-job-button text-center"><p>Details</p></div>'); */

        $(this).remove();
        assignDeleteAcceptJob();
      });
    };

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
    };

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
    };

    assignDeleteAcceptJob();
  });

  // var inputt = document.getElementById("inputt");
  // var arr = [];
  //
  // var database2 = firebase.database().ref('Zips');
  // database2.on('value', function(snapshot) {
  //   // for (var key in snapshot.val()) {
  //   //   for (var item of snapshot.val()[key]['']) {
  //   //     console.log(item.Cincinnati);
  //   //   }
  //   // }
  // });
  var arr = [];

  firebase.database().ref("Zips/Cincinnati").on('value', function(snap) {
    snap.forEach(function(childNodes) {
      console.log(childNodes.val());
      arr.push(childNodes.val());
      //This loop iterates over children of user_id
      //childNodes.key is key of the children of userid such as (20170710)
      //childNodes.val().name;
      //childNodes.val().time;
      //childNodes.val().rest_time;
      //childNodes.val().interval_time;
    });
    console.log(arr);
  });


  // if (user city == cincinnati) {
  //   then show cincinnati requesting jobs
  // }


  // Listing current avaialable jobs.
  var ref = firebase.database().ref('moving-requests');
  // Current logged in user
  var user = firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var uid = user.uid;
      // var ref2 = firebase.database().ref('Providers').child("City").child("Cincinnati");
      var ref2 = firebase.database().ref('Cincinnati');

      // userId = uid;

      ref.on('value', function(snapshot) {
        console.log(snapshot.val());

        ref2.child(uid).set(snapshot.val(), function(error) {
          // bt.addEventListener("click", myScript);
        });
      });
    } else {
      // No user is signed in.
    }
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

firebase.auth().onAuthStateChanged(function(user) {
  console.log(user.uid);
});
