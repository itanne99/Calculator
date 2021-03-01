const parse = require('csv-parse')
const fs = require('fs');
const path = require('path')
const output = []

class readCSV{

    readCSV(csvFile){
        fs.createReadStream(path.resolve(csvFile))
            .pipe(parse({
                columns: false,
                delimiter: ',',
                trim: true,
                skip_empty_lines: true
            })
                .on('readable', function(){
                    let record
                    while (record = this.read()) {
                        console.log("From File",record);
                        output.push(record);
                    }
                    return output;
                })
                // When we are done, test that the parsed output matched what expected
                .on('end', function(){
                    console.log("From Array",output);
                }));
    }
}

module.exports = readCSV;