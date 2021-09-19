const fs = require('fs-extra');

fs.mkdirsSync('folder1')
fs.writeFileSync('./folder1/textfile.txt', 'abc');
fs.mkdirsSync('folder2')
fs.moveSync('./folder1/textfile.txt', './folder2/textfile.txt');
fs.emptyDirSync('./folder2')
fs.removeSync('folder1')
fs.removeSync('folder2')
console.log('--678---678---678--222-444');
