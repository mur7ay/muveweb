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
  //
  // const fakeJSON3 = {
  // 	"Load_Help": "",
  // 	"Muves_Fee": "15.01",
  // 	"Name": "Joe",
  // 	"Num_Of_Assemblers": "",
  // 	"Num_Of_Boxes": "",
  // 	"Num_Of_Items": "1",
  // 	"Num_Of_Movers": "",
  // 	"Pack_Help": "",
  // 	"Phone": "777-777-7777",
  // 	"Piano_Type": "",
  // 	"Pickup_Address": "Blue Ash, OH, USA",
  // 	"Pickup_Home_Type": "",
  // 	"Pickup_Room_Count": "",
  // 	"Pickup_Stairs": "",
  // 	"Dropoff_Address": "Blue Ash, OH, USA",
  // 	"Dropoff_Home_Type": "",
  // 	"Dropoff_Room_Count": "",
  // 	"Dropoff_Stairs": "",
  // 	"Rooms_To_Pack": "",
  // 	"Scheduled_Date": "5.05",
  // 	"Scheduled_Time": "15:00",
  // 	"Store_Pickup": "No",
  // 	"Supplies_Needed": "",
  // 	"Time_Driven": "12 mins",
  // };

  // let jobsArray = [fakeJSON1, fakeJSON2, fakeJSON3];
  // let acceptedJobsArray = [fakeJSON1, fakeJSON2, fakeJSON3]

  let screenWidth = $(window).width();
  // let jobsArray = [];
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
        showJobDetails();
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



  console.log(Supplies_Needed);

  //Displays Job Details
  function showJobDetails() {
    let Name = "Evan Slaton";
    let Phone = "555-555-5555";
    let Scheduled_Date = undefined;
    let Scheduled_Time = undefined;
    let Time_Driven = undefined;
    let Store_Pickup = undefined;
    let Num_Of_Movers = undefined;
    let Num_Of_Assemblers = undefined;
    let Num_Of_Items = undefined;
    let Num_Of_Boxes = undefined;
    let Pickup_Address = undefined;
    let Pickup_Home_Type = undefined;
    let Pickup_Room_Count = undefined;
    let Pickup_Stairs = undefined;
    let Dropoff_Address = undefined;
    let Dropoff_Home_Type = undefined;
    let Dropoff_Room_Count = undefined;
    let Dropoff_Stairs = undefined;
    let Pack_Help = undefined;
    let Rooms_To_Pack = undefined;
    let Load_Help = undefined;
    let Piano_Type = undefined;
    let Supplies_Needed = '50,000 didgeridoos';

    $('.details-job-button').off('click').on('click', function() {
      $('#availableTitle').addClass('initial-hidden');
      $('#acceptedTitle').addClass('initial-hidden');
      $('#availableJobs').addClass('initial-hidden');
      $('#acceptedJobs').addClass('initial-hidden');
      $('#white-container').append('<div class="details-container"></div>');

      if (Name) {$('.details-container').append('<p>Name: ' + Name + '</p>');}
      if (Phone) {$('.details-container').append('<p>Phone: ' + Phone + '</p>');}
      if (Scheduled_Date) {$('.details-container').append('<p>Move Date: ' + Scheduled_Date + '</p>');}
      if (Scheduled_Time) {$('.details-container').append('<p>Move Time: ' + Scheduled_Time + '</p>');}
      if (Time_Driven) {$('.details-container').append('<p>Drive Time: ' + Time_Driven + '</p>');}
      if (Store_Pickup) {$('.details-container').append('<p>Store Pickup: ' + Store_Pickup + '</p>');}
      if (Num_Of_Movers) {$('.details-container').append('<p>Movers: ' + Num_Of_Movers + '</p>');}
      if (Num_Of_Assemblers) {$('.details-container').append('<p>Assemblers: ' + Num_Of_Assemblers + '</p>');}
      if (Num_Of_Items) {$('.details-container').append('<p>Items: ' + Num_Of_Items + '</p>');}
      if (Num_Of_Boxes) {$('.details-container').append('<p>Boxes: ' + Num_Of_Boxes + '</p>');}
      if (Pickup_Address) {$('.details-container').append('<p>Pickup Address: ' + Pickup_Address + '</p>');}
      if (Pickup_Home_Type) {$('.details-container').append('<p>Home Type: ' + Pickup_Home_Type + '</p>');}
      if (Pickup_Room_Count) {$('.details-container').append('<p>Room Count: ' + Pickup_Room_Count + '</p>');}
      if (Pickup_Stairs) {$('.details-container').append('<p>Stairs: ' + Pickup_Stairs + '</p>');}
      if (Dropoff_Address) {$('.details-container').append('<p>Dropoff Address: ' + Dropoff_Address + '</p>');}
      if (Dropoff_Home_Type) {$('.details-container').append('<p>Home Type: ' + Dropoff_Home_Type + '</p>');}
      if (Dropoff_Room_Count) {$('.details-container').append('<p>Room Count: ' + Dropoff_Room_Count + '</p>');}
      if (Dropoff_Stairs) {$('.details-container').append('<p>Stairs: ' + Dropoff_Stairs + '</p>');}
      if (Pack_Help) {$('.details-container').append('<p>Help Pack: ' + Pack_Help + '</p>');}
      if (Rooms_To_Pack) {$('.details-container').append('<p>Rooms to Pack: ' + Rooms_To_Pack + '</p>');}
      if (Load_Help) {$('.details-container').append('<p>Load Help: ' + Load_Help + '</p>');}
      if (Piano_Type) {$('.details-container').append('<p>Piano Type: ' + Piano_Type + '</p>');}
      if (Supplies_Needed) {$('.details-container').append('<p>Supplies Needed: ' + Supplies_Needed + '</p>');}

      $('.details-container').append('<div class="return-job-button text-center"><p>Return to List</p></div>');
      showJobLists();
    });
  };

  //Removes Job Details
  function showJobLists() {
    $('.return-job-button').off('click').on('click', function() {
      $('#availableTitle').removeClass('initial-hidden');
      $('#acceptedTitle').removeClass('initial-hidden');
      $('#availableJobs').removeClass('initial-hidden');
      $('#acceptedJobs').removeClass('initial-hidden');
      $(this).parent().remove();
    });
  };

});
