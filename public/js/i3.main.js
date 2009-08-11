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

		calit2pics = {
			0: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/DSC_0001.jpg'
			},
			1: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/DSC_0002.jpg'
			},
			2: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/DSC_0003.jpg'
			},
			3: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/DSC_0004.jpg'
			},
			4: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/DSC_0005.jpg'
			},
			5: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/DSC_0006.jpg'
			},
			6: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/DSC_0008.jpg'
			},
		};

		/* Slideshow */
		calit2slideshow = H2O.Carousel({ ID: 'calit2slides', data: calit2pics, columnAmt: 1, rowAmt: 1, autoScroll: true , scrollDelay: 5000, animSpeed: 400 });
		$('#homescreen').append(calit2slideshow);
		
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
		//$('#ramune').hide();

		/* BuddyList */
		buddylist = H2O.Carousel({ ID: 'buddylist_carousel', data: users, columnAmt: 3, rowAmt: 1, autoScroll: false });
		$('#blcarousel').append(buddylist);
		/* Back Button */
		back = H2O.Button({ ID: 'back', type: 'back', click: 'buddylist.prevPage(1)'});
		$('#bbutton').append(back);
		/* Next Button */
		next = H2O.Button({ ID: 'next', type: 'next', click: 'buddylist.nextPage(1)'});
		$('#nbutton').append(next);
		$('#buddylist').hide();

		$('#home').click(function() {
			$('#videoscreen').animate({
				opacity: 0,
				top: 3000
			}, 500);
			$('#homescreen').show('fast');
			$('#homescreen').animate({
				opacity: .85,
				top: 20
			}, 500);

		});

		$('#video').click(function() {
			$('#homescreen').animate({
				opacity: 0,
				top: 3000
			}, 500);
			$('#videoscreen').show('fast');
			$('#videoscreen').animate({
				opacity: .85,
				top: 20
			}, 500);

		});

		$('#ram_close').click(function(){
			$('#homescreen').animate({
				opacity: 0,
				top: 3000
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
		calit2slideshow.resize();
		buddylist.resize();
		back.resize();
		next.resize();
		rvideo.resize();
		rsettings.resize();
		rclose.resize();
	}
};