const Calculator = require('../js/calculator');
const csvReader = require('../js/csvReader/csvReader');
let csvFile = new csvReader();

test('Calculator adding two numbers', () => {
    for(row in csvFile.readCSV('tests/testCases/testSum.csv')){
        /*For row in csvReader*/
        let result = Calculator.sum(row[0],row[1]) /*row[0],row[1]*/
        expect(result).toBe(row[2]); /*toBe(row[2])*/
    }

});
test('Calculator difference between two numbers', () => {
    for(row in csvFile.readCSV('tests/testCases/testSubtraction.csv')) {
        let result = Calculator.subtract(row[0], row[1]) /*row[0],row[1]*/
        expect(result).toBe(row[2]); /*toBe(row[2])*/
    }
});
test('Calculator product of two numbers', () => {
    for(row in csvFile.readCSV('tests/testCases/testMultiply.csv')) {
        let result = Calculator.multiply(row[0], row[1]) /*row[0],row[1]*/
        expect(result).toBe(row[2]); /*toBe(row[2])*/
    }
});
test('Calculator quotient of two numbers', () => {
    for(row in csvFile.readCSV('tests/testCases/testDivide.csv')) {
        let result = Calculator.divide(row[0], row[1]) /*row[0],row[1]*/
        expect(result).toBe(row[2]); /*toBe(row[2])*/
    }
});
test('Calculator power squared of a number', () => {
    for(row in csvFile.readCSV('tests/testCases/testPower.csv')) {
        let result = Calculator.power(row[0], row[1]) /*row[0],row[1]*/
        expect(result).toBe(row[2]); /*toBe(row[2])*/
    }
});
test('Calculator squared root of a number', () => {
    for(row in csvFile.readCSV('tests/testCases/testRoot.csv')) {
        let result = Calculator.root(row[0], row[1]) /*row[0],row[1]*/
        expect(result).toBe(row[2]); /*toBe(row[2])*/
    }
});