const path = require('node:path');
const fs = require('node:fs');

const PUBLIC_DIRECTORY = './public';

function getHtml(htmlFilename){
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFilename);
    return fs.readFileSync(htmlFilePath, 'utf-8')
}

module.exports = getHtml;