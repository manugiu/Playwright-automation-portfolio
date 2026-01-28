# 🎭 Playwright E2E Automation Framework

[![Playwright Tests](https://github.com/manugiu/Playwright-automation-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/manugiu/Playwright-automation-portfolio/actions/workflows/playwright.yml)

A modern end-to-end testing framework built with Playwright and TypeScript, demonstrating professional test automation practices using the Page Object Model design pattern.

## 🛠 Technologies Used

- **Playwright** - Modern E2E Testing Framework
- **TypeScript** - Type-safe Programming Language
- **Page Object Model** - Design Pattern for Maintainable Tests
- **GitHub Actions** - CI/CD Pipeline

## 🌐 Application Under Test

This framework tests **[Automation Exercise](https://automationexercise.com/)** - a full-featured e-commerce demo application designed for test automation practice.

## 📁 Project Structure
```
playwright-automation-portfolio/
├── pages/                  # Page Object Models
│   ├── AuthPage.ts
│   └── CartPage.ts
|   ├── CheckoutPage.ts
│   └── HomePage.ts
│   └── PaymentPage.ts
|   ├── ProductsPage.ts
│   └── RegisterPage.ts
├── tests/                  # Test Files
│   ├── complete-checkout.spec.ts      # UI Tests
│   └── products.spec.ts        
│   └── user-auth.spec.ts       
├── .github/workflows/      # CI/CD Configuration
│   └── playwright.yml
├── playwright.config.ts    # Playwright Configuration
└── package.json
```

## ✅ Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/manugiu/playwright-automation-portfolio.git
cd playwright-automation-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install Playwright browsers:**
```bash
npx playwright install
```

## 🚀 Running Tests

### Run All Tests:
```bash
npx playwright test
```

### Run Specific Test File:
```bash
npx playwright test tests/user-auth.spec.ts
```

### Run with UI Mode (Interactive):
```bash
npx playwright test --ui
```

### Run in Headed Mode (See Browser):
```bash
npx playwright test --headed
```

### Run Specific Browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View HTML Report:
```bash
npx playwright show-report
```

## 🧪 Test Scenarios

### 🔐 User Authentication (user-auth.spec.ts)
- **User Registration** - Complete signup with form validation
- **User Login** - Authenticate with valid credentials

### 🛒 Shopping & Cart (products.spec.ts)
- **Add to Cart** - Add product and verify in cart
- **Remove from Cart** - Remove product and verify empty cart
- **Product Search** - Search with valid product name
- **Search Edge Case** - No results for invalid search
- **Browse by Category** - Navigate and filter products

### 💳 Checkout Flow (complete-checkout.spec.ts)
- **End-to-End Purchase** - Complete checkout with payment validation


## ⭐ Key Features

- ✨ **TypeScript** for type safety and better IDE support
- 📄 **Page Object Model** for maintainable and reusable code
- 🎯 **Positive & Negative Testing** covering success and error scenarios
- 🤖 **CI/CD Integration** with GitHub Actions
- 🎭 **Multi-Browser Testing** (Chromium, Firefox, WebKit)
- 📊 **HTML Reports** with screenshots and traces
- 🔧 **Professional Practices** following industry standards

## 🔄 CI/CD Integration

This project includes automated testing via **GitHub Actions**:

- ✅ Tests run automatically on every push to `main` branch
- ✅ Pull request validation
- ✅ Multi-browser testing in parallel
- ✅ Test reports and artifacts generated
- ✅ Screenshots and traces captured on failure

**View workflow:** [.github/workflows/playwright.yml](.github/workflows/playwright.yml)

## 📧 Contact

**Enzo Manuel Giuggiolini**  
- LinkedIn: [https://www.linkedin.com/in/enzo-manuel-giuggiolini/]
- Email: manuelgiuggiolini@gmail.com
- GitHub: [https://github.com/manugiu]

---

*This project was created as part of my QA Automation portfolio to demonstrate proficiency in Playwright, TypeScript, API Testing, and modern test automation practices.*
