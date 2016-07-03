fs = require('fs');

var original_text = fs.readFile('../input.txt', 'utf-8', function (err, data) {
	console.log(data);
});
