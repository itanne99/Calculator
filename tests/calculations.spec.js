const Calculation = require('../js/models/calculation');
const sum = require('../js/operations/sum');
const subtract = require('../js/operations/subtract');
const multiply = require('../js/operations/multiply');
const divide = require('../js/operations/divide');
const root = require('../js/operations/root');
const power = require('../js/operations/power');

test('Test of Calculation Instantiation', () => {
    let op = sum
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});
test('Test Get results for Sum function', () => {
    let op = sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.getResults()).toBe(3);
});
test('Test Get results for Difference function', () => {
    let op = subtract;
    let calculation = new Calculation(1,2,op);
    expect(calculation.getResults()).toBe(-1);
});
test('Test Get results for Product function', () => {
    let op = multiply;
    let calculation = new Calculation(1,2,op);
    expect(calculation.getResults()).toBe(2);
});
test('Test Get results for Quotient function', () => {
    let op = divide;
    let calculation = new Calculation(1,2,op);
    expect(calculation.getResults()).toBe(.5);
});
test('Test Get results for Square function', () => {
    let op = power;
    let calculation = new Calculation(3,2,op);
    expect(calculation.getResults()).toBe(9);
});
test('Test Get results for Root function', () => {
    let op = root;
    let calculation = new Calculation(9,2,op);
    expect(calculation.getResults()).toBe(3);
});