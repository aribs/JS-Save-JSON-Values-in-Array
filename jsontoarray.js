//Convert in array all objects in JSON and compare and count  tags
//Dependencies:
// count2word  npm i -S count2word

//read file
var fs = require('fs');
const count2Word = require('count2word');


var tags = fs.readFileSync('options/tags.json', 'utf8');
var arrayTags = getArrayTags(tags)



var contents = fs.readFileSync('textTest.txt', 'utf8');

var arrayWords = count2Word(contents);

var affinities = [];

for (i in arrayTags){
	if(arrayWords[arrayTags[i]]){
		affinities.push(arrayTags[i] + " " + arrayWords[arrayTags[i]]);

	}
}
console.log(affinities);


function getArrayTags(jsonTag){	
	var jsonTags = JSON.parse(tags);
	var arrayTags = [];
	for (var key in jsonTags) {
	    // skip loop if the property is from prototype
	    if (!jsonTags.hasOwnProperty(key)) continue;
	    	var obj = jsonTags[key];
		    for (var prop in obj) {
		       arrayTags.push(obj[prop]);
		    }
	}
	 return arrayTags;	
}