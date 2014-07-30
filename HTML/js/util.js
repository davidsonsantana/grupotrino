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
	    if  ($(window).scrollTop() > 150){
	    	//console.log('isso é o if')
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
	           $('.lista.pequeno').css({
	         	'background' : 'url("../img/ul-repeat.jpg") repeat-x scroll 0 top #fff',
			    'border-radius' : '10px',
			    'float' : 'left',
			    'height' : '30px',
			    'margin' : '0 0 0 105px',
			    'padding-top' : '18px',
			    'width' : '750px'
	         });

		        
	    } else  {
	    	//console.log('isso é o else')
	       $('.topo-inteiro').show();
	       $('.topo-inteiro.pequeno').hide();

	       
	    }
	});

	//quando descer no footer, fazer animacao dos pins
	$(window).scroll(function(){
	    if  ($(window).scrollTop() > 4202){
	    	//console.log('isso é o if')
	        $('.pin-1').stop(true, true).delay(100).fadeIn('2000');
	        $('.pin-2').stop(true, true).delay(150).fadeIn('2000');
	        $('.pin-3').stop(true, true).delay(200).fadeIn('2000');
	        $('.pin-4').stop(true, true).delay(250).fadeIn('2000');
	        $('.pin-5').stop(true, true).delay(300).fadeIn('2000');
	        $('.pin-6').stop(true, true).delay(350).fadeIn('2000');
	        $('.pin-7').stop(true, true).delay(400).fadeIn('2000');
	        $('.pin-8').stop(true, true).delay(450).fadeIn('2000');
	    } else  {
	    	//console.log('isso é o else')
	        $('.pin-1').stop(true, true).delay(100).fadeOut('2000');
	        $('.pin-2').stop(true, true).delay(150).fadeOut('2000');
	        $('.pin-3').stop(true, true).delay(200).fadeOut('2000');
	        $('.pin-4').stop(true, true).delay(250).fadeOut('2000');
	        $('.pin-5').stop(true, true).delay(300).fadeOut('2000');
	        $('.pin-6').stop(true, true).delay(350).fadeOut('2000');
	        $('.pin-7').stop(true, true).delay(400).fadeOut('2000');
	        $('.pin-8').stop(true, true).delay(450).fadeOut('2000');
	    }
	});




















	

});