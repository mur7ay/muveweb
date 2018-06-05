$(document).ready(function() {

  // const fakeJSON1 = {
  // 	"Load_Help": "",
  // 	"Muves_Fee": "13.35",
  // 	"Name": "Shawn",
  // 	"Num_Of_Assemblers": "",
  // 	"Num_Of_Boxes": "",
  // 	"Num_Of_Items": "1",
  // 	"Num_Of_Movers": "",
  // 	"Pack_Help": "",
  // 	"Phone": "555-555-5555",
  // 	"Piano_Type": "",
  // 	"Pickup_Address": "Amelia, OH, USA",
  // 	"Pickup_Home_Type": "",
  // 	"Pickup_Room_Count": "",
  // 	"Pickup_Stairs": "",
  // 	"Dropoff_Address": "Amelia, OH, USA",
  // 	"Dropoff_Home_Type": "",
  // 	"Dropoff_Room_Count": "",
  // 	"Dropoff_Stairs": "",
  // 	"Rooms_To_Pack": "",
  // 	"Scheduled_Date": "4.18",
  // 	"Scheduled_Time": "08:00",
  // 	"Store_Pickup": "No",
  // 	"Supplies_Needed": "",
  // 	"Time_Driven": "9 mins",
  // };
  //
  // const fakeJSON2 = {
  // 	"Load_Help": "",
  // 	"Muves_Fee": "26.387",
  // 	"Name": "Evan",
  // 	"Num_Of_Assemblers": "",
  // 	"Num_Of_Boxes": "",
  // 	"Num_Of_Items": "2",
  // 	"Num_Of_Movers": "",
  // 	"Pack_Help": "",
  // 	"Phone": "666-666-666",
  // 	"Piano_Type": "",
  // 	"Pickup_Address": "Hamilton, OH, USA",
  // 	"Pickup_Home_Type": "",
  // 	"Pickup_Room_Count": "",
  // 	"Pickup_Stairs": "",
  // 	"Dropoff_Address": "Hamilton, OH, USA",
  // 	"Dropoff_Home_Type": "",
  // 	"Dropoff_Room_Count": "",
  // 	"Dropoff_Stairs": "",
  // 	"Rooms_To_Pack": "",
  // 	"Scheduled_Date": "5.02",
  // 	"Scheduled_Time": "16:30",
  // 	"Store_Pickup": "No",
  // 	"Supplies_Needed": "",
  // 	"Time_Driven": "30 mins",
  // };

  // let jobsArray = [fakeJSON1, fakeJSON2, fakeJSON3];
  // let acceptedJobsArray = [fakeJSON1, fakeJSON2, fakeJSON3]

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
    // console.log(snapshot.key);
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
    $('#available' + i).append('<p class="customer-name partial-name">Name: ' + partialName + '</p>');
    $('#available' + i).append('<p class="customer-name full-name initial-hidden">Name: ' + name + '</p>');
    $('#available' + i).append('<p>Move Date: ' + date + '</p>');
    $('#available' + i).append('<p>Move Time: ' + time + '</p>');
    $('#available' + i).append('<p>Drive Time: ' + timeDriven + '</p>');
    $('#available' + i).append('<p>Potential Earnings: $' + earnings + '</p>');
    $('#available' + i).append('<p>Potential Earnings:' + keys + '</p>');
    $('#available' + i).append('<div class="accept-job-button text-center"><p>Accept</p></div>');


    //Uses JSON data to populate list of available jobs
    // const generateAvailableJobs = (jobsArray) => {
    // 	for (i = 0; i < jobsArray.length; i++) {
    // 		$('<div>',{id:'available' + i, class:"avail-accept-jobs-div margin-bottom-twentypx"}).appendTo('#availableJobs');
    // 		$('#available' + i).append('<div class="delete-job delete-avail-job"><p class="text-center font-weight-bold"><b>X</b></p></div>');
    // 		$('#available' + i).append('<p>Name: ' + jobsArray[i].Name + '</p>');
    // 		$('#available' + i).append('<p>Move Date: ' + jobsArray[i].Scheduled_Date + '</p>');
    // 		$('#available' + i).append('<p>Move Time: ' + jobsArray[i].Scheduled_Time + '</p>');
    // 		$('#available' + i).append('<p>Drive Time: ' + jobsArray[i].Time_Driven + '</p>');
    // 		$('#available' + i).append('<div class="accept-job-button text-center"><p>Accept</p></div>');
    // 	}
    // }

    // generateAvailableJobs(jobsArray);


    //Uses JSON data to populate list of accepted jobs
    // const generateAcceptedJobs = (acceptedJobsArray) => {
    //   for (i = 0; i < acceptedJobsArray.length; i++) {
    //     $('<div>', {
    //       id: 'accepted' + i,
    //       class: "avail-accept-jobs-div margin-bottom-twentypx"
    //     }).appendTo('#acceptedJobs');
    //     $('#accepted' + i).append('<div class="delete-job delete-accept-job"><p class="text-center font-weight-bold"><b>X</b></p></div>');
    //     $('#accepted' + i).append('<p>Name: ' + acceptedJobsArray[i].Name + '</p>');
    //     $('#accepted' + i).append('<p>Move Date: ' + acceptedJobsArray[i].Scheduled_Date + '</p>');
    //     $('#accepted' + i).append('<p>Move Time: ' + acceptedJobsArray[i].Scheduled_Time + '</p>');
    //     $('#accepted' + i).append('<p>Drive Time: ' + jobsArray[i].Time_Driven + '</p>');
    //   }
    // }

    // generateAcceptedJobs(acceptedJobsArray);


    //Moves job from available to accepted
    function acceptJob() {
      $('.accept-job-button').off('click').on('click', function() {
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


    //Delete available job from the list
    // function deleteAvailJob() {
    //   $('.delete-avail-job').off('click').on('click', function() {
    //     $(this).parent().remove();
    //   });
    // };

    // deleteAvailJob()


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
        // deleteAvailJob();
      });
    };

    assignDeleteAcceptJob();
  });







  var ref = firebase.database().ref('moving-requests');
  var ref2 = firebase.database().ref('Providers').child("City").child("Cincinnati");

  var user = firebase.auth().currentUser;
  console.log(user);
  // var uid = user.uid;

  // ref.on('value', function(snapshot) {
  //   ref2.set(snapshot.val(), function(error) {
  //     ref2.child(uid).set({
  //       jobDetails: details
  //     });
  //   });
  // });

  // // copy user object
  // ref1.once("value", function(snapshot) {
  //
  //   // copy user data to new gender tree
  //   ref2.set(snapshot.val(), function(error) {
  //     if (error) {
  //       $log.info("could not copy user object." + error);
  //     } else {
  //       $log.info("user object copied successfully.");
  //
  //       // remove user object under old gender
  //       ref1.remove(onComplete);
  //     }
  //   });
  // }, function(errorObject) {
  //   $log.info("The read failed: " + errorObject.code);
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

firebase.auth().onAuthStateChanged(function(user) {
  console.log(user.uid);
});
