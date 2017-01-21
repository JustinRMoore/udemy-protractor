var helper=require('./../../helper');




describe('Search field test', function(){



	beforeEach(function(){
			browser.get(browser.params.url);
		});


	afterEach(function(){
			browser.manage().deleteAllCookies();
		});


	it ('should use search field', function(){
		var searchField = element(by.id("search-query"));
		var searchButton = element(by.xpath(".//*[@id='search-bar']/div/div[2]/button"));
		var firstBox =  element(by.xpath(".//*[@id='content']/div/div/div[2]/div/div[1]/div/div[5]/div/div[1]/a/div[2]/div/div[1]"));



		searchField.sendKeys('Pickles');
		searchButton.click();

		helper.waitUntilReady(firstBox);

		firstBox.getText().then(function(text) {
		  console.log(" YOUR STRING :" +text+": Good day sir!");
		});


		firstBox.click()

	});




});