const fs = require('fs');

fs.readFile('./1117453.png', function(err, data){
    // console.log(err);
    if (err) {
        throw new Error(err)
        return;
    }
    // console.log(data.toString())
})