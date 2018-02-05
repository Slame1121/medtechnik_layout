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
		init: function(){
			this.initsliders();
		}
	};
	Home.init();
});