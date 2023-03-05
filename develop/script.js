'use strict';
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// //GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeBlocks for standard business hours
// WHEN I view the timeBlocks for that day
// THEN each timeBlock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeBlock
// THEN I can enter an event
// WHEN I click the save button for that timeBlock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// create variable for the div that will contain the date and time
var todayContainerEl = $('#today')
//create variable that contains the day function
var today = dayjs();
//use new variable to format dayjs and change text content of container
var date = today.format('MMMM D, YYYY h:mm A');


todayContainerEl.text(date);

var hour = dayjs().hour();
console.log(hour);

// var workHours = $('.time-row').attr('id');
// console.log(workHours)

var workHour = $('.row').children()
console.log(workHour);

function timeColorCheck() {

    $('.time-row').each(function () {



        if (workHour > hour) {
            $('.task').addClass('plenty-of-time')
        } else if (workHour === hour) {
            $('.task').addClass('no-time')
        } else {
            $('.task').addClass('out-of-time')
        }

    })
}

timeColorCheck();