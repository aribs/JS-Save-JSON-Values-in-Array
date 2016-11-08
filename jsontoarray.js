//Convert in array all objects in JSON 
//Dependencies:
// count2word  npm i -S count2word

//read file
var tags = fs.readFileSync('options/tags.json', 'utf8');
// parse string of file
var jsonTags = JSON.parse(tags);
//empty array
var arrayTags = [];
//loops to revise and push all properties of object
for (var key in jsonTags) {
    // skip loop if the property is from prototype
    if (!jsonTags.hasOwnProperty(key)) continue;

    var obj = jsonTags[key];
    for (var prop in obj) {
       arrayTags.push(obj[prop]);
    }
}
console.log(arrayTags);