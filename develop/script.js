'use strict';

var saveBtn = $('.save-btn');
// create variable for the div that will contain the date and time
var todayContainerEl = $('#today')
//create variable that contains the day function
var today = dayjs();
//use new variable to format dayjs and change text content of container
var date = today.format('MMMM D, YYYY h:mm A');

todayContainerEl.text(date);


var hour = dayjs().hour().toString();

function timeColorCheck() {

    $('.time-row').each(function () {
        var workHour = $(this).attr('id');
        // console.log('hour ' + hour);

        if (workHour > hour) {

            console.log(workHour);
            $(this).children('.task').addClass('plenty-of-time');
        } else if (workHour === hour) {
            $(this).children('.task').addClass('no-time');
        } else {
            $(this).children('.task').addClass('out-of-time');
        }
    })
}

$(saveBtn).on('click', function () {
    var task = $(this).siblings('.task').val();

    console.log(task);

    var time = $(this).parent().attr('id');

    console.log(time);


    if (task === '') {
        alert('You must enter a task to save!');
    }

    localStorage.setItem(time, task);
})

$('#09 .task').val(localStorage.getItem('09'));
$('#10 .task').val(localStorage.getItem('10'));
$('#11 .task').val(localStorage.getItem('11'));
$('#12 .task').val(localStorage.getItem('12'));
$('#13 .task').val(localStorage.getItem('13'));
$('#14 .task').val(localStorage.getItem('14'));
$('#15 .task').val(localStorage.getItem('15'));
$('#16 .task').val(localStorage.getItem('16'));
$('#17 .task').val(localStorage.getItem('17'));

timeColorCheck();