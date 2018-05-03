$(document).ready(function() {

const fakeJSON1 = {
	"Load_Help": "",
	"Muves_Fee": "13.35",
	"Name": "Shawn",
	"Num_Of_Assemblers": "",
	"Num_Of_Boxes": "",
	"Num_Of_Items": "1",
	"Num_Of_Movers": "",
	"Pack_Help": "",
	"Phone": "555-555-5555",
	"Piano_Type": "",
	"Pickup_Address": "Amelia, OH, USA",
	"Pickup_Home_Type": "",
	"Pickup_Room_Count": "",
	"Pickup_Stairs": "",
	"Dropoff_Address": "Amelia, OH, USA",
	"Dropoff_Home_Type": "",
	"Dropoff_Room_Count": "",
	"Dropoff_Stairs": "",
	"Rooms_To_Pack": "",
	"Scheduled_Date": "4.18",
	"Scheduled_Time": "08:00",
	"Store_Pickup": "No",
	"Supplies_Needed": "",
	"Time_Driven": "9 mins",
};

const fakeJSON2 = {
	"Load_Help": "",
	"Muves_Fee": "26.387",
	"Name": "Evan",
	"Num_Of_Assemblers": "",
	"Num_Of_Boxes": "",
	"Num_Of_Items": "2",
	"Num_Of_Movers": "",
	"Pack_Help": "",
	"Phone": "666-666-666",
	"Piano_Type": "",
	"Pickup_Address": "Hamilton, OH, USA",
	"Pickup_Home_Type": "",
	"Pickup_Room_Count": "",
	"Pickup_Stairs": "",
	"Dropoff_Address": "Hamilton, OH, USA",
	"Dropoff_Home_Type": "",
	"Dropoff_Room_Count": "",
	"Dropoff_Stairs": "",
	"Rooms_To_Pack": "",
	"Scheduled_Date": "5.02",
	"Scheduled_Time": "16:30",
	"Store_Pickup": "No",
	"Supplies_Needed": "",
	"Time_Driven": "30 mins",
};

const fakeJSON3 = {
	"Load_Help": "",
	"Muves_Fee": "15.01",
	"Name": "Joe",
	"Num_Of_Assemblers": "",
	"Num_Of_Boxes": "",
	"Num_Of_Items": "1",
	"Num_Of_Movers": "",
	"Pack_Help": "",
	"Phone": "777-777-7777",
	"Piano_Type": "",
	"Pickup_Address": "Blue Ash, OH, USA",
	"Pickup_Home_Type": "",
	"Pickup_Room_Count": "",
	"Pickup_Stairs": "",
	"Dropoff_Address": "Blue Ash, OH, USA",
	"Dropoff_Home_Type": "",
	"Dropoff_Room_Count": "",
	"Dropoff_Stairs": "",
	"Rooms_To_Pack": "",
	"Scheduled_Date": "5.05",
	"Scheduled_Time": "15:00",
	"Store_Pickup": "No",
	"Supplies_Needed": "",
	"Time_Driven": "12 mins",
};

let jobsArray = [fakeJSON1, fakeJSON2, fakeJSON3];
let acceptedJobsArray = [fakeJSON1, fakeJSON2, fakeJSON3]
let i = 0;


//Uses JSON data to populate list of available jobs
const generateAvailableJobs = (jobsArray) => {
	for (i = 0; i < jobsArray.length; i++) {
		$('<div>',{id:'available' + i, class:"avail-accept-jobs-div margin-bottom-twentypx"}).appendTo('#availableJobs');
		$('#available' + i).append('<div class="delete-job delete-avail-job"><p class="text-center font-weight-bold"><b>X</b></p></div>');
		$('#available' + i).append('<p>Name: ' + jobsArray[i].Name + '</p>');
		$('#available' + i).append('<p>Move Date: ' + jobsArray[i].Scheduled_Date + '</p>');
		$('#available' + i).append('<p>Move Time: ' + jobsArray[i].Scheduled_Time + '</p>');
		$('#available' + i).append('<p>Drive Time: ' + jobsArray[i].Time_Driven + '</p>');
		$('#available' + i).append('<div class="accept-job-button text-center"><p>Accept</p></div>');
	}
}

generateAvailableJobs(jobsArray);


//Uses JSON data to populate list of accepted jobs
const generateAcceptedJobs = (acceptedJobsArray) => {
	for (i = 0; i < acceptedJobsArray.length; i++) {
		$('<div>',{id: 'accepted' + i, class:"avail-accept-jobs-div margin-bottom-twentypx"}).appendTo('#acceptedJobs');
		$('#accepted' + i).append('<div class="delete-job delete-accept-job"><p class="text-center font-weight-bold"><b>X</b></p></div>');
		$('#accepted' + i).append('<p>Name: ' + acceptedJobsArray[i].Name + '</p>');
		$('#accepted' + i).append('<p>Move Date: ' + acceptedJobsArray[i].Scheduled_Date + '</p>');
		$('#accepted' + i).append('<p>Move Time: ' + acceptedJobsArray[i].Scheduled_Time + '</p>');
		$('#accepted' + i).append('<p>Drive Time: ' + jobsArray[i].Time_Driven + '</p>');
	}
}

generateAcceptedJobs(acceptedJobsArray);


//Moves job from available to accepted
function acceptJob() {
	$('.accept-job-button').off('click').on('click', function() {
		$(this).parent().appendTo('#acceptedJobs');
		$(this).parent().children(':first-child').attr('class', 'delete-job delete-accept-job');
		$(this).remove();
		assignDeleteAcceptJob();
	});
};

acceptJob();


//Delete available job from the list
function deleteAvailJob() {
	$('.delete-avail-job').off('click').on('click', function() {
		$(this).parent().remove();
	});
};

deleteAvailJob()


//Delete from accepted job list, moves back to available jobs list
function assignDeleteAcceptJob() {
	$('.delete-accept-job').off('click').on('click', function() {
		$(this).parent().appendTo('#availableJobs');
		$(this).parent().children(':first-child').attr('class', 'delete-job delete-avail-job');
		$(this).parent().append('<div class="accept-job-button text-center"><p>Accept</p></div>');
		console.log('yolo');
		acceptJob();
		deleteAvailJob();
	});
};

assignDeleteAcceptJob();

});