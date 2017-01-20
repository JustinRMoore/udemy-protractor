describe('Cart page: login/registar', function(){



	beforeEach(function(){
			browser.get(browser.params.url);
		});


	afterEach(function(){
			browser.manage().deleteAllCookies();
		});


	it ('should navigate to the cart and verify it is empty', function(){

	var cartButton = element(by.xpath(".//*[@id='gnav-header-inner']/div/ul/li[4]/a"));
	// .//*[@id='gnav-header-inner']/div/ul/li[4]/a


	cartButton.click();

	var cartMessage = element(by.xpath(".//*[@id='newempty']/div/h2"));


	expect(cartMessage.getText()).toEqual('Your cart is empty.');




	});


});