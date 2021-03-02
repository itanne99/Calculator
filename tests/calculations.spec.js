const Calculation = require('../js/models/calculation');
const sum = require('../js/operations/sum');
const subtract = require('../js/operations/subtract');
const multiply = require('../js/operations/multiply');
const divide = require('../js/operations/divide');
const root = require('../js/operations/root');
const power = require('../js/operations/power');
const CSVFile = require('../js/csvReader/CSVReader');

test('Test Get results for Sum function', () => {
    /*For row in csvReader*/
    CSVFile.getRecords('testCases/testSum.csv').forEach(function(row, index){
        let calculation = new Calculation(parseInt(row[0]),parseInt(row[1]),sum); /*row[0],row[1],op*/
        expect(calculation.getResults()).toBe(parseInt(row[2])); /*toBe(row[2])*/
    })
});
test('Test Get results for Difference function', () => {
    CSVFile.getRecords('testCases/testSubtraction.csv').forEach(function(row, index) {
        let calculation = new Calculation(parseInt(row[0]),parseInt(row[1]), subtract);
        expect(calculation.getResults()).toBe(parseInt(row[2]));
    })
});
test('Test Get results for Product function', () => {
    CSVFile.getRecords('testCases/testMultiply.csv').forEach(function(row, index) {
        let calculation = new Calculation(parseInt(row[0]),parseInt(row[1]), multiply);
        expect(calculation.getResults()).toBe(parseInt(row[2]));
    })
});
test('Test Get results for Quotient function', () => {
    CSVFile.getRecords('testCases/testDivide.csv').forEach(function(row, index) {
        let calculation = new Calculation(parseFloat(row[0]), parseFloat(row[1]), divide);
        expect(calculation.getResults()).toBe(parseFloat(row[2]));
    })
});
test('Test Get results for Square function', () => {
    CSVFile.getRecords('testCases/testPower.csv').forEach(function(row, index) {
        let calculation = new Calculation(parseInt(row[0]), 2, power);
        expect(calculation.getResults()).toBe(parseInt(row[1]));
    })
});
test('Test Get results for Root function', () => {
    CSVFile.getRecords('testCases/testRoot.csv').forEach(function(row, index) {
        let calculation = new Calculation(parseFloat(row[0]), 2, root);
        expect(calculation.getResults()).toBe(parseFloat(row[1]));
    })
});