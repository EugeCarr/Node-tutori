const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/async subfolder/first.txt', 'utf8')
const second = readFileSync('./content/async subfolder/second.txt', 'utf8')

writeFileSync(
  './content/async subfolder/result-async.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)

console.log('done with this task')
console.log('starting the next task')