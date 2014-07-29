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

});