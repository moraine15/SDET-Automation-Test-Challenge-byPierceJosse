class LoggedInPage {
    // XPath for "Logged In Successfully"
    get headerTitle() {
        return $('//*[@id="loop-container"]/div/article/div[1]/h1');
    }

    // XPath for "Congratulations..."
    get successMessage() {
        return $('//*[@id="loop-container"]/div/article/div[2]/p[1]/strong');
    }

    // XPath for Logout button (using text contains for safety)
    get logoutButton() {
        return $('//*[@id="loop-container"]/div/article/div[2]/div/div/div');
    }

    async getCurrentUrl() {
        return await browser.getUrl();
    }

    async getSuccessMessage() {
        return await this.successMessage.getText();
    }
    
    async getHeaderText() {
        return await this.headerTitle.getText();
    }

    async isLogoutButtonDisplayed() {
        return await this.logoutButton.isDisplayed();
    }
}

module.exports = new LoggedInPage();