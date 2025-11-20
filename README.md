# Login Automation with WebdriverIO

This repository contains an automated End-to-End (E2E) test suite for the Login functionality of [Practice Test Automation](https://practicetestautomation.com/practice-test-login/).

The project is built using **JavaScript** and **WebdriverIO**, following the **Page Object Model (POM)** design pattern for maintainability and clean code architecture.

## 🛠 Tech Stack

* **Language:** JavaScript (Node.js)
* **Framework:** [WebdriverIO (v9)](https://webdriver.io/)
* **Assertion:** Node.js native `assert`
* **Test Runner:** Mocha

## ww Test Scenarios

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

*Happy Testing\!*
