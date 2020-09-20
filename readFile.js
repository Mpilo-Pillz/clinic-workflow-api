const fs = require('fs')
const readline = require('readline');

async function writeContentsToNewFile(saveFilePath) {
    const fileStream = fs.createReadStream('medicalcodes');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    const json = {};
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        const [code, ...rest] = line.split(" ");
        json[code] = rest.join('');
    }
    console.log(JSON.stringify(json));
}

writeContentsToNewFile('copiedMedicalCodes.json', 'medicalcodes');


// after every first space create a key and a value

