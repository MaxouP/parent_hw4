const values = [3, 11, 7, 2, 9, 10];

console.log('Sum', values.reduce((a, b) => a + b));
console.log('Minium', values.reduce((a, b) => a < b ? a : b));
console.log('Maximum',values.reduce((a, b) => a > b ? a : b));