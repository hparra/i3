i3.StateManager.states['LOGIN'] = {
	HTML: '\
		<div id="login_box">\
			<img id="TeliosLogo" name="TeliosLogo" src="http://telios.calit2.uci.edu/images/teliosbanner.png" />\
			<form id="items" action="javascript:login()">\
				<fieldset>\
					<dl>\
						<dd><input id="username" type="text" value="Name" name="login" style="font-size: 30px; height: 40px;" /></dd>\
						<dd><input id="password" type="password" value="Passphrase" name="password" style="font-size: 30px; height: 40px;" /></dd>\
						<dd><input type="submit" value="Login" name="button" style="font-size: 30px; height: 40px;" /></dd>\
					</dl>\
				</fieldset>\
			</form>\
		</div>\
	',
	build: function() {
		$('#LOGIN').html(this.HTML);
	},
	resize: function() {
		
	}
};