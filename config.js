exports.config = {
	framework: 'jasmine',
	seleniumAdress: 'http://localhost:4444/wd/hub',
	specs: ['*.spec.js','spec.js'],


	params: {
		url:'https://www.etsy.com/'
	}, 

	onPrepare: function () {
		browser.ignoreSynchronization = true;
	}


}