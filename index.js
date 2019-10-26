#!/usr/bin/env node
const yargs = require('yargs');
const path = require('path');
const fs = require('fs');
const fsearch = require('./file_search')

yargs.command({
    command: "search",
    describe: "Search file name or keywords in file name across all the drives attached to your computers. You can provide full name of the file or keywords in file name ",
    builder: {
        fileName: {
            describe: "provide full file name or just keyword",
            demandOption: true,
            type: 'string',
            alias: 'f'
        }
    },
    handler: function (argv) {
        validate2(argv);
        fsearch(argv.fileName);
    }
})

function validate2(argv) {
    if (argv.fileName.length === 0) {
        throw new Error("src should not be empty");
    }
}
yargs.parse();


