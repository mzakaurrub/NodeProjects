const { readFile, writeFile } = require('fs');

readFile('./Content/first.txt', 'utf8', (err, first) => {
    if (err) {
        console.log(err);
        return;
    }
    readFile('./Content/second.txt', 'utf8', (err, second) => {
        if (err) {
            console.log(err);
            return;
        }
        writeFile('./Content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Result has been written to result-async.txt');
            }
        );
    });
});
