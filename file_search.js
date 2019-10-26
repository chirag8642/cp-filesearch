const path = require('path');
const fs = require('fs');
const drivelist = require('drivelist');
const filehound = require('filehound');
const _ = require('lodash');


module.exports = function (keyword) {
    drivelist.list().then((drives) => {
        const drivePath = _.map(drives, (drive) => {
            return drive.mountpoints;
        })
        _.forEach(drivePath, (paths) => {
            _.forEach(paths, (driveLetter) => {
                const files = filehound.create()
                    .paths(path.resolve(driveLetter.path))
                    .includeFileStats()
                    .addFilter(customFilter)
                    .glob([`*${keyword}*`, `${keyword.toLowerCase()}`])
                    .find();
                files.then((file) => {
                    if (file.length > 0) {
                        console.log("files::", file);
                    } else {
                        console.log(`Nothing in this Folder or Drive: ${driveLetter.path}`);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        });

    });
}

function customFilter(file) {
    file._pathname = file._pathname.toLowerCase();

    return file;
}