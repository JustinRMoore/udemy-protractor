var CartPage =require('./cart.po.js');
var CommonElements =require('../common/common.po.js');

var commonElements = new CommonElements();
var cartPage = new CartPage();


describe('Cart test', function(){

			beforeEach(function(){
					browser.get(browser.params.url);
				});


			afterEach(function(){
					browser.manage().deleteAllCookies();
				});


	it ('should check cart is empty', function(){
	
		commonElements.cartButton.click();
		expect(cartPage.errorMessageEmptyCart.getText()).toBe(cartPage.emptyCartMessage);


	});




});