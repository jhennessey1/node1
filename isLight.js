var luminosity = (process.argv[2] * .2126) + (process.argv[3] * .7152) + (process.argv[4] * .0722)

if(luminosity > 155){
	console.log('light')
}
else {
	console.log('dark')
}