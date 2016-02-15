module.exports = {
};

var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]

var darkR = r*.8
var darkG = g*.8
var darkB = b*.8

module.exports.luminosity = (r * .2126) + (g * .7152) + (b * .0722)

module.exports.darken = darkR + ' ' + darkG + ' ' + darkB