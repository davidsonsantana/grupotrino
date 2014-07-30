$(document).ready(function(){
	//apaga topo pequeno do scroll no carregamento
	$('.topo-inteiro.pequeno').hide();

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
	$(window).scroll(function(){
	    if  ($(window).scrollTop() > 200){
	    	console.log('isso é o if')
	        $('.topo-inteiro').hide();
	        $('.topo-inteiro.pequeno').show();
	         $('.topo-inteiro.pequeno').css({
	         	'position' : 'fixed',
	         	'z-index' : '9999',
	         	'margin' : '0 0 0 78px'
	         });
	          $('.topo-inteiro.pequeno .area-restrita').css({
	         	'padding' : '13px 20px 14px'
	         });
	    } else  {
	    	console.log('isso é o else')
	       $('.topo-inteiro').show();
	       $('.topo-inteiro.pequeno').hide();

	       
	    }
	});

	//quando descer no footer, fazer animacao dos pins
	$(window).scroll(function(){
	    if  ($(window).scrollTop() > 4202){
	    	//console.log('isso é o if')
	        $('.pin-1').delay(10).fadeIn('1000');
	        $('.pin-2').delay(15).fadeIn('1000');
	        $('.pin-3').delay(20).fadeIn('1000');
	        $('.pin-4').delay(25).fadeIn('1000');
	        $('.pin-5').delay(30).fadeIn('1000');
	        $('.pin-6').delay(35).fadeIn('1000');
	        $('.pin-7').delay(40).fadeIn('1000');
	        $('.pin-8').delay(45).fadeIn('1000');
	    } else  {
	    	//console.log('isso é o else')
	        $('.pin-1').delay(10).fadeOut('1000');
	        $('.pin-2').delay(15).fadeOut('1000');
	        $('.pin-3').delay(20).fadeOut('1000');
	        $('.pin-4').delay(25).fadeOut('1000');
	        $('.pin-5').delay(30).fadeOut('1000');
	        $('.pin-6').delay(35).fadeOut('1000');
	        $('.pin-7').delay(40).fadeOut('1000');
	        $('.pin-8').delay(45).fadeOut('1000');
	    }
	});




















	

});