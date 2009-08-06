//Init Timer
var timer = 10000000;
restartTimer();

$(document).mousemove(function() {
    clearTimeout(screensaver);
    restartTimer();
    $('#screen').fadeOut("fast");
});

$(document).click(function() {
    clearTimeout(screensaver);
    restartTimer();
    $('#screen').fadeOut("fast");
});

function restartTimer() {
    screensaver = setTimeout('initScreenSaver()', timer); // Delay in milliseconds
}

function initScreenSaver() {
    $('#screen').fadeIn('fast');
	sCallBack();
}