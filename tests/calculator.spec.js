const Calculator = require('../js/calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.sum(1,2)
    expect(result).toBe(3);
});
test('Calculator difference between two numbers', () => {
    let result = Calculator.subtract(1,2);
    expect(result).toBe(-1);
});
test('Calculator product of two numbers', () => {
    let result = Calculator.multiply(1,2);
    expect(result).toBe(2);
});
test('Calculator quotient of two numbers', () => {
    let result = Calculator.divide(1,2);
    expect(result).toBe(.5);
});
test('Calculator power squared of a number', () => {
    let result = Calculator.power(3,2);
    expect(result).toBe(9);
});
test('Calculator squared root of a number', () => {
    let result = Calculator.root(9,2);
    expect(result).toBe(3);
});