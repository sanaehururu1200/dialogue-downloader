const fs = require('fs');
let files = fs.readdirSync('./plugins');
console.log(files);
files.forEach((className) => {
    if(className === '.gitkeep') return;
    let fileClass = require('./plugins/' + className + '/' +  className + '.js');
    let config = JSON.parse(require('fs').readFileSync('./plugins/' + className + '/config.json'));
    fileClass.start(config, write);
});

function write(out, tag) {
    console.log(out);
    fs.appendFile(`./downloads/${tag}.txt`, out, () => {});
    fs.appendFile('./downloads/all.txt', out, () => {});
}