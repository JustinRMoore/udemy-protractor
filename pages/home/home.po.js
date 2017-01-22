var helper = require('./../../helper');




var HomePage = function() {

		this.pageTitle='Etsy.com | Shop for anything from creative people everywhere';
		this.passwordErrorTxt ='Password was incorrect.';

//for sign in test
		this.signInOpenButton = element(by.id('sign-in'));
		this.signInSubmitButton = element(by.id('signin-button'));
		this.usernameField = element(by.id('username-existing'));
		this.password = element(by.xpath(".//*[@id='password-existing']"));
		this.passwordExistingError =element(by.id('password-existing-error'));

//	for register test
		this.registerOpenButton = element(by.xpath(".//*[@id='register']"));
		this.fnField= element(by.xpath(".//*[@id='first-name']"));
		this.lnField= element(by.xpath(".//*[@id='last-name']"));
		this.genderField= element(by.xpath(".//*[@id='male']"));
		this.emailField = element(by.xpath(".//*[@id='email']"));
		this.passwordField = element(by.xpath(".//*[@id='password']"));
		this.passwordConfirmField = element(by.xpath(".//*[@id='password-repeat']"));
		this.userNameField = element(by.xpath(".//*[@id='username']"));
		this.newsletterField= element(by.xpath(".//*[@id='etsy_finds']"));
		this.registerSubmitButton= element(by.xpath(".//*[@id='register_button']"));

		this.goToRegister = function(){
			helper.waitElementToBeClickable(this.registerOpenButton);
			this.registerOpenButton.click();
		}

}


module.exports = HomePage;
