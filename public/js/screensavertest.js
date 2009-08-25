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
	if(i3.StateManager.currentState === 'screen') {
		i3.StateManager.changeState('content');
	}
}

$(document).mousemove(function() {
	killScreenSaver();
});

$(document).click(function() {
	killScreenSaver();
});