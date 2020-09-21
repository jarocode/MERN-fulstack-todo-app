const fs = require('fs');
const path = require('path');

// //create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if(err) throw err;
//     console.log('folder created');
// })

// //Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!!', (err) => {
//     if(err) throw err;
//     console.log('file written to');
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I am a node beast!!', (err) => {
//         if(err) throw err;
//         console.log('file appended')});
// })


//Read a  file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
    
});

//Rename a file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloWorld.txt'),  
    (err) => {
    if(err) throw err;
    console.log('file renamed...');
    
});