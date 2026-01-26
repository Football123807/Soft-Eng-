#!/usr/bin/env node
/**
 * Number Utilities Program
 * Provides various number-related utility functions
 */

const SEPARATOR = '='.repeat(50);

/**
 * Check if a number is prime
 */
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

/**
 * Calculate factorial
 */
function factorial(n) {
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Calculate Fibonacci sequence up to n terms
 */
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

/**
 * Find GCD (Greatest Common Divisor)
 */
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * Find LCM (Least Common Multiple)
 */
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

/**
 * Main function to demonstrate utilities
 */
function main() {
    console.log('Number Utilities Program');
    console.log(SEPARATOR);
    
    // Prime numbers
    console.log('\nPrime Numbers from 1 to 30:');
    const primes = [];
    for (let i = 1; i <= 30; i++) {
        if (isPrime(i)) primes.push(i);
    }
    console.log(primes.join(', '));
    
    // Factorials
    console.log('\nFactorials:');
    for (let i = 0; i <= 10; i++) {
        console.log(`${i}! = ${factorial(i)}`);
    }
    
    // Fibonacci
    console.log('\nFirst 15 Fibonacci numbers:');
    console.log(fibonacci(15).join(', '));
    
    // GCD and LCM
    console.log('\nGCD and LCM examples:');
    const pairs = [[12, 18], [24, 36], [7, 13]];
    pairs.forEach(([a, b]) => {
        console.log(`GCD(${a}, ${b}) = ${gcd(a, b)}, LCM(${a}, ${b}) = ${lcm(a, b)}`);
    });
}

// Run the program
main();
