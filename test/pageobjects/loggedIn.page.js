class LoggedInPage {
  // Judul sukses login
  get headerTitle() {
    return $('//*[@id="loop-container"]/div/article/div[1]/h1');
  }

  // Pesan sukses
  get successMessage() {
    return $('//*[@id="loop-container"]/div/article/div[2]/p[1]/strong');
  }

  // Tombol logout
  get logoutButton() {
    return $('//*[@id="loop-container"]/div/article/div[2]/div/div/div');
  }

  // Ambil URL saat ini
  async getCurrentUrl() {
    return await browser.getUrl();
  }

  // Ambil teks pesan sukses
  async getSuccessMessage() {
    return await this.successMessage.getText();
  }

  // Ambil teks header
  async getHeaderText() {
    return await this.headerTitle.getText();
  }

  // Cek apakah tombol logout tampil
  async isLogoutButtonDisplayed() {
    return await this.logoutButton.isDisplayed();
  }
}

module.exports = new LoggedInPage();
