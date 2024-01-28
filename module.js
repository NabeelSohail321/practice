const {name, ages} = require ('./test')
console.log(name,ages)

const os = require('os');
console.log('the system information is : ');
console.log(os.platform())
console.log(os.arch())
console.log(os.tmpdir())
console.log(os.cpus())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.release())
console.log(os.totalmem())