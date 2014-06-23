var check_total_score = function(team, points){
	if (points === 21) {
		alert(team+" Team wins!!");
		start_new_game();
	} else if (points > 21) {
		alert(team+" Team has gone over 21! They return to 13.");
		var lowercase_team = team.toLowerCase();
		$('#'+lowercase_team+'_score').empty().append(13);
	};
};

var start_new_game = function(){
		$('#blue_score').empty().append(0);
		$("#blue_on_board_count").empty();
		$("#blue_on_board_count").append("0 On Board");
		$("#blue_in_hole_count").empty();
		$("#blue_in_hole_count").append("0 In Hole");
		$('#red_score').empty().append(0);
		$("#red_on_board_count").empty();
		$("#red_on_board_count").append("0 On Board");
		$("#red_in_hole_count").empty();
		$("#red_in_hole_count").append("0 In Hole");
};

$(document).ready(function() {

	$('#blue_on_board').on('click',function(e){
		e.preventDefault();
		var blue_board_count = parseInt($("#blue_on_board_count").text());
		var blue_hole_count = parseInt($("#blue_in_hole_count").text());
		if ((blue_board_count + blue_hole_count)<4){
			$("#blue_on_board_count").empty();
			$("#blue_on_board_count").append((blue_board_count+1)+" On Board");	
		} else {
			alert("You only have four bean bags!");
		};	
	});

		$('#blue_in_hole').on('click',function(e){
		e.preventDefault();
		var blue_hole_count = parseInt($("#blue_in_hole_count").text());
		var blue_board_count = parseInt($("#blue_on_board_count").text());
		if ((blue_board_count + blue_hole_count)<4){
			$("#blue_in_hole_count").empty();
			$("#blue_in_hole_count").append((blue_hole_count+1)+" In Hole");
		} else {
			alert("You only have four bean bags!");
		};
	});

	$('#clear_blue').on('click', function(e){
		e.preventDefault();
		$("#blue_on_board_count").empty();
		$("#blue_on_board_count").append("0 On Board");
		$("#blue_in_hole_count").empty();
		$("#blue_in_hole_count").append("0 In Hole");
	});

	$('#red_on_board').on('click',function(e){
		e.preventDefault();
		var red_board_count = parseInt($("#red_on_board_count").text());
		var red_hole_count = parseInt($("#red_in_hole_count").text());
		if ((red_board_count + red_hole_count)<4){
			$("#red_on_board_count").empty();
			$("#red_on_board_count").append((red_board_count+1)+" On Board");
		} else {
			alert("You only have four bean bags!");
		};
	});

	$('#red_in_hole').on('click',function(e){
		e.preventDefault();
		var red_hole_count = parseInt($("#red_in_hole_count").text());
		var red_board_count = parseInt($("#red_on_board_count").text());
		if ((red_board_count + red_hole_count)<4){
			$("#red_in_hole_count").empty();
			$("#red_in_hole_count").append((red_hole_count+1)+" In Hole");
		} else {
			alert("You only have four bean bags!");
		};
	});

	$('#clear_red').on('click', function(e){
		e.preventDefault();
		$("#red_on_board_count").empty();
		$("#red_on_board_count").append("0 On Board");
		$("#red_in_hole_count").empty();
		$("#red_in_hole_count").append("0 In Hole");
	});

	$('#total').on('click',function(e){
		e.preventDefault();
		var blue_board_count = parseInt($("#blue_on_board_count").text());
		var blue_hole_count = parseInt($("#blue_in_hole_count").text());
		var red_board_count = parseInt($("#red_on_board_count").text());
		var red_hole_count = parseInt($("#red_in_hole_count").text());
		var blue_total = blue_board_count + (blue_hole_count*3);
		var red_total = red_board_count + (red_hole_count*3);

		if (blue_total > red_total){
			var new_points = blue_total - red_total;
			var current_points = parseInt($('#blue_score').text());
			var points = new_points + current_points;
			$('#blue_score').empty().append(points);
			check_total_score("Blue",points);
		} else if ( red_total > blue_total) {
			var new_points = red_total - blue_total;
			var current_points = parseInt($('#red_score').text());
			var points = new_points + current_points;
			$('#red_score').empty().append(points);
			check_total_score("Red",points);
		} else {
			alert("No points given!");
		}

		$("#blue_on_board_count").empty();
		$("#blue_on_board_count").append("0 On Board");
		$("#blue_in_hole_count").empty();
		$("#blue_in_hole_count").append("0 In Hole");
		$("#red_on_board_count").empty();
		$("#red_on_board_count").append("0 On Board");
		$("#red_in_hole_count").empty();
		$("#red_in_hole_count").append("0 In Hole");
	});

	$('#new_game').on('click', function(e){
		e.preventDefault();
		if (confirm("Are you sure you want to start a new game?")){
			start_new_game();	
		};
	});

});