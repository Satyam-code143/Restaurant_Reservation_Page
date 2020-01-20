
$(function() {

  $( "#datepicker" ).datepicker({dateFormat:'dd M, yy',minDate:new Date()});
  $('#timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 15,
    minTime: '10',
    maxTime: '10:00pm',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});
} );

$(document).ready(function(){
  $('#menu-icon').click(function(){
    $('ul').toggleClass('show')
  });
});

function validate(){
  var time=document.getElementById('timepicker').value;
  var date=document.getElementById('datepicker').value;
  var seat=document.getElementById('people').value;

if(date=="" || time=="" || seat=="" ){
  alert("Please Enter The Details!!");
}
else if (seat>="8") {
  alert("Only 7 People can Dine ");


}
else {
  alert("Thank You!!\n Date: "+ date +"\n Time: "+time + "\n Seats: "+ seat);
}

}
