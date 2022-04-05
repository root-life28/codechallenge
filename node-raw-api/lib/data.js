const fs = require('fs');
const path = require('path');

const lib = {};

lib.basedir = path.join(__dirname, '../.data/');

// write data
lib.create = (dir, file, data, callback) => {
    // open file for write
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDes) => {
        if (!err && fileDes) {
            const stringData = JSON.stringify(data);
            fs.writeFile(fileDes, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDes, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('New File closing Error');
                        }
                    });
                } else {
                    callback('New File Writing Error');
                }
            });
        } else {
            callback('Error!!! File maybe already exists!');
        }
    });
};

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf-8', (err, data) => {
        callback(err, data);
    });
};

// update existing file
lib.update = (dir, file, data, callback) => {
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDes) => {
        if (!err && fileDes) {
            const stingData = JSON.stringify(data);
            fs.ftruncate(fileDes, (err1) => {
                if (!err1) {
                    fs.writeFile(fileDes, stingData, (err3) => {
                        if (!err3) {
                            fs.close(fileDes, (err4) => {
                                if (err4) {
                                    callback('Error!!! Update file closing error');
                                } else {
                                    callback('file update success');
                                }
                            });
                        } else {
                            console.log('file writing error');
                        }
                    });
                } else {
                    console.log('Error!! file truncating');
                }
            });
        } else {
            console.log('Error!! Updating file maybe not exist');
        }
    });
};
// delete file

lib.delete = (dir, file, callback) => {
    // unlink
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) {
            callback('File Delete Successful');
        } else {
            callback('File Delete  unsuccessful');
        }
    });
};
module.exports = lib;
