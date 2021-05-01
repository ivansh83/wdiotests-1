import LoginPage from '../test/pageobjects/login.page';
import ProfilePage from '../test/pageobjects/portal/profile.portal.page';
import { config } from 'dotenv';

module.exports = {
    before: function (capabilities, specs) {
        config();
        browser.addCommand('login', function (username, password) {
            LoginPage.open();
            LoginPage.setLogin(username);
            LoginPage.setPassword(password);
            LoginPage.clickSubmitButton();
            ProfilePage.isOpen();
        })
    },

    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            browser.takeScreenshot();
        }
    }
}
