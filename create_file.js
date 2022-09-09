const fs = require('fs');

const file = fs.createWriteStream('text.txt');

exports.createFile = (array) =>{
    file.on('error', (err) => {
        if (err) console.log(err);
    });
    
    array.forEach((line) => {
        console.log('Line writing: ',line);
        file.write(line + '\n');
    });
    
    file.end();
    console.log('File write finished.');
}