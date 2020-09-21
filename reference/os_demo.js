const os = require('os');
const path = require('path');
const fs = require('fs');

//get platform
console.log(os.platform());

// //get cpu core info
// console.log(os.cpus());


//get cpu architecture
console.log(os.arch());

// check free memory
console.log(os.freemem());

// check total memory
console.log(os.totalmem());

// get home directory
console.log(os.homedir());

// get no of secs your system has been up
console.log(os.uptime());

