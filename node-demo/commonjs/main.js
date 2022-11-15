const modulea = require("./modulea")
const moduleb = require("./moduleb")
const modulec = require("./modulec")
// delete require.cache['/Users/jiweiwei/study/blog-demo/node-demo/commonjs/modulec.js']
const modulec1 = require("./modulec")
const modulec2 = require("./modulec")

// console.log(module)
// console.log(require)

console.log(modulea) // 123
console.log(moduleb) // { num1: 1 }
console.log(modulec) // { num: 456, name: 'modulec' }

modulec.num++;

console.log(modulec1) // { num: 456, name: 'modulec' }

modulec1.num++;

console.log(modulec2) // { num: 458, name: 'modulec' }
