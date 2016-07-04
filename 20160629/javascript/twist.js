fs = require('fs');

const lookup = {
    'a': 'áăắặằẳẵǎâấậầẩẫäạàảāąåǻãɑɐɒ',
    'b': 'ḅɓß♭␢Б',
    'c': 'ćčçĉɕċ',
    'd': 'ďḓḍɗḏđɖ',
    'e': 'éĕěêếệềểễëėẹèẻēęẽɘəɚ',
    'f': 'ƒſʃʆʅɟʄ',
    'g': 'ǵğǧģĝġɠḡɡ',
    'h': 'ḫĥḥɦẖħɧ',
    'i': 'íĭǐîïịìỉīįɨĩɩı',
    'j': 'ǰĵʝȷɟʄ',
    'k': 'ķḳƙḵĸʞ',
    'l': 'ĺƚɬľļḽḷḹḻŀɫɭł',
    'm': 'ḿṁṃɱɯɰ',
    'n': 'ŉńňņṋṅṇǹɲṉɳñŋ',
    'o': 'óŏǒôốộồổỗöọőòỏơớợờởỡōǫøǿõɵʘ',
    'p': 'ɸþᵱƥᵽṗṕ',
    'q': 'ʠꝗɋq̃ϙ',
    'r': 'ŕřŗṙṛṝɾṟɼɽɿɹɻ',
    's': 'śšşŝșṡṣʂ',
    't': 'ťţṱțẗṭṯʈŧ',
    'u': 'ʉúŭǔûüǘǚǜǖụűùủưứựừửữūųůũʊ',
    'v': 'ʋʌⱴṿṽ',
    'w': 'ẃŵẅẁʍ',
    'x': 'χẍẋⲭ',
    'y': 'ýŷÿẏỵỳƴỷȳỹʎ',
    'z': 'źžʑżẓẕʐƶ',
    'A': 'ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄẠÀẢĀĄÅǺÃ',
    'B': 'ḄƁᛒ𐌱ɃḂḆ฿β',
    'C': 'ĆČÇĈĊƆʗ',
    'D': 'ĎḒḌƊḎĐÐ',
    'E': 'ÉĔĚÊẾỆỀỂỄËĖẸÈẺĒĘẼƐ',
    'F': 'ƑḞ𐌅₣',
    'G': 'ǴĞǦĢĜĠḠʛ',
    'H': 'ḪĤḤĦ',
    'I': 'ÍĬǏÎÏİỊÌỈĪĮĨ',
    'J': 'ĴɈʝ',
    'K': 'ĶḲƘḴ',
    'L': 'ĹȽĽĻḼḶḸḺĿŁ',
    'M': 'ḾṀṂ',
    'N': 'ŃŇŅṊṄṆǸƝṈÑ',
    'O': 'ÓŎǑÔỐỘỒỔỖÖỌŐÒỎƠỚỢỜỞỠŌƟǪØǾÕ',
    'P': 'Þ𐌐ṔṖⱣƤ₱♇',
    'Q': 'ꝖɊ',
    'R': 'ŔŘŖṘṚṜṞʁ',
    'S': 'ŚŠŞŜȘṠṢ',
    'T': 'ŤŢṰȚṬṮŦ',
    'U': 'ÚŬǓÛÜǗǙǛǕỤŰÙỦƯỨỰỪỬỮŪŲŮŨ',
    'V': 'ṼṾƲ℣∨',
    'W': 'ẂŴẄẀʬ',
    'X': 'χẌẊⲬ𐍇',
    'Y': 'ÝŶŸẎỴỲƳỶȲỸ',
    'Z': 'ŹŽŻẒẔƵ'
}

var twistUp = function (data) {

	var output_data = '';

	for (var i = 0; i < data.length; i++) {
		var current_char = data[i];
		var lookup_position = lookup[current_char];

		if (lookup_position != undefined) {
			var lookup_position_ar = lookup_position.split('');
			var new_char = lookup_position_ar[Math.floor(Math.random() * lookup_position_ar.length)];
			output_data += new_char;
		} else {
			output_data += current_char;
		}

	}

	return output_data;
}

fs.readFile('../input.txt', 'utf-8', function(err, data) {
	console.log(twistUp(data));
});
