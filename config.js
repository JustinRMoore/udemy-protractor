exports.config = {
	framework: 'jasmine',
	seleniumAdress: 'http://localhost:4444/wd/hub',
	specs: ['./pages/*/*.spec.js'],


	params: {
		url:'https://www.etsy.com/'
	}, 
	suites: {
		cart: 'pages/cart/*spec.js',
		home: 'pages/home/*spec.js',
		search: 'pages/search/*spec.js'
	},
	onPrepare: function () {
		browser.ignoreSynchronization = true;
	}


}