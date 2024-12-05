# Calculator Project

This is a simple, custom-built calculator that performs basic arithmetic operations, including addition, subtraction, multiplication, and division. The calculator also supports chaining multiple operations together, such as:

```
12 + 7 - 5 * 3
```

This expression is evaluated correctly for `42` following standard operator precedence.

## Features

- Perform basic arithmetic operations: 
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
- Chain multiple operations in a single calculation.
- Clear and user-friendly interface.

[**Try it out here!**](https://jaym9000.github.io/Calculator/)

## Challenges Faced

One of the biggest hurdles in building this calculator was effectively managing input values and operations. Specifically, the challenge was storing and handling the first and second numbers and executing the operation once all required inputs were provided.

### Solution
I overcame this challenge by introducing a temporary variable to track whether the first value had been stored. This helped smooth transitions between numbers and operators, ensuring accurate calculations even with chained operations.

## How It Works

1. **Input Numbers and Operators**  
   Enter numbers and operators sequentially. The calculator stores the inputs and performs calculations in the correct order.
   
2. **Operation Execution**  
   Once all inputs are provided, the calculator processes the expression based on operator precedence.

3. **Clear Button**  
   Reset the calculator at any time using the clear button.

## Technologies Used

- **HTML**: Structure of the calculator.
- **CSS**: Styling for a clean and modern design.
- **JavaScript**: Logic for calculations and user interactions.

## Demo

Check out the live demo [here](https://jaym9000.github.io/Calculator/).
