var today = moment();
var timeBlockE1 = document.querySelector('.container');

$('#currentDay').text(today.format('dddd, MMMM Do, YYYY'));

$('saveBtn').on('click', function(){
    var textValue = $(this).siblings('.description').val();var timeKey = $(this).parent().attr('id');
    localStorage.setIten(timeKey, textValue);
});

// Get item from local storage
$('#hour6 .dsecription').val(localStorage.getItem('hour6'));
$('#hour7 .dsecription').val(localStorage.getItem('hour7'));
$('#hour8 .dsecription').val(localStorage.getItem('hour8'));
$('#hour9 .dsecription').val(localStorage.getItem('hour9'));
$('#hour10 .dsecription').val(localStorage.getItem('hour10'));
$('#hour11 .dsecription').val(localStorage.getItem('hour11'));
$('#hour12 .dsecription').val(localStorage.getItem('hour12'));
$('#hour13 .dsecription').val(localStorage.getItem('hour13'));
$('#hour14 .dsecription').val(localStorage.getItem('hour14'));
$('#hour15 .dsecription').val(localStorage.getItem('hour15'));
$('#hour16 .dsecription').val(localStorage.getItem('hour16'));

function auditTask(){
    var currentHour = today.hours();

    $('.time-block').each(function () {
        var timeId = parseInt($(this).attr('id').split("hour")[1]);
        if (timeId < currentHour) {
            $(this).addClass('past');
        }
        else if (timeId === currentHour) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }
        else{
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
        
    });
}

auditTask();

setTimeout(function (){
    location = '';
}, 1000 * 60);