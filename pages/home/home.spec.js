var HomePage  = require('./home.po.js');
var helper = require('./../../helper');
var faker = require('faker');


var homePg = new HomePage();



describe('Main page : login/registar', function(){

		var fn= faker.name.firstName();
		var ln= faker.name.lastName();
		var em = faker.internet.email();
		var pas = faker.internet.password();

	beforeEach(function(){
			browser.get(browser.params.url);
		});

	afterEach(function(){
			browser.manage().deleteAllCookies();
		});

	it('should have a title', function(){
		expect(browser.getTitle()).toEqual(homePg.pageTitle);
	});

	it('should attempt to signin and verify incorrect password message', function(){
		homePg.signInOpenButton.click();
		helper.waitUntilReady(homePg.usernameField);
		homePg.usernameField.sendKeys('test@test.com');
	  helper.waitUntilReady(homePg.usernameField);
		homePg.password.sendKeys('Password');
		homePg.signInSubmitButton.click();
		helper.waitUntilReady(homePg.passwordExistingError);
		expect(homePg.passwordExistingError.getText()).toBe(homePg.passwordErrorTxt);
  });

	it('should register a new user', function(){
		homePg.registerOpenButton.click();
		helper.waitUntilReady(homePg.fnField);
		homePg.fnField.sendKeys(fn);
		homePg.lnField.sendKeys(ln);
		homePg.genderField.click();
		homePg.emailField.sendKeys(em);
		homePg.passwordField.sendKeys(pas);
		homePg.passwordConfirmField.sendKeys(pas);
		homePg.userNameField.sendKeys('notHulk');
		homePg.newsletterField.click();
	});

});
