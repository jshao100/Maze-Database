$('#create-maze').click(function() {
	var width = $('#width').val();
	var height = $('#height').val();
	var scale_factor = 1;

	var maze_height = 0;
	var maze_width = 0;

	if (!isNumeric(width) || !isNumeric(height)) {
		alert("Please enter values for width and height");
	} else {
		width = Math.floor(width);
		height = Math.floor(height);

		if (width > 30) {
			width = 30;
			$('#width').val("30");
		}
		if (height > 30) {
			height = 30;
			$('#height').val("30");
		}

		if (height > width)	scale_factor = 600/height;
		else						scale_factor = 600/width;
	
		createMaze(scale_factor, width, height);

		drawMaze();
	}
	
});

function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}

function createMaze(scale, w, h) {
	$(".maze-row").remove();
	$(".maze-cell").remove();
	
	$(".maze").css("width",(scale*w)+2);
	$(".maze").css("border","solid 1px black");

	var i;
	for(i = 0; i < h; i++) {
		$(".maze").append('<div class="maze-row"></div>');
	}
	for(i = 0; i < w; i++) {
		$(".maze-row").append('<div class="maze-cell"></div>');
	}

	$(".maze-row").css("height",scale);
	$(".maze-cell").css("height",scale);
	$(".maze-cell").css("width",scale);
	$(".maze-cell").css("background-color","white");

	return;	
}

function drawMaze() {
	$(".maze-cell").click(function() {
		//var check = $(event.target).css();
		if (!("white").localeCompare((event.target).style.backgroundColor)) {
			$(event.target).css("background-color","black");
		} else if (!("black").localeCompare((event.target).style.backgroundColor)) { 
			$(event.target).css("background-color","white");
		}
	});
}
