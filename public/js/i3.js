var i3 = {
	StateManager: {
		previousState: null,
		currentState: null,
		states: {},
		changeState: function(state) {
			i3.hideState(this.currentState);
			this.states[state].build();
			this.previousState = this.currentState;
			this.currentState = state;
			i3.showState(state);
			this.states[state].resize();
		}
	},
	hideAllStates: function() {
		for(i in this.states){
			hideState(i);
		}
	},
	hideState: function(state) {
		$("#" + state).hide();
	},
	showState: function(state) {
		$('#' + state).show();
	}
};