# Simple Angular Ionic Calculator App
This is a simple calculator application built using Angular and Ionic frameworks. It allows users to perform basic arithmetic calculations such as addition, subtraction, multiplication, and division. The app is available as a web application and an iOS app built using Capacitor.

## Features

- Addition: Allows users to add numbers together.
- Subtraction: Allows users to subtract one number from another.
- Multiplication: Allows users to multiply two numbers.
- Division: Allows users to divide one number by another.
- Error Handling: Provides error handling for invalid expressions or division by zero.

## Getting Started

To get started with the calculator app, follow the instructions below:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org](https://nodejs.org).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/calculator-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd calculator-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Web App

1. Start the development server:

   ```bash
   ionic serve
   ```

2. Open your web browser and visit `http://localhost:8100` to access the calculator app.

### Running the iOS App

1. Install the necessary dependencies:

   ```bash
   npm install -g @capacitor/cli
   ```

2. Add the iOS platform:

   ```bash
   ionic capacitor add
   ```

3. Build the project:

   ```bash
   ionic build
   ```

4. Open the project in Xcode:

   ```bash
   npx cap open ios
   ```

5. In Xcode, you can run the app on an iOS simulator or connect your iOS device to run the app on the device.

## Usage

1. Enter the numbers and operators using the buttons on the calculator UI.
2. Press the `=` button to evaluate the expression and display the result.
3. Use the `AC` button to clear the input and start a new calculation.

