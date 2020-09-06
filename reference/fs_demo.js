const fs = require('fs');
const path = require('path')

// fs.mkdir(path.join(__dirname,'test'),{}, err =>{
// if (err) throw err;
// console.log('Folder created...')
// } );

// Create and Write to file
fs.writeFile(path.join(__dirname,'test','hello.txt'),'Hello World!',
 err =>{
    if (err) throw err;
    console.log('File created...')
    } );

// Create and Write to file.. Actully overrides the content in the file
// fs.writeFile(path.join(__dirname,'test','hello.txt'),'I Love Node.js!',
// err =>{
//    if (err) throw err;
//    console.log('File created...')
//    } );

// Append content to the file
fs.appendFile(path.join(__dirname,'test','hello.txt'),'I Love Node!',
 err =>{
    if (err) throw err;
    console.log('File created...')
    } );


// Read content from the file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',
(err,data) =>{
   if (err) throw err;
   console.log(data)
   } );

// Rename a file
fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','helloWorld.txt'),
    err => {
        if(err) throw err;
        console.log('File renamed...');
    }
);