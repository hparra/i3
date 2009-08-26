//Clock
setInterval('fetchTime()', 500);

var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

function fetchTime(){
	currentTime = new Date();
	hours = currentTime.getHours();
	minutes = currentTime.getMinutes();
	seconds = currentTime.getSeconds();
	
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	if(seconds < 10){
		seconds = "0" + seconds;
	}
	
	$('#clocktext').text(hours+':'+minutes+':'+seconds);
}