const Calculation = require('../js/models/calculation');
const sum = require('../js/operations/sum');
const subtract = require('../js/operations/subtract');
const multiply = require('../js/operations/multiply');
const divide = require('../js/operations/divide');
const root = require('../js/operations/root');
const power = require('../js/operations/power');

test('Test of Calculation Instantiation', () => {
    let calculation = new Calculation(1,2,sum);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(sum);
});
test('Test Get results for Sum function', () => {
    /*For row in csvReader*/
    let calculation = new Calculation(1,2,sum); /*row[0],row[1],op*/
    expect(calculation.getResults()).toBe(3); /*toBe(row[2])*/
});
test('Test Get results for Difference function', () => {
    let calculation = new Calculation(1,2,subtract);
    expect(calculation.getResults()).toBe(-1);
});
test('Test Get results for Product function', () => {
    let calculation = new Calculation(1,2,multiply);
    expect(calculation.getResults()).toBe(2);
});
test('Test Get results for Quotient function', () => {
    let calculation = new Calculation(1,2,divide);
    expect(calculation.getResults()).toBe(.5);
});
test('Test Get results for Square function', () => {
    let calculation = new Calculation(3,2,power);
    expect(calculation.getResults()).toBe(9);
});
test('Test Get results for Root function', () => {
    let calculation = new Calculation(9,2,root);
    expect(calculation.getResults()).toBe(3);
});