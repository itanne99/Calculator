const Calculator_singleton = require('../js/calculator_singleton');
const calculator = new Calculator_singleton();

test('Calculator adding two numbers', () => {
    console.log("*******","Testing addition","*******");
    console.log(calculator.calculations);
    expect(calculator.sum(10,2)).toBe(12);
    console.log(calculator.calculations);
});

test('Calculator difference between two numbers', () => {
    console.log("*******","Testing subtraction","*******");
    console.log(calculator.calculations);
    expect(calculator.subtract(10,2)).toBe(8);
    console.log(calculator.calculations);
});

test('Calculator product of two numbers', () => {
    console.log("*******","Testing Multiplication","*******");
    console.log(calculator.calculations);
    expect(calculator.multiply(10,2)).toBe(20);
    console.log(calculator.calculations);
});

test('Calculator quotient of two numbers', () => {
    console.log("*******","Testing Division","*******");
    console.log(calculator.calculations);
    expect(calculator.divide(10,2)).toBe(5);
    console.log(calculator.calculations);
});

test('Calculator power squared of a number', () => {
    console.log("*******","Testing Square","*******");
    console.log(calculator.calculations);
    expect(calculator.power(5,2)).toBe(25);
    console.log(calculator.calculations);
});

test('Calculator squared root of a number', () => {
    console.log("*******","Testing Root","*******");
    console.log(calculator.calculations);
    expect(calculator.root(144,2)).toBe(12);
    console.log(calculator.calculations);
});