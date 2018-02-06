$(document).ready(function(){

	var Home = {
		initsliders: function () {
			//init main banner
			var owl = $('#banner_carousel');
			owl.owlCarousel({
				margin: 0,
				nav: false,
				dots:true,
				loop: true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 1
					}
				}
			});

			// home products slider
			owl = $('.products_carousel_container-carousel');
			owl.owlCarousel({
				margin: 0,
				nav: false,
				dots:true,
				loop: true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 3
					},
					1000: {
						items: 4
					}
				}
			});

		},
		setScroll: function () {
			$('.about_us_container-content').slimScroll({
				height: '250px',
				position: 'right',
				color: '#4a88db',
				railColor: '#eae4fa',
				opacity: 1,
				railOpacity: 1,
				railVisible: true,
				alwaysVisible: true,
				railBorderRadius: '0',
				borderRadius : '0',
				size: '6px'
			});
		},
		init: function(){
			this.initsliders();

			this.setScroll();
		}
	};
	Home.init();
});