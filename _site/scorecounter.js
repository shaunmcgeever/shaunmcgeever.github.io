$(document).ready(function() {

	$('#left').on('click',function(){
		add_point('left');
	});

	$('#right').on('click',function(){
		add_point('right');
	});

	$('#right_subtract').on('click',function(){
		subtract_point('right');
	});

	$('#left_subtract').on('click',function(){
		subtract_point('left');
	});

	$('#reset').on('click', function(){
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

var subtract_point = function(side){
		var side = '#'+side+'_score'
		var score = parseInt($(side).text());
		$(side).empty();
		$(side).append(score-1);
}