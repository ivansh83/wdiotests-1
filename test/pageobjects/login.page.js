import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message'); }
    get loginValidationError () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]'); }

    async open () {
        return super.open('/user/login');
    }

    async setLogin (email) {
        return (await this.inputUsername).setValue(email);
    }

    async setPassword (password) {
        return (await this.inputPassword).setValue(password);
    }

    async clickSubmitButton () {
        return (await this.buttonSubmit).click();
    }

    async submitButtonIsDisabled() {
        return expect (this.buttonSubmit).toBeDisabled();
    }

    async errorToastAppeared() {
        return expect(this.errorToast).toBeDisplayed();
    }

    async emptyLoginInput() {
        return this.clearInput(await this.inputUsername);
    }

    async loginRequiredError() {
        await expect(this.loginValidationError).toBeDisplayed();
        await expect (this.loginValidationError).toHaveText('Required');
    }
}

export default new LoginPage();
