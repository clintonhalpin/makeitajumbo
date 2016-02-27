$(document).ready(function(){
    $(".container").fitVids();
    $("iframe").toggleClass('visible');

    $('.js-menu').on('click', function(){
    	$('.menu').toggleClass('visible');
    	$('.menu ul li h1').toggleClass('animated pulse')
    })
	$('.menu').on('click', function(){
    	$(this).toggleClass('visible');
    	$('.menu ul li h1').toggleClass('animated pulse')
    });

    $(window).on('scroll', function(){
    	console.log('holler')
    	$('.header').addClass('dark');
    })
});