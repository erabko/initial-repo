const fs = require('fs-extra');

fs.mkdirs('folder1', err => {
    if (err) return console.error(err)
    console.log('success1!')
    fs.writeFile('./folder1/textfile.txt', 'abc', err => {
        if (err) return console.error(err)
        console.log('success2!')
        fs.mkdirs('folder2', err => {
            if (err) return console.error(err)
            console.log('success3!')
            fs.copy('./folder1/textfile.txt', './folder2/textfile2.txt',  err => {
                if (err) return console.error(err)
                console.log('success4!')
                fs.emptyDir('folder1', err => {
                    if (err) return console.error(err)
                    console.log('success5!')
                    fs.remove('folder1', err => {
                        if (err) return console.error(err)
                        console.log('success6!')
                        fs.remove('folder2', err => {
                            if (err) return console.error(err)
                            console.log('success7!')
                        });
                    });
                });
            });
        });
    });
});