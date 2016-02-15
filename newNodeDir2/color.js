var request = require('request')



var obj = JSON.parse(request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json'))

console.log(obj)