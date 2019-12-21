import { readFileSync } from 'fs';
import readdir from 'recursive-readdir';
import { extname } from 'path';

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
  const ext = extname(file);
  return !(exts.includes(ext));
}


export default {
  readConfig,
  getAllDirectoryFiles
}

getAllDirectoryFiles();