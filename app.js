const excel2json = require('./lib/convert-excel-to-json');

const result = excel2json({
    sourceFile: './tests/sample.xlsx',
    includeEmptyCells: true
});

console.log(result)