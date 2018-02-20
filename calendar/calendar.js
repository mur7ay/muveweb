$(document).ready(function() {

	var cal2GoTo = function(date) {
	  $('#task-list').fullCalendar('gotoDate', date);
	}

    $('#task-list').fullCalendar({
		header: {
		  left: 'title',
		  right: 'today, prev, next',
		}
    })

    $('#task-list').fullCalendar('changeView', 'agendaDay');

    $('#calendar').fullCalendar({
		header: {
		  left: 'today, prev, next',
		  center: 'title',
		  right: 'month, agendaWeek',
		},
		dayClick: function(date, jsEvent, view) {
			cal2GoTo(date);
    	},
    	eventClick: function(calEvent) {
            cal2GoTo(calEvent.start);
        }
    })
});