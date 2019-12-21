const fs = require('fs');
const readdir = require('recursive-readdir');
const path = require('path');

const exts = [
  '.cc',
  '.cpp',
  '.c',
  '.cxx',
  '.h',
  '.hpp'
];

function readConfig() {
  return JSON.parse(readFileSync('autocmake.json'));
}

function getAllDirectoryFiles() {
  readdir('.', [fileSelector], (err, files) => {
    console.log(files);
  });
}

function fileSelector(file, stats) {
  const ext = path.extname(file);
  return !(exts.includes(ext));
}


module.exports = {
  readConfig,
  getAllDirectoryFiles
}

getAllDirectoryFiles();