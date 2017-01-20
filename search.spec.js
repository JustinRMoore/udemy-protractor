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





	searchField.sendKeys('Pickels');
	searchButton.click();




	});


});