$(document).ready(function(){

	//Adiciona classe "active" no menu clicado.
	$('.lista li').click(function(){
		$('.lista li').removeClass('active');
		$(this).addClass('active');
	});

	//Cria animação de ancora.
	$.fn.ancora = function(){
	        $('html,body').animate({scrollTop:$(this).offset().top});
	}

	//quem tiver # no href, tem animação.
	$(function(){
	    $('a[href^=#]').click(function(){
	        $($(this).attr('href')).ancora();
	        return false;
	    })
	});

	//quando descer 200px no scroll, mostrar menu pequeno e apagar menu grande
	$(".topo-inteiro.pequeno").hide();

	$(window).scroll(function () {

		if (document.body.scrollTop >= 150){
      $(".topo-inteiro").hide();
			$(".topo-inteiro.pequeno").show();
    } else {
      $(".topo-inteiro").stop().show();
			$(".topo-inteiro.pequeno").stop().hide();
		}

	});
    


	//quando descer no footer, fazer animacao dos pins
	$(window).scroll(function(){
	    if  ($(window).scrollTop() > 4202){
	    	//console.log('isso é o if')
	        $('.pin.one').stop(true, true).delay(100).fadeIn('slow');
	        $('.pin.two').stop(true, true).delay(200).fadeIn('slow');
	        $('.pin.three').stop(true, true).delay(300).fadeIn('slow');
	        $('.pin.four').stop(true, true).delay(400).fadeIn('slow');
	        $('.pin.five').stop(true, true).delay(500).fadeIn('slow');
	        $('.pin.six').stop(true, true).delay(600).fadeIn('slow');
	        $('.pin.seven').stop(true, true).delay(700).fadeIn('slow');
	        $('.pin.eight').stop(true, true).delay(80).fadeIn('slow');
	    } else  {
	    	//console.log('isso é o else')
	        $('.pin.one').stop(true, true).delay(100).fadeOut('slow');
	        $('.pin.two').stop(true, true).delay(200).fadeOut('slow');
	        $('.pin.three').stop(true, true).delay(300).fadeOut('slow');
	        $('.pin.four').stop(true, true).delay(400).fadeOut('slow');
	        $('.pin.five').stop(true, true).delay(500).fadeOut('slow');
	        $('.pin.six').stop(true, true).delay(600).fadeOut('slow');
	        $('.pin.seven').stop(true, true).delay(700).fadeOut('slow');
	        $('.pin.eight').stop(true, true).delay(800).fadeOut('slow');
	    }
	});


});