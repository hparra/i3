//Init Timer
var timer = 10000000;
restartTimer();

function restartTimer() {
    screensaver = setTimeout('initScreenSaver()', timer); // Delay in milliseconds
}

function initScreenSaver() {
	clearTimeout(screensaver);
	i3.StateManager.changeState('screen');
    $('#screen').fadeIn('fast');
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