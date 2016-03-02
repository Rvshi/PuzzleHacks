$(function(){
    $('#top').parallax({imageSrc: './img/bg.jpg'});
    $('#about').parallax({imageSrc: './img/about.jpg'}); 
    $('#prizes').parallax({imageSrc: './img/prizes.jpg'}); 
    
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1200, 'easeInOutQuart', function () {
	        window.location.hash = target;
	    });
	});
	
	var down = false;   
	// scroll behavior
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 700 && down == false) {
            down = true;
            $('#top').css('margin-bottom','70px');
            $('#menu').addClass('fixed');
            $('#logo').fadeIn(600);
            $( "#menuItems" ).animate({
                right: '250px',
            }, 600, 'easeInOutSine');
        }
        if ($(window).scrollTop() <= 700 && down == true) {
            down = false;
            $('#menu').removeClass('fixed');
            $('#top').css('margin-bottom','0');
            $('#logo').fadeOut(100);
            $("#menuItems").animate({
                right: '50%',
            }, 600, 'easeInOutSine');
        }
    });
});