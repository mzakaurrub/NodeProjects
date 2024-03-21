const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./Content/first.txt', 'utf8')
const second = readFileSync('./Content/second.txt', 'utf-8')

console.log(first, second)
writeFileSync('./Content/result.txt',
`Here is the result: ${first},${second}`,
{flag:'a'}
)