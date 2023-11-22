// const fs = require('fs');
// fs.writeFile('./test.txt', 'Hello World!', (err) => {
//  if (err) throw err;
//  console.log('Created file!');
// }); 
const { shuffle } = require('./suffle');
const fs = require('fs');

const Car = require('./Car')
const MyObj = require('./myobj')
const Calc = require('./Calc')

const c = new Car()
const c1 = new Calc()
// c.drive()

// c1.plus(1,1)
//////
 c1.minus1()

const sentence = 'I can see the mountain';

// console.log(shuffle(sentence.split(/\s+/)).join(' '));

// const out = fs.createWriteStream('./log1.txt', 'utf8');
// out.write("Hello world\n");
// for (let i=0; i < 10; i++) {
//   out.write(`counting... ${i}\n`);
// }
// out.end();
// console.log(MyObj[0])

// out.on('finish', function() {
//   console.log('2. Finished writing data to file');
// });

// out.on('error', function(err) {
//   console.log('2. Write failed. Error was:');
//   // error is an object with keys: ['errno', 'code', 'syscall', 'path']
//   console.log(err);
// });

// console.log('1. Waiting for data to be written... ');

// const data = await fs.readFile('./log.txt', 'utf8');
// console.log(data);
// fs.readFile('./log.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
  