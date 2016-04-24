//var fs = require("fs");

$('#save-maze').click(function() {
	$.post('/save');
	/*
	var fileName = "../mazes/test.txt";
	
	fs.writeFile('fileName', 'Hello World!', function (err) {
		  if (err) return console.log(err);
		    console.log('Hello World > helloworld.txt');
	});
	*/
/*
	file.open("w");

	var rows = $('.maze').children('.maze-row').each(function() {});
	var cols;
	
	var i;
	var j;
	var str;
	for (i = 0; i < rows.length; i++) {
		cols = $(rows[i]).children('.maze-cell').each(function() {});	
		str = "";
		for (j = 0; j < cols.length; j++) {
			if (!("white").localeCompare((cols[j]).style.backgroundColor))			str += " ";
			else if (!("black").localeCompare((cols[j]).style.backgroundColor))	str += "X";
			else if (!("green").localeCompare((cols[j]).style.backgroundColor))	str += "S";
			else if (!("red").localeCompare((cols[j]).style.backgroundColor))		str += "E";
			else																						str += "?";
		}
		file.writeln(str);
	}	
	file.close();
	alert("finished saving");
*/
});
