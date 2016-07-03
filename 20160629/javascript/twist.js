fs = require('fs');

var original_text = fs.readFile('../input.txt', function (err, data) {
	console.log(data);
});
