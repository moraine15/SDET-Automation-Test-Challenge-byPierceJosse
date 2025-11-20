class LoginPage {
    // Using XPaths as requested
    get usernameInput() {
        return $('//*[@id="username"]');
    }

    get passwordInput() {
        return $('//*[@id="password"]');
    }

    get submitButton() {
        return $('//*[@id="submit"]');
    }

    get errorMessage() {
        return $('//*[@id="error"]');
    }

    // Methods must be async
    async open() {
        await browser.url('https://practicetestautomation.com/practice-test-login/');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed({ timeout: 3000 });
        return await this.errorMessage.getText();
    }

    async isErrorDisplayed() {
        return await this.errorMessage.isDisplayed();
    }
}

module.exports = new LoginPage();