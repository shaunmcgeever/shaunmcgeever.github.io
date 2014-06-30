$(document).ready(function() {

	$('#left').on('click',function(e){
		add_point('left');
	});
	$('#right').on('click',function(e){
		add_point('right');
	});

	$('#reset').on('click', function(e){
		if (confirm("Are you sure you want to start a new game?")){
			start_new_game();	
		};
	});
});

var start_new_game = function(){
	$('#left_score').empty().append(0);
	$('#right_score').empty().append(0);
}

var add_point = function(side){
		var side = '#'+side+'_score'
		var score = parseInt($(side).text());
		$(side).empty();
		$(side).append(score+1);
}