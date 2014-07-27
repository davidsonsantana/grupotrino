$(document).ready(function(){

	//Adiciona classe "active" no menu clicado.
	$('.lista li').click(function(){
		$('.lista li').removeClass('active');
		$(this).addClass('active');
	});

});