#!/usr/bin/env python3
"""
Simple Calculator Program
Performs basic arithmetic operations: addition, subtraction, multiplication, and division.
"""

def add(a, b):
    """Add two numbers."""
    return a + b

def subtract(a, b):
    """Subtract b from a."""
    return a - b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

def divide(a, b):
    """Divide a by b."""
    if b == 0:
        return "Error: Division by zero"
    return a / b

def main():
    """Main function to run the calculator."""
    print("Simple Calculator")
    print("Operations: +, -, *, /")
    print("Type 'quit' to exit")
    
    while True:
        user_input = input("\nEnter calculation (e.g., 5 + 3): ").strip()
        
        if user_input.lower() == 'quit':
            print("Goodbye!")
            break
        
        try:
            parts = user_input.split()
            if len(parts) != 3:
                print("Invalid format. Use: number operator number")
                continue
            
            num1 = float(parts[0])
            operator = parts[1]
            num2 = float(parts[2])
            
            if operator == '+':
                result = add(num1, num2)
            elif operator == '-':
                result = subtract(num1, num2)
            elif operator == '*':
                result = multiply(num1, num2)
            elif operator == '/':
                result = divide(num1, num2)
            else:
                print(f"Unknown operator: {operator}")
                continue
            
            print(f"Result: {result}")
        except ValueError:
            print("Invalid numbers. Please enter valid numbers.")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    main()
