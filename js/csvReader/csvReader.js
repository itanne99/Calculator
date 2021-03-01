const parse = require('csv-parse')
const fs = require('fs');
const output = []

class readCSV{

    readCSV(csvFile){
        fs.createReadStream(csvFile)
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