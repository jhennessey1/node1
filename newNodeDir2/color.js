var request = require('request')

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var colorArr = JSON.parse(body)

    var color = process.argv[2]

    for(var i = 0; i < colorArr.length; i++) {
    	if(colorArr[i].name.toLowerCase() === color.toLowerCase().split(' ').join('')) {
    		console.log(colorArr[i].rgb.r, colorArr[i].rgb.g, colorArr[i].rgb.b)
    	}
    } 
  }
})

