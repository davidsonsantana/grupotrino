$(document).ready(function(){

	//Adiciona classe "active" no menu clicado.
	$('.lista li').click(function(){
		$('.lista li').removeClass('active');
		$(this).addClass('active');
	});

	// iScroll Plugin
	var myScroll;

	function loaded () {
		myScroll = new IScroll('#wrapper');
	}

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


});