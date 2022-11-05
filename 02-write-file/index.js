const fs = require('fs');
const process = require('process');
const { stdin, stdout } = process;
const path = require('path');

let writeableStream = fs.createWriteStream(path.join(__dirname, 'mynotes.txt'));
console.log('Введите текст:');
stdin.on('data', (data) => {
  if (data.toString().trim() == 'exit') {
    console.log('Выход)');
    process.exit();     
  }
  console.log('Введите текст');
  writeableStream.write(data);
});
process.stdin.resume();
process.on('SIGINT', () => {
  console.log('Успехов)');
  process.exit(); 
});
