var request = require('request')

var colorArr = request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  JSON.parse(body)
})

var color = process.argv[2]
var colorSearch = function(color) {
	for(var i = 0; i < colorArr.length; i++){
		if(color.toLowerCase() === colorArr[i].toLowerCase()){
			console.log(colorArr[i])
		}
	}
}

colorSearch()