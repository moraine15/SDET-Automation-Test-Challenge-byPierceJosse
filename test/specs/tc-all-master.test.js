const LoginPage = require('../pageobjects/login.page');
const LoggedInPage = require('../pageobjects/loggedIn.page');
const assert = require('assert');

describe('Login Functionality Tests', () => {

    // Hook ini akan jalan SEBELUM setiap test case (it) dimulai
    // Jadi browser akan selalu reload halaman login sebelum test baru
    beforeEach(async () => {
        await LoginPage.open();
    });

    // --- CASE 1: POSITIVE ---
    it('TC1 - Should login successfully with valid credentials', async () => {
        // Login dengan data benar
        await LoginPage.login('student', 'Password123');
        
        // Verifikasi URL
        const currentUrl = await LoggedInPage.getCurrentUrl();
        assert.ok(currentUrl.includes('logged-in-successfully'), 
            `URL salah. Actual: ${currentUrl}`);
        
        // Verifikasi Teks
        const headerText = await LoggedInPage.getHeaderText();
        const bodyText = await LoggedInPage.getSuccessMessage();
        
        assert.ok(headerText.includes('Logged In Successfully'), 'Header text salah');
        assert.ok(bodyText.includes('Congratulations') || bodyText.includes('successfully logged in'), 'Body text salah');
        
        // Verifikasi tombol Logout
        const isLogoutDisplayed = await LoggedInPage.isLogoutButtonDisplayed();
        assert.strictEqual(isLogoutDisplayed, true, 'Logout button harusnya muncul');
        
        console.log('✓ TC1 Passed');
    });

    // --- CASE 2: NEGATIVE USERNAME ---
    it('TC2 - Should show error message with invalid username', async () => {
        // Login username salah
        await LoginPage.login('incorrectUser', 'Password123');
        
        // Verifikasi Error
        const isErrorDisplayed = await LoginPage.isErrorDisplayed();
        assert.strictEqual(isErrorDisplayed, true, 'Pesan error harusnya muncul');
        
        const errorText = await LoginPage.getErrorMessage();
        assert.strictEqual(errorText, 'Your username is invalid!', 
            `Teks error username salah. Actual: ${errorText}`);
            
        console.log('✓ TC2 Passed');
    });

    // --- CASE 3: NEGATIVE PASSWORD ---
    it('TC3 - Should show error message with invalid password', async () => {
        // Login password salah
        await LoginPage.login('student', 'incorrectPassword');
        
        // Verifikasi Error
        const isErrorDisplayed = await LoginPage.isErrorDisplayed();
        assert.strictEqual(isErrorDisplayed, true, 'Pesan error harusnya muncul');
        
        const errorText = await LoginPage.getErrorMessage();
        assert.strictEqual(errorText, 'Your password is invalid!', 
            `Teks error password salah. Actual: ${errorText}`);
            
        console.log('✓ TC3 Passed');
    });

});