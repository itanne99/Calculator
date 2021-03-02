module.exports = class Read {
    static getRecords(filename) {
        const path = require('path')
        const fs = require('fs');
        const parse = require('csv-parse/lib/sync')
        let absolutePath = path.resolve(filename);
        const options = {
            columns: false,
            delimiter: ',',
            trim: true,
            skip_empty_lines: true
        };
        let fileContents = fs.readFileSync(absolutePath);
        const records = parse(fileContents, options)
        let list = Array();
        records.forEach(function (data) {
            list.push(data);
        })

        return list;

    }

}