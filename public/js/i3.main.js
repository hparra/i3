i3.StateManager.states['content'] = {
	build: function() {
		
		users = {
			0: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/unknownbuddy.png'
			},
			1: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/unknownbuddy.png'
			}
		};
		
		/* Ramune */
		/* Close Button */
		rclose = H2O.Image({ ID: 'ram_close', src: 'http://marco.calit2.uci.edu/assets/i3/images/rclose.png', padding: 0 });
		$('#close_call').append(rclose);
		/* Settings Button */
		rsettings = H2O.Image({ ID: 'ram_settings', src: 'http://marco.calit2.uci.edu/assets/i3/images/rsettings.png', padding: 0 });
		$('#settings').append(rsettings);
		/* Video Panel */
		rvideo = H2O.Image({ ID: 'vid', src: 'http://marco.calit2.uci.edu/assets/i3/images/video.png', padding: 20 });
		$('#ramune_video').append(rvideo);
		$('#ramune').hide();

		/* BuddyList */
		buddylist = H2O.Carousel({ ID: 'buddylist_carousel', data: users, columnAmt: 3, rowAmt: 1, autoScroll: false });
		$('#blcarousel').append(buddylist);
		/* Back Button */
		back = H2O.Button({ ID: 'back', type: 'back', click: 'buddylist.prevPage(1)'});
		$('#bbutton').append(back);
		/* Next Button */
		next = H2O.Button({ ID: 'next', type: 'next', click: 'buddylist.nextPage(1)'});
		$('#nbutton').append(next);
		//$('#buddylist').hide();

		$('#stock').click(function() {
			$('#videoscreen').animate({
				opacity: 0,
				top: 2000
			}, 500);
			$('#rssapp').animate({
				opacity: 0,
				top: 2000
			}, 500);
			$('#stockapp').show('fast');
			$('#stockapp').animate({
				opacity: .85,
				top: 20
			}, 500);

		});
		
		$('#rss').click(function() {
			$('#videoscreen').animate({
				opacity: 0,
				top: 2000
			}, 500);
			$('#stockapp').animate({
				opacity: 0,
				top: 2000
			}, 500);
			$('#rssapp').show('fast');
			$('#rssapp').animate({
				opacity: .85,
				top: 20
			}, 500);
		});

		$('#video').click(function() {
			$('#stockapp').animate({
				opacity: 0,
				top: 2000
			}, 500);
			$('#rssapp').animate({
				opacity: 0,
				top: 2000
			}, 500);
			$('#videoscreen').show('fast');
			$('#videoscreen').animate({
				opacity: .85,
				top: 20
			}, 500);

		});

		$('#ram_close').click(function(){
			$('#stockapp').animate({
				opacity: 0,
				top: 2000
			}, 500);
			$('#ramune').hide();
			$('#buddylist').fadeIn();
			buddylist.resize();
			back.resize();
			next.resize();
		});
	},
	resize: function() {
		resize(getWidth(), getHeight());
		//calit2slideshow.resize();
		buddylist.resize();
		back.resize();
		next.resize();
		rvideo.resize();
		rsettings.resize();
		rclose.resize();
	}
};