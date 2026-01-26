#!/usr/bin/env node
/**
 * Data Formatter Program
 * Formats data in different ways: JSON, CSV, table format
 */

// Sample data
const sampleData = [
    { id: 1, name: "Alice", age: 30, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 35, city: "Chicago" },
    { id: 4, name: "Diana", age: 28, city: "Houston" }
];

/**
 * Format data as JSON
 */
function formatAsJSON(data) {
    return JSON.stringify(data, null, 2);
}

/**
 * Format data as CSV
 */
function formatAsCSV(data) {
    if (data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvHeaders = headers.join(',');
    
    const csvRows = data.map(row => {
        return headers.map(header => {
            const value = row[header];
            // Escape commas, quotes, and newlines per RFC 4180
            if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
                return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
        }).join(',');
    });
    
    return [csvHeaders, ...csvRows].join('\n');
}

/**
 * Format data as a table
 */
function formatAsTable(data) {
    if (data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    
    // Calculate column widths
    const widths = headers.map(header => {
        const values = data.map(row => String(row[header]));
        return Math.max(header.length, ...values.map(v => v.length));
    });
    
    // Create separator
    const separator = '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+';
    
    // Create header row
    const headerRow = '|' + headers.map((h, i) => 
        ` ${h.padEnd(widths[i])} `
    ).join('|') + '|';
    
    // Create data rows
    const dataRows = data.map(row => 
        '|' + headers.map((h, i) => 
            ` ${String(row[h]).padEnd(widths[i])} `
        ).join('|') + '|'
    );
    
    return [separator, headerRow, separator, ...dataRows, separator].join('\n');
}

/**
 * Main function
 */
function main() {
    console.log('Data Formatter Program');
    console.log('='.repeat(50));
    
    console.log('\nOriginal Data:');
    console.log(sampleData);
    
    console.log('\n' + '='.repeat(50));
    console.log('JSON Format:');
    console.log('='.repeat(50));
    console.log(formatAsJSON(sampleData));
    
    console.log('\n' + '='.repeat(50));
    console.log('CSV Format:');
    console.log('='.repeat(50));
    console.log(formatAsCSV(sampleData));
    
    console.log('\n' + '='.repeat(50));
    console.log('Table Format:');
    console.log('='.repeat(50));
    console.log(formatAsTable(sampleData));
}

// Run the program
main();
