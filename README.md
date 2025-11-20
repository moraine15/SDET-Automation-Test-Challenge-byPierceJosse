# Login Automation with WebdriverIO

This repository contains an automated End-to-End (E2E) test suite for the Login functionality of [Practice Test Automation](https://practicetestautomation.com/practice-test-login/).

The project is built using **JavaScript** and **WebdriverIO**, following the **Page Object Model (POM)** design pattern for maintainability and clean code architecture.

## 🛠 Tech Stack

* **Language:** JavaScript (Node.js)
* **Framework:** [WebdriverIO (v9)](https://webdriver.io/)
* **Assertion:** Node.js native `assert`
* **Test Runner:** Mocha

## Test Scenarios

The suite covers 3 main test cases:

1.  **Positive Login Test:** Verifies successful login with valid credentials, checks redirection URL, success message, and logout button visibility.
2.  **Negative Username Test:** Verifies error message display when entering an invalid username.
3.  **Negative Password Test:** Verifies error message display when entering an invalid password.

## 📂 Project Structure

This project follows strict OOP principles using the Page Object Model (POM):

```text
├── test
│   ├── pageobjects       # Page Classes (Locators & Methods)
│   │   ├── login.page.js
│   │   └── loggedIn.page.js
│   └── specs             # Test Scripts (Logic & Assertions)
│       └── tc-all-master.test.js
├── wdio.conf.js          # WebdriverIO Configuration
└── package.json
````

## 🚀 Getting Started

### Prerequisites

  * Node.js installed (v16 or higher recommended)

### Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/moraine15/SDET-Automation-Test-Challenge-byPierceJosse.git](https://github.com/moraine15/SDET-Automation-Test-Challenge-byPierceJosse.git)
cd SDET-Automation-Test-Challenge-byPierceJosse
npm install
```

### Running Tests

Execute the test suite using the following command:

```bash
npx wdio run wdio.conf.js
```

## ✅ Verification

The script ensures:

  * Correct URL redirection upon success.
  * Visibility of critical UI elements (Logout button).
  * Exact text matching for success and error messages.

-----

## 📊 Execution Results

The automation script has been executed successfully. Below is the latest test run output showing all 3 scenarios passed.


```text
Execution of 1 workers started at 2025-11-20T14:35:56.358Z


https://github.com/user-attachments/assets/8897bc8f-b00a-44ba-aa8f-67bb236ee68a


[chrome 133.0.6943.100 windows #0-0] Running: chrome (v133.0.6943.100) on windows
[chrome 133.0.6943.100 windows #0-0] Session ID: afa00be39c2bea7cf559071ee623717d
[chrome 133.0.6943.100 windows #0-0]
[chrome 133.0.6943.100 windows #0-0] » test\specs\tc-all-master.test.js
[chrome 133.0.6943.100 windows #0-0] Login Functionality Tests
[chrome 133.0.6943.100 windows #0-0]    ✓ TC1 - Should login successfully with valid credentials
[chrome 133.0.6943.100 windows #0-0]    ✓ TC2 - Should show error message with invalid username
[chrome 133.0.6943.100 windows #0-0]    ✓ TC3 - Should show error message with invalid password
[chrome 133.0.6943.100 windows #0-0]
[chrome 133.0.6943.100 windows #0-0] 3 passing (3.8s)

Spec Files:      1 passed, 1 total (100% completed) in 00:00:06
```

*Happy Testing\!*
