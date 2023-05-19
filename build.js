const insertCode = '<!-- INSERT HERE -->';
const insertLastUpdate = 'Last update: unknown';
var html = '';

const fs = require('fs');

var index = fs.readFileSync('index-original.html', { encoding: 'utf-8' });

const folder = './i/';
fs.readdirSync(folder).forEach(file => {
    html += '<a href="i/' + file + '" title="' + file + '"><img src="i/' + file + '" alt="' + file + '"></a>';
});

index = index.replace(insertLastUpdate, 'Last update: ' + (new Date()).toUTCString());
index = index.replace(insertCode, html);
fs.writeFileSync('index.html', index, { encoding: 'utf-8' });

console.log('Done!');