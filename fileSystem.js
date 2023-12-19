const { readFileSync, writeFileSync, read} = require("fs")
const sourceDir = process.argv[2];
const targetDir = process.argv[3];
const readDir = readFileSync(sourceDir, 'utf8');
const writeDir = writeFileSync(targetDir, readDir);
console.log(readDir);