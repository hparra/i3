//Init Timer
var timer = 10000000;
restartTimer();

function restartTimer() {
    screensaver = setTimeout('initScreenSaver()', timer); // Delay in milliseconds
}

function initScreenSaver() {
    $('#screen').fadeIn('fast');
	sCallBack();
}

function killScreenSaver() {
	clearTimeout(screensaver);
    restartTimer();
    $('#screen').fadeOut();
}

$(document).mousemove(function() {
    clearTimeout(screensaver);
    restartTimer();
});

$(document).click(function() {
	clearTimeout(screensaver);
    restartTimer();
});