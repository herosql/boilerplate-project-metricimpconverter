# Metric-Imperial Unit Converter

### 🎯 Objective
A high-precision unit conversion microservice that handles transitions between Metric and Imperial systems (Gallons/Liters, Miles/Kilometers, Pounds/Kilograms). This project focuses on complex string parsing logic and strict Test-Driven Development (TDD).

### 🛠 Tech Stack
- **Backend:** Node.js & Express
- **Logic:** JavaScript (ES6) / Mathematics
- **Testing:** Chai & Mocha (Heavy Unit & Functional Testing)

### 🚀 Key Features
- **Sophisticated Input Parsing:** A custom-built parser that handles integers, decimals, and fractions (e.g., `3.5`, `1/2`, `5.4/3`). 
- **Bidirectional Conversion:** - gal ↔ L
    - lbs ↔ kg
    - mi ↔ km
- **High-Precision Calculation:** Implements fixed-point rounding (to 5 decimal places) to ensure numerical consistency across conversions.
- **Strict Error Handling:** Provides granular error responses for "invalid number", "invalid unit", or "invalid number and unit" scenarios.
- **Robust Test Suite:** - **Unit Tests:** 16+ tests covering every possible numerical input variation and conversion logic.
    - **Functional Tests:** Comprehensive API endpoint testing to ensure the correct JSON structure and error codes.

### 🧪 Technical Highlight
The core challenge of this project was implementing a **fractional parser without using `eval()`**, ensuring security while managing complex inputs like double-fractions (which are invalidated) and float-point divisions.
