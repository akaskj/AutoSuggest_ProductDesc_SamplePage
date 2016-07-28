$(document).ready(function(){

	//click event for the product description
	$('.product-container h3, .product-container img').click(function(){

		var click_index = $(this).parent().attr('id');
		//if first image add 1 ,2, 3 indicator
		if (click_index == 1) {
			$('.image-grid').html('<img class="image" src="images/cereal_b.jpg"><span class="first-indicator"></span><span class="second-indicator"></span><span class="third-indicator"></span>');
		}else {
			$('.image-grid').html('<img class="image" src="images/cereal_b.jpg">');
		}

		$('.product-desc-container h2').text(data[click_index].title);
		$('.product-desc-container .intro').text(data[click_index].price);
		$('.product-desc-container .desc').html(data[click_index].desc);
		$('.product-desc-container img.image').attr('src' , 'images/' + data[click_index].src);

		$('.product-desc-container').fadeIn();
		// scroll to the product description
		if ($(window).width() > 720) {
			$('html, body').animate({
	      'scrollTop' : $(".product-container").offset().top
	    }, '500');
    } else {
    	$('html, body').animate({
	      'scrollTop' : $(".product-desc-container").offset().top
	    }, '500');
    }

    //hover zoom effect in the product details
		$('ul li:nth-of-type(3)').hover(function(){
			$('.third-indicator').toggleClass('hovered');
		});

		$('ul li:nth-of-type(2)').hover(function(){
			$('.second-indicator').toggleClass('hovered');
		});

		$('ul li:first-of-type').hover(function(){
			$('.first-indicator').toggleClass('hovered');
		});

		$('.first-indicator').hover(function(){
			$('ul li:first-of-type').toggleClass('hovered');
		});

		$('.second-indicator').hover(function(){
			$('ul li:nth-of-type(2)').toggleClass('hovered');
		});

		$('.third-indicator').hover(function(){
			$('ul li:nth-of-type(3)').toggleClass('hovered');
		});

	});

	//on close of product details
	$('.desc-close').click(function(){
		$('.product-desc-container').animate({
			'height' : 0 , 'padding-top' : 0 , 'padding-bottom' : 0
		}, '500', function(){
			$('.product-desc-container').fadeOut('slow' , function(){
				$('.product-desc-container').css({
					'height' : '', 'padding-top' : '', 'padding-bottom' : ''
				});
			});
		});
	});

	//selecting price range in "Filter by"
	$('select').change(function(){
		var range = $(this).val().split('-');
		if (range[1]) {
			$('.product-container span').each(function(){
				var pprice = parseInt($(this).text())
				if ( parseInt(range[0]) <= pprice && pprice <= parseInt(range[1]) ) {
					$(this).parents('.product-container').fadeIn();
				}else {
					$(this).parents('.product-container').fadeOut();
				}
			});
		}	else if (parseInt(range[0]) == 0) {
			$('.product-container').fadeIn();
		}	else {
			$('.product-container span').each(function(){
				var pprice = parseInt($(this).text())
				if ( parseInt(range[0]) <= pprice ) {
					$(this).parents('.product-container').fadeIn();
				}else {
					$(this).parents('.product-container').fadeOut();
				}
			});
		}

	});

	//centering popup
	function resize_popup(){
	  winH = $(window).height()/2;
	  winW = $(window).width();
	    $(".popup-content").css('top',  (winH/2-$(".popup-content").height()/2));
	    $(".popup-content").css('left', winW/2-$(".popup-content").outerWidth()/2);
	}

	resize_popup();

	//making popup responsive
	$(window).resize(function(){
		resize_popup();
	});

	//on click of search button in statefinder
	$('button.pop-up').click(function(){
		$('.popup-content h1').text($('.biginput').val());

		// if text box is empty do nothing
		if (!$('.biginput').val()) {
			return false;
		};

		$('.custom-overlay').fadeIn('fast',function(){
			$('.popup-content').fadeIn('fast');
		});
	});

	//on close of popup
	$('.custom-overlay, .pop-close').click(function(){
		$('.popup-content').fadeOut('250',function(){
			$('.custom-overlay').fadeOut('250');
		});
	});


	//data for product description
	var data = {
    1: {
        id : 1,
        order: 1,
        'title' : 'Product Title 1',
        'price' : 'Staring at $500',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.<br><br>'
            +'<ul>'
                    + '     <li>Non porta dui euismod nec</li>'
                    + '     <li>Ut tristique ipsum velit</li>'
                                    + '     <li>Quisque mollis justo</li>'
            +'</ul>',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                        'src'        : 'cereal_b.jpg'
    },
    2: {
        id : 2,
        order: 2,
        'title' : 'Product Title 2',
        'price' : 'Staring at $1900',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                        'src'        : 'flower_b.jpg'
    },
    3: {
        id : 3,
        order: 3,
        'title' : 'Product Title 3',
        'price' : 'Staring at $2730',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                        'src'        : 'machine_b.jpg'
    },
    4: {
        id : 4,
        order: 4,
        'title' : 'Product Title 4',
        'price' : 'Staring at $731',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                        'src'        : 'candy_b.jpg'
    }
  };
  
});


