i3.StateManager.states['screen'] = {
	build: function() {
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
			}
		};
		
		interfacemag = {
			0: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/interfacespring2009-1.png'
			},
			1: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/interfacespring2009-3.png'
			},
			2: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/interfacespring2009-4.png'
			},
			3: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/interfacespring2009-6.png'
			},
			4: {
				imgsrc: 'http://marco.calit2.uci.edu/assets/i3/images/interfacespring2009-7.png'
			}
		};

		/* Slideshow */
		calit2slideshow = H2O.Carousel({ ID: 'interfacemag', data: interfacemag, columnAmt: 1, rowAmt: 1, autoScroll: true , scrollDelay: 5000, animSpeed: 400 });
		$('#screen-left').append(calit2slideshow);

	},
	resize: function() {
		calit2slideshow.resize();
	}
};
