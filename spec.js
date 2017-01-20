var helper=require('./helper');












describe('Main page : login/registar', function(){



	beforeEach(function(){
			browser.get(browser.params.url);
		});


	afterEach(function(){
			browser.manage().deleteAllCookies();
		});




	it('should have a title', function(){

		var pageTitle='Etsy.com | Shop for anything from creative people everywhere';
		expect(browser.getTitle()).toEqual(pageTitle);

	  });

	it('should sign in', function(){

		var signInOpenButton = element(by.id('sign-in'));
		var signInSubmitButton = element(by.id('signin-button'));
		var usernameField = element(by.id('username-existing'));
		var password = element(by.xpath(".//*[@id='password-existing']"));
		var passwordExistingError =element(by.id('password-existing-error'));

		signInOpenButton.click();
		helper.waitUntilReady(usernameField);
		usernameField.sendKeys('test@test.com');
		helper.waitUntilReady(usernameField);
		password.sendKeys('Password');

		signInSubmitButton.click();

		helper.waitUntilReady(passwordExistingError);
		expect(passwordExistingError.getText()).toBe('Password was incorrect.');


	  });

	it('should register a new user', function(){

		var registerOpenButton = element(by.xpath(".//*[@id='register']"));
		var fnField= element(by.xpath(".//*[@id='first-name']"));
		var lnField= element(by.xpath(".//*[@id='last-name']"));
		var genderField= element(by.xpath(".//*[@id='male']"));
		var emailField = element(by.xpath(".//*[@id='email']"));
		var passwordField = element(by.xpath(".//*[@id='password']"));
		var passwordConfirmField = element(by.xpath(".//*[@id='password-repeat']"));
		var userNameField = element(by.xpath(".//*[@id='username']"));
		var newsletterField= element(by.xpath(".//*[@id='etsy_finds']"));
		var registerSubmitButton= element(by.xpath(".//*[@id='register_button']"));

		registerOpenButton.click();

		helper.waitUntilReady(fnField);
		fnField.sendKeys('Bill');
		lnField.sendKeys('Bixby');
		genderField.click();
		emailField.sendKeys('test@test.com');

		passwordField.sendKeys('pa55word');
		passwordConfirmField.sendKeys('pa55word');

		userNameField.sendKeys('notHulk');

		newsletterField.click();


	});

});