const path = require('path');
const { dirname } = require('path');

// Base file name
console.log(path.basename(__filename));

//Directory Name
console.log(path.dirname(__filename));

// Extention
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname,'test', 'hello.html'));


