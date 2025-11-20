class LoginPage {
    // Input username
    get usernameInput() {
        return $('//*[@id="username"]');
    }

    // Input password
    get passwordInput() {
        return $('//*[@id="password"]');
    }

    // Tombol kirim / login
    get submitButton() {
        return $('//*[@id="submit"]');
    }

    // Elemen pesan error
    get errorMessage() {
        return $('//*[@id="error"]');
    }

    // Buka halaman login
    async open() {
        await browser.url('https://practicetestautomation.com/practice-test-login/');
    }

    // Lakukan proses login
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    // Ambil teks error
    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed({ timeout: 3000 });
        return await this.errorMessage.getText();
    }

    // Cek apakah error tampil
    async isErrorDisplayed() {
        return await this.errorMessage.isDisplayed();
    }
}

module.exports = new LoginPage();